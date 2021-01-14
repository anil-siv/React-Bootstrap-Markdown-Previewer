// marked option to allow br tags
marked.setOptions({
  breaks: true
});

//initial markup to load into machine
const placeholder = `# Welcome to Anil's Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const Preview = props => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown)
      }}
      id='preview'
    />
  );
};


class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <div
        className="card col-sm"
        style={{
          margin: "20px",
          width: "45vw",
          maxWidth: "85vw",
          flexGrow: "1",
          padding: 0
        }}
      >
        <div className="card-header bg-success text-white">
          <h3 className="text-center">Markdown</h3>
        </div>
        <div className="card-body h-100">
          <div className="form-group h-100">
               <Preview id="preview" markdown={this.props.input}/>
          </div>
        </div>
      </div>
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  
  render() {
    return (
      <div
        className="card col-sm"
        style={{
          height: "80vh",
          margin: "20px",
          width: "45vw",
          maxWidth: "85vw",
          flexGrow: "1",
          padding: 0
        }}
      >
        <div className="card-header bg-secondary text-white">
          <h3 className="text-center">Text Editor</h3>
        </div>
        <div className="card-body">
          <div className="form-group h-100">
            <textarea id="editor" className="form-control h-100" onChange={this.props.handleChange} value={this.props.input}>
            </textarea>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder,
      markdown: null
    }
    this.handleChange = this.handleChange.bind(this);
    }
  
  handleChange(event) {
    const value = event.target.value
    this.setState({
      input: value
    })
  
  }
 
  
  render() {
    return (
      <div
        id="app"
        className="container-fluid"
        style={{
          minHeight: "400vh",
          padding: "0px",
          backgroundColor: "#0B4F6C"
        }}
      >
        <div
          className="container-fluid"
          style={{
            height: "80vh",
            padding: "0px",
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <Editor input={this.state.input} handleChange={this.handleChange}/>
          <Previewer input={this.state.input} markdown={this.state.markdown}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
