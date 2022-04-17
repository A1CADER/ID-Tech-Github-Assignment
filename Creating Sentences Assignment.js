let arr1 = ["This ", "is ", "JavaScript ", "Bootcamp!"];

let sentence = "";

function createSentence(arr1)
{
    for(let i = 0; i < 4; i++)
    {
        sentence = sentence + arr1[i];
    }

    console.log(sentence);
}

createSentence(arr1);