class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "Thing two", "Thing four"];
    return React.createElement(
      "div",
      null,
      React.createElement(Header, { title: title, subtitle: subtitle }),
      React.createElement(Action, null),
      React.createElement(Options, { options: options }),
      React.createElement(AddOption, null)
    );
  }
}
class Header extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        this.props.title
      ),
      React.createElement(
        "h2",
        null,
        this.props.subtitle
      )
    );
  }
}

class Action extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        null,
        "What should I do?"
      )
    );
  }
}

class Options extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      this.props.options.map(option => React.createElement(Option, { key: option, optionText: option }))
    );
  }
}

class Option extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      this.props.optionText
    );
  }
}

class AddOption extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "AddOption component here"
    );
  }
}

const appRoot = ReactDOM.createRoot(document.getElementById("app"));
appRoot.render(React.createElement(IndecisionApp, null));
