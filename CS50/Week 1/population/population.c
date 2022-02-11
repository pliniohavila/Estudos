#include <cs50.h>
#include <stdio.h>
#import <math.h>


int main(void)
{
    int startSize, endSize;

    // TODO: Prompt for start size
    do
    {
        startSize =  get_int("Start size: ");
    } while (startSize < 9);

    // TODO: Prompt for end size
    do
    {
        endSize =  get_int("End size: ");
    } while (endSize < startSize);

    // TODO: Calculate number of years until we reach threshold
    int counterYears = 0;
    float borns, passAway;

    while (startSize < endSize)
    {
        borns = (int)floor(startSize / 3);
        passAway = (int)floor(startSize / 4);

        startSize = startSize + borns - passAway;
        counterYears++;
    }

    // TODO: Print number of years
    printf("Years: %i\n", counterYears);
    return 0;
}