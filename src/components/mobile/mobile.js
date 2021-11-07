import React from 'react';
import PropTypes from 'prop-types';

import './mobile.scss';

export default class Mobile extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.onPageUpdate('Mobile');
  }

  componentDidMount() {
    var pendoCheck = setInterval(function () {
      if (window.pendo.visitorId) {
        document.getElementById('visitorField').value = window.pendo.visitorId;
        clearInterval(pendoCheck);
      }
    }, 100);
  }

  render() {
    return (
      <div id="phoneContainer" className="ant-card">
        <div className="ant-card-head">
          <h1> ACME CRM Mobile Demo</h1>
        </div>
        <div className="ant-card-body">
          <div id="demoLaunch">
            <label htmlFor="visitor">Visitor Id to Simulate </label>
            <input
              type="text"
              id="visitorField"
              name="visitor"
              className="ant-input"
            />
            <button
              className="mobile-btn ant-btn ant-btn-primary ant-btn-md"
              id="launchPhone"
              type="button"
              onClick={function () {
                var appetizeContainer = document.getElementById('mobileDemo');
                var settingsContainer = document.getElementById('demoLaunch');
                var iframe = document.createElement('iframe');
                var phoneFrameURL =
                  'https://appetize.io/embed/ag_yy3m7wknuu96nw0qd9ww7tr6z4?osVersion=13&amp;device=iphone6s&amp;scale=75&amp;orientation=portrait&params=%7B%22visitorId%22%3A+%22+' +
                  encodeURIComponent(
                    document.getElementById('visitorField').value
                  ) +
                  '%22%7D';

                if (document.getElementById('visitorField').value) {
                  iframe.src = phoneFrameURL;
                } else {
                  iframe.src =
                    'https://appetize.io/embed/ag_yy3m7wknuu96nw0qd9ww7tr6z4?osVersion=13&amp;device=iphone6s&amp;scale=75&amp;orientation=portrait';
                }

                iframe.id = 'iphone';
                iframe.title = 'Pendo Experience Mobile';
                iframe.width = '378px';
                iframe.height = '800px';
                iframe.frameBorder = '0';
                iframe.scrolling = 'no';

                appetizeContainer.appendChild(iframe);
                settingsContainer.style.display = 'none';
              }}
            >
              Launch Mobile Demo
            </button>
          </div>

          <section id="mobileDemo"></section>
        </div>
      </div>
    );
  }
}

Mobile.propTypes = {
  onPageUpdate: PropTypes.func,
};
