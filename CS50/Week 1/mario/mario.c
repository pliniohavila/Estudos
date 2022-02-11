#include <stdio.h>
#include <cs50.h>

int main(void)
{
    // Get user's input for the pyramid lenght
    int height;
    do
    {
        height = get_int("Height: ");
    }
    while (height < 1 || height > 8);

    // Initial loop
    for (int i = 0; i < height; i++)
    {
        // Set white space lenght
        int s = height - i;

        // Loop of the white space
        for (int a = s; a > 0; a--)
        {
            if (a != height - i)
            {
                printf(" ");
            }
        }

        // Print the left side
        for (int b = 0; b <= i; b++)
        {
            printf("#");
        }

        // Separator of the sides
        printf("  ");

        // Print the right side
        for (int j = 0; j <= i; j++)
        {
            printf("#");
        }
        printf("\n");
    }
    return 0;
}

