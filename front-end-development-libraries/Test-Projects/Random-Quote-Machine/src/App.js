import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currQuote: "test quote",
      currAuthor: "test author"
  }
}

render() {
  return (
    <div className="App">
          <header>
            <title>Aurelius Quotes</title>
          </header>
          <div id="body">
              <div id="wrapper">
                    <div id="quote-box">
                      <p id="text"> </p>
                      <p id="author"></p>
                          <div id="footer">
                            <button className="btn" id="tweet-btn">
                              <a 
                                href={'https://twitter.com/intent/tweet?hashtags=AureliusQuotes&text=' + encodeURIComponent('"' + this.state.currQuote + '" ' + this.state.currAuthor)} 
                                id="tweet-quote">Tweet Quote
                              </a>
                            </button>
                            <button className="btn" id="new-quote">New Quote</button>
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
