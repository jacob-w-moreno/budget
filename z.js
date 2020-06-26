class App extends React.Component {
  render() {
    return <Toolbar theme ="dark"/>;
  }
}

function Toolbar(props) {
  return(<div>
    <ThemedButton theme={props.theme} />
  </div>)
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}





const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}
