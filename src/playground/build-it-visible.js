let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const appRoot = ReactDOM.createRoot(document.getElementById("app"));

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>These are some details you can see now!</p>
        </div>
      )}
    </div>
  );
  appRoot.render(jsx);
};

render();
