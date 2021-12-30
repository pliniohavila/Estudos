//https://www.hackerrank.com/challenges/bitwise-operators-in-c/problem?isFullScreen=true

#include <stdio.h>
//Complete the following function.

void calculate_the_maximum(int n, int k) {
  //Write your code here.
  int aeb = 0;
  int aorb = 0;
  int axorb = 0; 
  for (int i = 1; i < n; i++)
  {
    for (int j = i+1; j <= n; j++)
    {
        //printf("a = %d, b = %d - AND: %d ", i, j, (i & j));
        //printf("OR: %d ", (i | j));
        //printf("XOR: %d\n", (i ^ j));
        
        if ((i & j) > aeb && (i & j) < k)
        {
            aeb = (i & j);
        }
        if ((i | j) > aorb && (i | j) < k)
        {
            aorb = (i | j);
        }
        if ((i ^ j) > axorb && (i ^ j) < k)
        {
            axorb = (i ^ j);
        }
    }
  }
  
  printf("%d\n", aeb);
  printf("%d\n", aorb);
  printf("%d\n", axorb);
}

int main() {
    int n, k;
  
    scanf("%d %d", &n, &k);
  
    if (n < 2 || n > 10000) return -1;
    if (k < 2 || k > n) return -1;
  
    calculate_the_maximum(n, k);
 
    return 0;
}
