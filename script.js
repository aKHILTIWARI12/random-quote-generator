function getRandomQuote() {
    var quotes = document.querySelectorAll('.quote');
    var randomIndex = Math.floor(Math.random() * quotes.length);
    quotes.forEach(function(quote) {
        quote.style.display = 'none';
    });
    quotes[randomIndex].style.display = 'block';
}