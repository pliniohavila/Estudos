#include "helpers.h"
#include <stdio.h>
#include <math.h>
#include <stdlib.h>


void check(int *value);
int myRound(double number);

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    // Pecorrer cada linha da imagem
    for (int i = 0; i <= height; i++)
    {
        for (int j = 0; j <= width; j++)
        {
            float mediaColorPrimary = (image[i][j].rgbtBlue + image[i][j].rgbtGreen + image[i][j].rgbtRed) / 3.00;
            int mediaColor = round(mediaColorPrimary);

            image[i][j].rgbtBlue = mediaColor;
            image[i][j].rgbtGreen = mediaColor;
            image[i][j].rgbtRed = mediaColor;
        }
    }
    return;
}

// Convert image to sepia
void sepia(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            int newRed = round(.393 * image[i][j].rgbtRed + .769 * image[i][j].rgbtGreen + .189 * image[i][j].rgbtBlue);
            int newGreen = round(.349 * image[i][j].rgbtRed + .686 * image[i][j].rgbtGreen + .168 * image[i][j].rgbtBlue);
            int newBlue = round(.272 * image[i][j].rgbtRed + .534 * image[i][j].rgbtGreen + .131 * image[i][j].rgbtBlue);


            image[i][j].rgbtBlue = (newBlue > 255) ? 255 : newBlue;
            image[i][j].rgbtGreen = (newGreen > 255) ? 255 : newGreen;
            image[i][j].rgbtRed = (newRed > 255) ? 255 : newRed;
        }
    }
    return;
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < (width / 2); j++)
        {
            int pixelBlue = image[i][j].rgbtBlue;
            int pixelGreen = image[i][j].rgbtGreen;
            int pixelRed = image[i][j].rgbtRed;

            image[i][j].rgbtBlue = image[i][width - j - 1].rgbtBlue;
            image[i][j].rgbtGreen = image[i][width - j - 1].rgbtGreen;
            image[i][j].rgbtRed = image[i][width - j - 1].rgbtRed;

            image[i][width - j - 1].rgbtBlue = pixelBlue;
            image[i][width - j - 1].rgbtGreen = pixelGreen;
            image[i][width - j - 1].rgbtRed = pixelRed;
        }
    }
    return;
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    // Declare initial var of the pixel color
    int sumBlue;
    int sumGreen;
    int sumRed;
    float counter;

    // Create a temporary image
    RGBTRIPLE tempImage[height][width];

    for (int i = 0; i < width; i++)
    {
        for (int j = 0; j < height; j++)
        {
            // Atribute zero values to vars
            sumBlue = 0;
            sumGreen = 0;
            sumRed = 0;
            counter = 0.00;

            // Check pixels values is valid
            for (int k = -1; k < 2; k++)
            {
                if (j + k < 0 || j + k > height - 1)
                {
                    continue;
                }

                for (int h = -1; h < 2; h++)
                {
                    if (i + h < 0 || i + h > width - 1)
                    {
                        continue;
                    }

                    // Calc the avarae of the pixels colors
                    sumBlue += image[j + k][i + h].rgbtBlue;
                    sumGreen += image[j + k][i + h].rgbtGreen;
                    sumRed += image[j + k][i + h].rgbtRed;
                    counter++;
                }
            }

            // averages the sum to make picture look blurrier
            tempImage[j][i].rgbtBlue = round(sumBlue / counter);
            tempImage[j][i].rgbtGreen = round(sumGreen / counter);
            tempImage[j][i].rgbtRed = round(sumRed / counter);
        }
    }

    // Copy values from temporary image
    for (int i = 0; i < width; i++)
    {
        for (int j = 0; j < height; j++)
        {
            image[j][i].rgbtBlue = tempImage[j][i].rgbtBlue;
            image[j][i].rgbtGreen = tempImage[j][i].rgbtGreen;
            image[j][i].rgbtRed = tempImage[j][i].rgbtRed;
        }
    }
    return;
}