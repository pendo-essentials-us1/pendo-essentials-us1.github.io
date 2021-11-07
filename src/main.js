import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard.js';
import FinalAccounts from './containers/accounts/accountsContainer.js';
import FinalContacts from './containers/contacts/contactsContainer.js';
import FinalOpportunities from './containers/opportunities/opportunitiesContainer.js';
import FinalMobile from './containers/mobile/mobileContainer.js';
import FinalDetails from './containers/details/detailsContainer.js';

// Routing done here
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/accounts" component={FinalAccounts} />
      <Route exact path="/contacts" component={FinalContacts} />
      <Route exact path="/opportunities" component={FinalOpportunities} />
      <Route exact path="/mobile" component={FinalMobile} />
      <Route path="/*/*/details" component={FinalDetails} />
    </Switch>
  </main>
);

export default Main;
