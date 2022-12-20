/*Declare current quote & author variables,
and set their value equal to an empty string.*/

var currentQuote = '',
  currentAuthor = '';

/* fetchQuotes() function returns a "jQuery ajax call"
to accept applciation/json from the url below. Upon success,
a new function verifies if jsonQuotes is a string, if so
parses the JSON data to create quotesData & log to console */

/* Quotes are formatted as nested arrays as follows:
{ "quotes": [
 {"quote":"You miss 100% of the shots you don’t take.", "author":"Wayne Gretzky"}, 
 {2...}, {3...} ]} etc. It fetches all the quotes (hence the s)*/

function fetchQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    }
  });
}

/* You can access properties of quotesData like below
(the getRandomQuote() function uses math.floor and math.random 
methods to pick a quote at random from the array of quotes):*/

function getRandomQuote() {
  return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
  ];
}

/* The fetchQuote() function fetches a single quote from the array of quotes.
It does this by assigning the getRandomQuote() function as the value of variable
randomQuote, and then uses .quote and .author properties of this object to assign
corresponding values to currentQuote and currentAuthor variables.*/

function fetchQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  /* Using jQuery to select the #tweet-quote a element, and assign the remaining text
  to the twitter URL that will pre-populate a tweet (if user is logged in to Twitter)
  with a space, currentQuote, space, currentAuthor */

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );

  /* Using jQuery to select the #text and #author elements and inserts the text / data
  from randomQuote.quote and randomQuote.author properties into the corresponding
  html elements to render on screen. */

  $('#text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomQuote.quote);
  });

  $('#author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(randomQuote.author);
  });
}

/*when page loads/refreshes, or #new-quote is clicked,
call fetchQuote function*/

$(document).ready(function () {
  fetchQuotes().then(() => {
    fetchQuote();
  });

  $('#new-quote').on('click', fetchQuote);
});
