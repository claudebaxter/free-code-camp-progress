import React from 'react';
import './App.css';

var quotes = [
  {
    "quote":"Waste no more time arguing what a good man should be. Be One.","author":"Marcus Aurelius"},
{
    "quote":"Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting?","author":"Marcus Aurelius"},
{
    "quote":"It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.","author":"Marcus Aurelius"},
{
    "quote":"In your actions, don’t procrastinate. In your conversations, don’t confuse. In your thoughts, don’t wander. In your soul, don’t be passive or aggressive. In your life, don’t be all about business.","author":"Marcus Aurelius"},
{
    "quote":"If it is not right, do not do it, if it is not true, do not say it.","author":"Marcus Aurelius"},
{
    "quote":"The best revenge is not to be like your enemy.","author":"Marcus Aurelius"},
{
    "quote":"Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.","author":"Marcus Aurelius"},
{
    "quote":"It’s time you realized that you have something in you more powerful and miraculous than the things that affect you and make you dance like a puppet.","author":"Marcus Aurelius"},
{
    "quote":"External thinks are not the problem. It’s your assessment of them. Which you can erase right now.","author":"Marcus Aurelius"},
{
    "quote":"If anyone can refute me—show me I’m making a mistake or looking at things from the wrong perspective—I’ll gladly change. It’s the truth I’m after, and the truth never harmed anyone.","author":"Marcus Aurelius"},
{
    "quote":"You could leave life right now. Let that determine what you do and say and think.","author":"Marcus Aurelius"},
{
    "quote":"Be tolerant with others and strict with yourself.","author":"Marcus Aurelius"}
];

class App extends React.Component {
  state = {
      currQuote: '',
      currAuthor: ''
  };

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    var randQuote = quotes[Math.floor((Math.random() * quotes.length))]
    console.log(randQuote.quote);

    this.setState({ currQuote: randQuote.quote, currAuthor: randQuote.author })
  }

render() {
  const { currQuote, currAuthor } = this.state;
  return (
    <div className="App">
          <header>
            <title>Aurelius Quotes</title>
          </header>
          <div id="body">
              <div id="wrapper">
                    <div id="quote-box">
                      <p id="text">"{this.state.currQuote}"</p>
                      <p id="author">- {this.state.currAuthor}</p>
                          <div id="footer">
                            <button className="btn" id="tweet-btn">
                              <a 
                                href={'https://twitter.com/intent/tweet?hashtags=AureliusQuotes&text=' + encodeURIComponent('"' + this.state.currQuote + '" ' + this.state.currAuthor)} 
                                id="tweet-quote">Tweet Quote
                              </a>
                            </button>
                            <button className="btn" id="new-quote" onClick={this.fetchQuote}>New Quote</button>
                          </div>
                    </div>
                    <div className="footer">
                      <a href="https://github.com/elborracho420"><h1>by elborracho420 </h1></a>
                    </div>
              </div>
          </div>
    </div>
  );
}
}


export default App;
