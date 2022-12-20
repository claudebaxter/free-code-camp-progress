/*Declare current quote & author variables,
and set their value equal to an empty string.*/

var currentQuote = '',
  currentAuthor = '';

/* fetchQuotes() function returns a "jQuery ajax call"
to accept applciation/json from the url below. Upon success,
a new function verifies if jsonQuotes is a string, if so
parses the JSON data to create quotesData & log to console */
function fetchQuotes() {
  return $.ajax({headers: {Accept: 'application/json'},
    url: 'https://gist.githubusercontent.com/elborracho420/4f10059e72b69fa9c79415f8c9ab8c26/raw/15333259b757446f624e7cfee619775acc9e5bee/stoic-quotes.json',
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

  /* Function tweetCurrentQuote when called will open twitter in a new window
  and pre-load a tweet prompt with the current quote and author.
  
  jQuery makes it easy to read function when #tweet-quote element is clicked. */

  function tweetCurrentQuote() {
    window.open('https://twitter.com/intent/tweet?hashtags=AureliusQuotes&text=' +
    encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    )
};

$('#tweet-quote').on('click', tweetCurrentQuote);

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
