const { connect } = require('react-redux')

class MainView extends Component {
  onSearchPressed() {
    this.props.dispatchAddToSaved();
  }
  render() {...}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddToSaved: () => dispatch(addToSaved())
  }
}

module.exports = connect(null, mapDispatchToProps)(MainView)
