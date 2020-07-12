console.log("app.js is running");

// JSX- Javascript  XML
// * React-Element

const app = {
  title: "☸️ Indecision App ",
  subtitle: "Find a way to life",
  options: [],
};

const onForumSubmit = (event) => {
  event.preventDefault();
  const option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const optionList = (strings) => {
  return strings.map((string) => <li key="option">{string}</li>);
};

const onMakeDecision = (event) => {
  const randNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];
  alert(option);
};
const render = () => {
  const templateEle = (
    <div>
      <h1>{app.title ? app.title : "Anonymous"}</h1>
      {app.subtitle && <h3>{app.subtitle}</h3>}
      {/* FIXME: See React-Basics.md under Conditional Rendering in JSX */}
      <p>{app.options.length > 0 ? "Here are some options" : "No Options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        what should I do?
      </button>
      <ol>{optionList(app.options)}</ol>
      <button onClick={onRemoveAll}>Remove All</button>
      <form onSubmit={onForumSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(templateEle, document.getElementById("app"));
};

render();
