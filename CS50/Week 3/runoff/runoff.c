#include <cs50.h>
#include <stdio.h>
#include <string.h>
// Max voters and candidates
#define MAX_VOTERS 100
#define MAX_CANDIDATES 9

// preferences[i][j] is jth preference for voter i
int preferences[MAX_VOTERS][MAX_CANDIDATES];

// Candidates have name, vote count, eliminated status
typedef struct
{
    string name;
    int votes;
    bool eliminated;
}
candidate;

// Array of candidates
candidate candidates[MAX_CANDIDATES];

// Numbers of voters and candidates
int voter_count;
int candidate_count;

// Function prototypes
bool vote(int voter, int rank, string name);
void tabulate(void);
bool print_winner(void);
int find_min(void);
bool is_tie(int min);
void eliminate(int min);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: runoff [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX_CANDIDATES)
    {
        printf("Maximum number of candidates is %i\n", MAX_CANDIDATES);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0;
        candidates[i].eliminated = false;
    }

    voter_count = get_int("Number of voters: ");
    if (voter_count > MAX_VOTERS)
    {
        printf("Maximum number of voters is %i\n", MAX_VOTERS);
        return 3;
    }

    // Keep querying for votes
    for (int i = 0; i < voter_count; i++)
    {

        // Query for each rank
        for (int j = 0; j < candidate_count; j++)
        {
            string name = get_string("Rank %i: ", j + 1);

            // Record vote, unless it's invalid
            if (!vote(i, j, name))   // vote(int voter, int rank, string name)
            {
                printf("Invalid vote.\n");
                return 4;
            }
        }

        printf("\n");
    }

    // Keep holding runoffs until winner exists
    while (true)
    {
        // Calculate votes given remaining candidates
        tabulate();

        // Check if election has been won
        bool won = print_winner();
        if (won)
        {
            break;
        }

        // Eliminate last-place candidates
        int min = find_min();
        bool tie = is_tie(min);

        // If tie, everyone wins
        if (tie)
        {
            for (int i = 0; i < candidate_count; i++)
            {
                if (!candidates[i].eliminated)
                {
                    printf("%s\n", candidates[i].name);
                }
            }
            break;
        }

        // Eliminate anyone with minimum number of votes
        eliminate(min);

        // Reset vote counts back to zero
        for (int i = 0; i < candidate_count; i++)
        {
            candidates[i].votes = 0;
        }
    }
    return 0;
}

// Record preference if vote is valid
bool vote(int voter, int rank, string name)
{

    for (int i = 0; i < candidate_count; i++)
    {
        // If found the candidate, sum a vote for candidate
        if (strcmp(name, candidates[i].name) == 0)
        {
            // Computo todos os votos na matriz bidimencional
            preferences[voter][rank] = i;
            return true;
        }
    }
    // Otherwise, return false
    return false;
}

// Tabulate votes for non-eliminated candidates
void tabulate(void)
{
    for (int i = 0; i < voter_count; i++)
    {
        int rank = 0;  // Pecorre as linhas, se o candidato analisado for elimnado
        while (candidates[preferences[i][rank]].eliminated != false)
        {
            rank++;
        }
        candidates[preferences[i][rank]].votes += 1;
    }

    return;
}

// Print the winner of the election, if there is one
bool print_winner(void)
{
    int total_votes = 0;  // Variavel para armazenar o total de votos
    for (int j = 0; j < candidate_count; j++)  // Somo o total de votos
    {
        total_votes += candidates[j].votes;
    }

    int index_winner = 0; // Variavel para salvar o index do candidato winner
    for (int k = 0; k < candidate_count; k++)
    {
        // printf("%s teve %d votos\n", candidates[k].name, candidates[k].votes);
        if (candidates[k].votes > (total_votes / 2))  // Procuro o candidato vencedor e salvo o seu index na var index_winner
        {
            index_winner = k;
        }
    }

    // Print the winner candidate and return true
    if (candidates[index_winner].votes > (total_votes / 2))
    {
        printf("%s\n", candidates[index_winner].name);
        return true;
    }
    return false;
}

// Return the minimum number of votes any remaining candidate has
int find_min(void)
{
    int min_votes = candidates[0].votes;
    int index_min = 0;
    for (int k = 0; k < candidate_count; k++)
    {
        if (candidates[k].eliminated == false && candidates[k].votes < min_votes)
        {
            min_votes = candidates[k].votes;
            index_min = k;
        }
    }
    return min_votes;
}

// Return true if the election is tied between all candidates, false otherwise
bool is_tie(int min)
{
    for (int k = 0; k < candidate_count; k++)
    {
        if (candidates[k].eliminated == false && candidates[k].votes != min)
        {
            return false;
        }
    }

    return true;
}

// Eliminate the candidate (or candidates) in last place
void eliminate(int min)
{
    for (int i = 0; i < candidate_count; i++)
    {
        if (candidates[i].votes == min)
        {
            candidates[i].eliminated = true;
        }
    }
    return;
}