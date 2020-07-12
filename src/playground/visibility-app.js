const buildApp = {
  title: "Visibility Toggle",
  message: "Hey, These are some messages",
};

let visibility = false;

const OnToggle = () => {
  visibility = !visibility;
  renderVisible();
};
const renderVisible = () => {
  const templateVisible = (
    <div>
      <h1>{buildApp.title}</h1>
      <button onClick={OnToggle}>
        {visibility ? "Hide message" : "Show message"}
      </button>
      {visibility && <p>{buildApp.message}</p>}
    </div>
  );
  ReactDOM.render(templateVisible, document.getElementById("app-challenge"));
};

renderVisible();
