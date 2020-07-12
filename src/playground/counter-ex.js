// Event handler
let count = 0;
const addOne = () => {
  count++;
  renderCountApp();
  console.log("addOne");
};
const minusOne = () => {
  if (count == 0) {
    count = 1;
  }
  count--;
  renderCountApp();
  console.log("minusOne");
};

const reset = () => {
  count = 0;
  renderCountApp();
  console.log("Reset");
};

const appRootTwo = document.getElementById("count-btn");
const renderCountApp = () => {
  const templateEleTwo = (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateEleTwo, appRootTwo);
};

renderCountApp();