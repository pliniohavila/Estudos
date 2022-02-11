#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max number of candidates
#define MAX 9

// Candidates have name and vote count
typedef struct
{
    string name;
    int votes;
}
candidate;

// Array of candidates
candidate candidates[MAX];

// Number of candidates
int candidate_count;

// Function prototypes
bool vote(string name);
void print_winner(void);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: plurality [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX)
    {
        printf("Maximum number of candidates is %i\n", MAX);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0;
    }

    int voter_count = get_int("Number of voters: ");

    // Loop over all voters
    for (int i = 0; i < voter_count; i++)
    {
        string name = get_string("Vote: ");

        // Check for invalid vote
        if (!vote(name))
        {
            printf("Invalid vote.\n");
        }
    }

    // Display winner of election
    print_winner();
}

// Update vote totals given a new vote
bool vote(string name)
{
    // This loop makes the comparison between the vote and the list of candidates
    for (int i = 0; i < candidate_count; i++)
    {
        // If found the candidate, sum a vote for candidate
        if (strcmp(name, candidates[i].name) == 0)
        {
            candidates[i].votes++;
            return true;
        }
    }
    // Otherwise, return false
    return false;
}

// Print the winner (or winners) of the election
void print_winner(void)
{
    // Initializes the largest vote as zero
    int max_votes = 0;
    // This loop for the found the candidate with more votes
    for (int j = 0; j < candidate_count; j++)
    {
        // If cadidate have more votes, the number de max_votes is update
        if (candidates[j].votes >= max_votes)
        {
            max_votes = candidates[j].votes;
        }
    }

    // This loop to print the candidates more votedes
    for (int k = 0; k < candidate_count; k++)
    {
        // If number of the votes of the candidate equal to max_votes
        // Print the candidate's name
        if (candidates[k].votes == max_votes)
        {
            printf("%s\n", candidates[k].name);
        }
    }

    return;
}