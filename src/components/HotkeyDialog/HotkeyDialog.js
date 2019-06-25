import React, {Component} from 'react';
import { hotkeysManager } from '../../App.js';

import PropTypes from 'prop-types';

import './HotkeyDialog.css';

export class HotkeyMenu extends Component {

  static defaultProps = {
    'dropdownVisible' : false
  };

  static propTypes = {
    dropdownVisible : PropTypes.bool.isRequired
  };

  state = { 'show' : false, 'dropdownVisible': this.props.dropdownVisible };

  constructor(props) {
    super(props);
   
    this.elements = [];
    this.sortedKeys = Object.keys(hotkeysManager.hotkeyDefinitions).map( (key) => {
      return <li key={key} onClick={this.onListItemClick.bind(this, key)}>{key}</li>; 
    });
  }

  onListItemClick = (key, e) => {
    this.setState( (state, props) => ({
        'dropdownVisible' : !state.dropdownVisible
    }));

    //hotkeysManager.hotkeyDefinitions[key] = 

    //let entry = hotkeysManager.hotkeyDefinitions[];
  };

  render = () => {
    let dropdownStyle = {
      'display' : this.state.dropdownVisible ? 'block' : 'none'
    };

    return ( 
      <div className='hotkey-menu-container'> 
        <ul>
        {this.sortedKeys}
        </ul>
        <a style={dropdownStyle}>Press a key to change this binding...</a>
      </div>
    );
    }
}

export default HotkeyMenu;
