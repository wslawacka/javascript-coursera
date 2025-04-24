const quotes = [
    "Life is what happens when you are busy making other plans. - John Lennon",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words, I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Don't count the days, make the days count. - Muhammad Ali",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson"
];

function generateRandomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quoteDisplay').textContent = randomQuote;
}