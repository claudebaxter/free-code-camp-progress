import React from 'react';
import './App.css';
import { marked } from 'marked';

const placeholder = `# This is a H1 heading element!
## This is a H2 sub-heading element!
### And an H3 sub-heading element!
Don't forget [links](https://www.freecodecamp.org)
Heres some in-line code, \`<div></div>\`, between 2 backticks.
\`\`\`
// Here's some multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold,**
Or _italic,_
Or... **_both!_**
~~Here's some crossed out stuff~~.

> Here are Block Quotes!

You can also make tables:
Header 1     | Header 2      | Header 3
------------ | ------------- | -------------
Your content | can be here   | or here.
And here.    | Okay.         | I think we get it.

- Here's a list example
  - You can go further in
     - With different indentation levels.
        - That look like this.
1. There's also numbered lists
1. You can use just 1s if you want!
1. The markdown will render the list as numbered anyway.

Here's an embedded svg image: (I inverted the color)

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends React.Component {
  state = {
    markdown: placeholder
  };

  setMarkdown(markdown) {
    this.setState({ markdown });
  }

 render() { 
  
  return (
    <div id="main-body">
      <div id="editor-wrap">
        <h1>Editor:</h1>
        <textarea 
          id="editor" 
          value={this.state.markdown} 
          onChange={(e) => {
          this.setMarkdown(e.target.value);
        }}>
        </textarea>
      </div>
      <div id="preview-wrap">
        <h1>Previewer:</h1>
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
