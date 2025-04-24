let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    document.getElementById('inputText').value = testText;
    document.getElementById('output').innerHTML = "";

    startTime = new Date().getTime();

    const button = document.getElementById('btn');
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest(){
    endTime = new Date().getTime();
    const timeElapsed = (endTime - startTime) / 1000; // in seconds

    document.getElementById('userInput').readonly = true;

    const userTypedText = document.getElementById('userInput').value;
    const typedWords = userTypedText.split(/\s+/).filter(word => word !== "").length;

    let wpm = 0;
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60)
    }

    document.getElementById('output').innerHTML = `
    <h2>Typing Test Results:</h2>
    <p>Words typed: ${typedWords}</p>
    <p>Time elapsed: ${timeElapsed.toFixed(2)} seconds</p>
    <p>Words Per Minute (WPM): ${wpm}</p>
    `;

    const button = document.getElementById('btn');
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}

