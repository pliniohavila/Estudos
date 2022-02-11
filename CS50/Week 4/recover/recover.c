#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

typedef uint8_t BYTE;

int main(int argc, char *argv[])
{
    // Check the arguments
    if (argc != 2)
    {
        return 1;
    }

    // Check if opened the card raw
    FILE *file = fopen(argv[1], "r");
    if (!file)
    {
        return 1;
    }

    // Declare initials variables
    BYTE block[512];
    int counter = 0;
    FILE *imgRecovered = NULL;
    char imgName[8];


    // Read card raw until the end
    while (fread(&block, 512, 1, file) == 1)
    {
        // Check if block as a header jpg file
        if (block[0] == 0xff && block[1] == 0xd8 && block[2] == 0xff && (block[3] & 0xf0) == 0xe0)
        {
            // If exists file jpg opened, if yes, close it
            if (imgRecovered != NULL)
            {
                fclose(imgRecovered);
            }

            // If not, create a new jpg file
            sprintf(imgName, "%03i.jpg", counter);
            imgRecovered = fopen(imgName, "w");
            counter++;   // Incresead the contator
        }

        // Recover the jpg file from sd card to new image
        if (imgRecovered != NULL)
        {
            fwrite(&block, 512, 1, imgRecovered);
        }
    }

    // Close the files
    fclose(imgRecovered);
    fclose(file);

    return 0;
}