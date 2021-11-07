import React, { Component } from 'react';
import FinalNavigation from './containers/navigation/navigationContainer.js';
import FinalBody from './containers/body/bodyContainer.js';

class App extends Component {
  render() {
    document.addEventListener(
      'keyup',
      (e) => {
        if (e.ctrlKey && e.keyCode === 76) {
          window.pendo.showGuideById('kp8lRQSArHUW79IzqloeIBatViI');
        } else if (e.ctrlKey && e.keyCode === 75) {
          window.pendo.designerv2.launchInAppDesigner();
        } else if (e.ctrlKey && e.keyCode === 74) {
          window.pendo.showGuideById('A4Z_u7D0GnW27J7oCwtG0Ptekfk');
        }
      },
      false
    );

    return (
      <div className="App">
        <FinalNavigation />
        <FinalBody />
      </div>
    );
  }
}

export default App;
