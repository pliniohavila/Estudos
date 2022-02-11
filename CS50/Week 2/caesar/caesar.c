#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>
#include <cs50.h>

// function prototypes
int check_key(string input);
int caesar(int key);

int main(int argc, char *argv[])
{
    // check the argv
    if (argc != 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }
    // Check the key is only digit
    int key = 0;
    key = check_key(argv[1]);

    caesar(key);  // Call the function to chiper
    return 0;
}

// Function to chipher
int caesar(int key)
{
    string plaintext = get_string("plaintext: ");  // Input de strint to chipher
    int len = strlen(plaintext);  // length os the input
    string ciphertext = malloc((len + 1) * sizeof(char)); // strint chipher

    for (int i = 0; i < len; i++)
    {
        // Check if input is a Alpha
        if (isalpha(plaintext[i]))
        {
            // Check if char is alpha lower
            if (islower(plaintext[i]))
            {
                ciphertext[i] = ((plaintext[i] - 97) + key) % 26 + 97; //Chipher
            }
            // Check if char is alpha upper
            else if (isupper(plaintext[i]))
            {
                ciphertext[i] = (((plaintext[i] - 65) + key) % 26) + 65; //Chiper
            }
        }
        // If char not if a alpha, not chipher
        else
        {
            ciphertext[i] = plaintext[i];
        }
    }

    // string cph = ciphertext;
    printf("ciphertext: %s\n", ciphertext);
    free(ciphertext);
    exit(0);
}

// Function to the check the key input
int check_key(string input)
{
    int l = strlen(input); // Length of the input
    // Interact with input to check is a digit
    for (int i = 0; i < l; i++)
    {
        // Is input not a digit
        if (isdigit(input[i]) == 0)
        {
            printf("Usage: ./caesar key\n");
            exit(1);
        }
    }
    // Return the key input as int
    int k = 0; //
    sscanf(input, "%d", &k);
    return k;
}