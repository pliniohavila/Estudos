#include <stdio.h>
#include <stdlib.h>
#include <string.h>


// Verifica se tem itens na pilha
// Recebe um ponteiro para a pilha, retornando: 1, se vazia; 0, se com algum item
int stack_empty(int *a)
{
    if (a[0] == 0)
    {
        return 1;
    }
    return 0;
}

// Adiciona item a pilha 
// Ha laco for que pecorre a pilha, no primeito endereco com zero
// encontrado e colocado o novo item
int push(int *a, int t, int l)
{
    for (int i = 0; i < l; i++)
    {
        if (a[i] == 0)
        {
            a[i] = t;
            return 1;
        }
    }
    return 0;
}

// Retira itens da pilha 
// Primeiro verifica se a pilha esta vazia, se sim: retorna underflow
// Caso nao, retira o ultimo elemento
int pop(int *pilha, int t)
{
    if (stack_empty(pilha) == 1)
    {
        printf("Underflow!\n");
        return 0;
    }
    else
    {
        pilha[t] = 0;
    }
}

// Imprime os elementos da pilha
void printPilha(int *pilha)
{
    for (int i = 0; i < 10; i++)
    {
        printf("%d ", pilha[i]);
    }
    printf("\n");
}

int main()
{
    int pilha[10];
    // Zera todos os elementos da pilha(array)
    // Para evitar que tenha lixo 
    memset(pilha, 0, sizeof pilha);
    // Pega o tamanho da pilha
    int l = sizeof(pilha) / sizeof(int);

    if (stack_empty(pilha) == 1) printf("Pilha vazia\n");

    pop(pilha, 1);

    int top = 0;
    while (top < 6)
    {
        push(pilha, top, l);
        top++;
    }
    top--;

    if (stack_empty(pilha) == 0) printf("Pilha com itens\n");
    printPilha(pilha);

    pop(pilha, top - 1);
    printf("Pilha apos remover item\n");
    printPilha(pilha);

    return 0;
}
