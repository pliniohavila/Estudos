// Implements a dictionary's functionality
#include <ctype.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>

#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
}
node;

// TODO: Choose number of buckets in hash table
const unsigned int N = (LENGTH + 1)  * 'z';

// Hash table
node *table[N];
// Sum of the list items
int sizeTable = 0;

// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    // TODO
    // Hashing the word to check
    int index = hash(word);

    node *cursor = table[index];

    while (cursor != NULL)
    {
        if (strcasecmp(word, cursor->word) == 0)
        {
            return true;
        }
        cursor = cursor->next;
    }

    // free(cursor);
    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    // TODO: Improve this hash function
    // http://www.cse.yorku.ca/~oz/hash.html
    unsigned int hash = 5381;
    int c;

    while ((c = *word++))
    {
        hash = ((hash << 5) + hash) + tolower(c);
    }
    return (hash % N);
}

// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary)
{
    // Load all words from the dictionary into an ordered
    // ordered data structure, such as a hash table
    FILE *dict;
    dict = fopen(dictionary, "r");
    if (dict == NULL)
    {
        return false;
    }
    // Read string at a time from the dict file
    int index = 0;
    char word[LENGTH + 1];
    while (fscanf(dict, "%s", word) != EOF)
    {
        node *newNode = malloc(sizeof(node));
        if (newNode == NULL)
        {
            return false;
        }
        strcpy(newNode->word, word);
        index = hash(word);
        newNode->next = table[index];
        table[index] = newNode;
        sizeTable++;
    }

    fclose(dict);
    return true;
}

// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    // TODO
    return sizeTable;
}

// Unloads dictionary from memory, returning true if successful, else false
bool unload(void)
{
    // Fre the linked list
    for (int i = 0; i < N; i++)
    {
        node *cursor = table[i];

        while (cursor != NULL)
        {
            node *tmp = cursor;
            cursor = cursor->next;
            free(tmp);
        }
        // Case cursor equal NULL
        if (i == N - 1 && cursor == NULL)
        {
            return true;
        }
    }
    return false;
}
