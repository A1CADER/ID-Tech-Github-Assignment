let fortune = 123456789;

if (fortune > 0 && fortune <= 3)
    console.log("Fortune selected: " + fortune + "\nOh no! You selected a low fortune!");

else if (fortune > 3 && fortune <= 7)
    console.log("Fortune selected: " + fortune + "\nYou selected an average fortune.");

else if (fortune > 7 && fortune <= 10)
    console.log("Fortune selected: " + fortune + "\nCongratulations! You selected a great fortune!");

else
{
    console.log("Fortune selected: " + fortune + "\nIt was hard to determine your fortune, try again!");
}

// third else statement needs brackets