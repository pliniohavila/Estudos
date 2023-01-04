// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

export function breakingRecords(scores) {
    let highestScores = [scores[0]];
    let lowestScores = [scores[0]];

    scores.forEach((score) => {
        if (score > highestScores.at(-1)) highestScores.push(score);
        if (score < lowestScores.at(-1)) lowestScores.push(score);
    });

    return [highestScores.length - 1, lowestScores.length - 1];
}