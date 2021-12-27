#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
    int a, b;
    scanf("%d\n%d", &a, &b);

      // Complete the code.
      if (a < 1 || b < a || (a || b) > 1000000)
      {
        return 0;
      }

    char* ext[9] = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};

      for (int i = a; i <= b; i++)
      {
          if (i < 10)
          {
                printf("%s\n", ext[i-1]);
          }
          else if ( i > 9 && i%2 == 0)
          {
              printf("even\n");
          }
          else
          {
              printf("odd\n");
          }
      }
    return 0;
}
