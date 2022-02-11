#include <stdio.h>
#include <cs50.h>
#include <string.h>

// 4003600000000014

int main(void)
{
    long card;
    card = get_long("Number: ");
    printf("%li\n", card);

    char cardString[255];
    sprintf(cardString, "%li", card);

    int num, sum = 0;

    for(int i = 0; i < strlen(cardString) - 1; i++)
    {
        if (i % 2 == 0)
        {
            printf("N:%c", cardString[i]);
            num = (int) cardString[i] - 48;
           // printf("N:%c - SN:%i ", cardString[i], num);
            sum = sum + (num*2);

        }
    }
    printf("\nSUM: %i ", sum);

    printf("\n");
    return 0;
}