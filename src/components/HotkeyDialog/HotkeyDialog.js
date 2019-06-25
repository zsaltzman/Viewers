import React, {Component} from 'react';
import './HotkeyDialog.css';

import { hotkeysManager } from '../../App.js';

class HotkeyMenu extends Component {
  state = { show : false };

  constructor(props) {
    super(props);
    let numbers = [1,2,3,4,5];
    console.log('hotkey def', hotkeysManager.hotkeyDefinitions);
    this.elements = [];
    this.sortedKeys = Object.keys(hotkeysManager.hotkeyDefinitions).map( (key) => {
      return <li key={key} onClick={this.onKeyClick.bind(this, key)}>{key}</li>; 
    });


    console.log('sorted keys', this.sortedKeys);
  }

  onKeyClick = (key, e) => {
    console.log('event', e, 'key', key);
    //let entry = hotkeysManager.hotkeyDefinitions[];
  };

  onShow = () => {
    let listeners = hotkeysManager;
    console.log('listeners', hotkeysManager.hotkeyDefinitions);
  };

  render = () => {
    return ( 
      <div className='hotkey-menu-container'> 
        <ul>
        {this.sortedKeys}
        </ul>
      </div>
    );
    }
}


export default HotkeyMenu;
