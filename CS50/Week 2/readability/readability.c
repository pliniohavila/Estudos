#include <stdio.h>
#include <math.h>
#include <cs50.h>

// Function Prototypes
int count_letters(string word);
int count_blank(string word);
int count_sentences(string word);
float coleman_liau(int l, int w, int s);
int check_symbols(string word);

int main(void)
{
    // Declaring initial variables
    string input = get_string("Text: ");
    int letters = 0;
    int sentences = 0;
    int blanks = 0;
    int words = 0;

    // Receive the return of the functions
    sentences = (count_sentences(input));
    blanks = count_blank(input);
    letters = count_letters(input);
    words = blanks + 1;

    // Calls the function to calculate the index
    float index = coleman_liau(letters, words, sentences);

    // Handling single sentences with multiple words
    if (words < 50 && sentences == 1 && check_symbols(input) == 0)
    {
        index--;
    }

    // Handling results
    if (index < 1)
    {
        printf("Before Grade 1\n");
    }
    else if (index >= 16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        printf("Grade %.f\n", index);
    }

    return 0;
}

// Function to calculate the index
float coleman_liau(int l, int w, int s)
{
    float L = round(((float)l / (float)w) * 100); // Calculate the L
    float S = round(((float)s / (float)w) * 100); // Calculate the S

    float index = (0.0588 * L) - (0.296 * S) - 15.8; // The Coleman-Liau index

    return index;
}

// Function to calculate the blank spaces
int count_blank(string word)
{
    int blank = 0;
    for (int i = 0; word[i] != '\0'; i++)
    {
        if (word[i] == ' ')
        {
            blank++;
        }
    }
    return blank;
}

// Function to calculate the sentences
int count_sentences(string word)
{
    int noteSentences = 0;

    // Loop to calculate the sentences
    for (int i = 0; word[i] != '\0'; i++)
    {
        if (word[i] == '!' || word[i] == '.' || word[i] == '?')
        {
            noteSentences++;
        }
    }
    return noteSentences;
}

// Function to calculate the letters
int count_letters(string word)
{
    int letters = 0;

    for (int i = 0; word[i] != '\0'; i++) // Loop to calculate the letters
    {
        if ((word[i] >= 'a' && word[i] <= 'z') || (word[i] >= 'A' && word[i] <= 'Z'))
        {
            letters++;  // Increment the letters to sum
        }
    }
    return letters;
}

// Function to calculate the symbols
int check_symbols(string word)
{
    int symbool = 0;

    for (int i = 0; word[i] != '\0'; i++)
    {
        if (word[i] == ',')
        {
            symbool++;
        }
    }
    return symbool;
}