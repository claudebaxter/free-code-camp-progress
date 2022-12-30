import React from 'react';
import './App.css';
import { marked } from 'marked';

class App extends React.Component {
  state = {
    markdown: ''
  };

  setMarkdown(markdown) {
    this.setState({ markdown });
  }

 render() { 
  
  return (
    <div id="main-body">
      <div id="editor-wrap">
        <textarea id="editor" value={this.state.markdown} onChange={(e) => {
          this.setMarkdown(e.target.value);
        }}>
        </textarea>
      </div>
      <div id="preview-wrap">
        <p id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(this.state.markdown),
        }}>
        </p>
      </div>
    </div>
  );
 }
}

export default App;
