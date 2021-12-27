#include <stdio.h>

int max_of_four(int a, int b, int c, int d);

int main(void)
{
	int a, b, c, d;
	scanf("%d %d %d %d", &a, &b, &c, &d);
	int ans = max_of_four(a, b, c, d);
	printf("%d\n", ans);

	return 0;
}

int max_of_four(int a, int b, int c, int d)
{
	int max = 0;
	int arr[] = {a, b, c, d};
	int len = sizeof(arr) / sizeof (int);

	for (int i = 0; i < len; i++)
	{
		if (max < *(arr+i))
			max = *(arr+i);
	}
	return max;
}
