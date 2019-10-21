import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'

import Home from './Home';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import {withRouter} from 'react-router-dom';


class RHome extends Component {

  
  render(){
    const { pathname } = this.props.location
    const isP = !pathname.includes('/dash')
    return (
      <React.Fragment>
        { isP ? 
        <Route path='/' component={Home} />
        :
        <Route path='/dashboard' component={Dashboard} />
      }

{/* <Route   component={NotFound} /> */}
      
      </React.Fragment>
      
    );
  }
  
}

export default withRouter(RHome);
