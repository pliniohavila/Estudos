#include <stdio.h>
#include <stdlib.h>

void update(int *a, int *b) {
    int tmp = (*a);
    (*a) = ((*a)+(*b));
    (*b) = abs((tmp-(*b))); 
}

int main(void)
{
    int a, b;
    scanf("%d %d", &a, &b);
    update(&a, &b);
    printf("%d\n%d\n", a, b);

    return 0;
}
