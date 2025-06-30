var partOne;
partOne = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus', 'Pluto']

// sentence part one, 9 options

var partTwo;
partTwo = ['Ascendance', 'Exaltation', 'Conjunction', 'Midheaven', 'Equinox', 'Retrograde']

// sentence part two, 6 options

var partThree;
partThree = ['fiery', 'quick-tempered', 'expressive', 'confident', 'patient', 'reliable', 'ambitious', 'stubborn', 'flexible', 'balanced', 'passionate', 'imaginative']

// sentence part three, 12 options

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// generates a random number based on input

function createSentence() {
    var primary = getRandomInt(9);
    var secondary = getRandomInt(6);
    var tertiary = getRandomInt(12);

    let sentenceOne = partOne[primary];
    let sentenceTwo = partTwo[secondary];
    let sentenceThree = partThree[tertiary];

    return console.log(`Your planet, ${sentenceOne}, is in ${sentenceTwo} and this is causing you to be ${sentenceThree}!`)
}

// takes a random number, retrieves the relevant array number and uses that to form a sentence.

createSentence();