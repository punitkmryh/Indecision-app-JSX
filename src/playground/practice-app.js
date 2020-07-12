class IndecisionApp extends React.Component {
  render() {
    const title = "App";
    const subtitle = "Subtitle";
    const options = ["a", "b", "c"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.options.length > 0
            ? "Here are Some options"
            : "No options"}
        </p>
        <ol>
          {this.props.options.map((option) => (
            <Option option={option} optionText={option} />
          ))}
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.optionText}</li>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleOption() {
    alert("handleOption");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleOption}>AddOptions</button>
      </div>
    );
  }
}

class Action extends React.Component {
  handleAction() {
    alert("what to do");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleAction}>What Should I Do?</button>
      </div>
    );
  }
}
// const jsx = (
//   <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOption />
//   </div>
// );
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
