
const print = console.log.bind(console);

function migratoryBirds(arr) {
    let groupBirdsId = {};
    let  maxFrequently  = 0;

    arr.forEach((birdId) => {
        if (groupBirdsId.hasOwnProperty(birdId)) {
            groupBirdsId[birdId]++;
            maxFrequently = groupBirdsId[birdId] > maxFrequently ? groupBirdsId[birdId] : maxFrequently;
        } else {
            groupBirdsId[birdId] = 1;
        }
    });

    
    const onlyWithMaxFrequently = [];
    for (let bird in groupBirdsId) {
        if (groupBirdsId[bird] === maxFrequently) {
            onlyWithMaxFrequently.push([parseInt(bird), groupBirdsId[bird]]);
        }
    }

    let smallerBirdIdFrequently = onlyWithMaxFrequently[0][0];
    onlyWithMaxFrequently.forEach((bird) => {
        if (bird < smallerBirdIdFrequently) {
            smallerBirdIdFrequently = bird[0];
        }
    });

    return smallerBirdIdFrequently;
}


const arr = [1, 4, 4, 4, 5, 3];
print(migratoryBirds(arr));