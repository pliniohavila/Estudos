#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void)
{
    float cashInput;

    // Check if cashInput is more than 0
    do
    {
        cashInput = get_float("Change owed: ");
    }
    while (cashInput < 0);

    // Convert cashInput to INT
    int cents = (int)round((cashInput * 100));

    // 25, 10, 5, 1
    int counter = 0;

    // Count to the 0.25 ceents
    while (cents >= 25)
    {
        cents = cents - 25;
        counter += 1;
    }

    // Count to the 0.10 ceents
    while (cents >= 10)
    {
        cents = cents - 10;
        counter += 1;
    }

    // Count to the 0.05 ceents
    while (cents >= 5)
    {
        cents = cents - 5;
        counter += 1;
    }

    // Count to the 0.01 ceents
    while (cents >= 1)
    {
        cents = cents - 1;
        counter += 1;
    }

    // Print the total number of the cash dispensing
    printf("%i\n", counter);

    return 0;
}