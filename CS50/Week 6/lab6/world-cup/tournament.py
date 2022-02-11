# Simulate a sports tournament

import csv
import sys
import random
import math

# Number of simluations to run
N = 1000


def main():

    # Ensure correct usage
    if len(sys.argv) != 2:
        sys.exit("Usage: python tournament.py FILENAME")

    teams = []
    # TODO: Read teams into memory from file
    # Read csv file to memory
    with open(sys.argv[1], newline='\n') as csvfile:
        teamsFromCSV = csv.DictReader(csvfile)
        # Read line from csv object and convert each rating to int
        for row in teamsFromCSV:
            row['rating'] = int(row['rating'])
            teams.append(dict(row))

    counts = {}
    # TODO: Simulate N tournaments and keep track of win counts
    m = 1
    # Loop to quantity of simulations
    while m < N:
        # winner of this simulation
        winner = simulate_tournament(teams)
        # Add winner and amount of times won to the counts dictionary
        if winner in counts:
            counts[winner] = counts[winner] + 1
        else:
            counts[winner] = 1

        m += 1

    # Print each team's chances of winning, according to simulation
    for team in sorted(counts, key=lambda team: counts[team], reverse=True):
        print(f"{team}: {counts[team] * 100 / N:.1f}% chance of winning")


def simulate_game(team1, team2):
    """Simulate a game. Return True if team1 wins, False otherwise."""
    rating1 = team1["rating"]
    rating2 = team2["rating"]
    probability = 1 / (1 + 10 ** ((rating2 - rating1) / 600))
    return random.random() < probability


def simulate_round(teams):
    """Simulate a round. Return a list of winning teams."""
    winners = []

    # Simulate games for all pairs of teams
    for i in range(0, len(teams), 2):
        if simulate_game(teams[i], teams[i + 1]):
            winners.append(teams[i])
        else:
            winners.append(teams[i + 1])

    return winners


def simulate_tournament(teams):
    """Simulate a tournament. Return name of winning team."""
    # TODO
    # Copy list 'teams' to 'winners'
    winners = teams
    # Rounds until game winner
    rounds = int(math.log2(len(teams)))
    for i in range(rounds):
        j = 0
        # Winners from the round
        winTourn = []
        # Rounds games, add to winTourn list
        while j < len(winners):
            # Simule the round
            t = simulate_round([winners[j], winners[j + 1]])
            winTourn.append(t[0])
            j += 2
        # Update the winners list until has one winner
        winners = winTourn

    # Return winner
    return winners[0]['team']


if __name__ == "__main__":
    main()
