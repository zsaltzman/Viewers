import React, {Component} from 'react';

class HotkeyMenu extends Component {
  state = { show : false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render = () => {
    return (
      <h1>
        hello! {this.props.name} {this.props.foo}
      </h1>
    );
  }
}

export default HotkeyMenu;
