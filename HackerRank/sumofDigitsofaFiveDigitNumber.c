// https://www.hackerrank.com/challenges/sum-of-digits-of-a-five-digit-number/problem

#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    int n;
    scanf("%d", &n);
    //Complete the code to calculate the sum of the five digits on n.
    short int m, c = 0;

    while(n != 0)
    {
        m = n%10;
        c += m;
        n = (n - m) / 10;
    }

    printf("%d\n", c);
    return 0;
}
