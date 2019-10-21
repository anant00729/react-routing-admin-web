import React, { Component } from 'react'

import AdminHeader from './admin/AdminHeader';
import AdminFooter from './admin/AdminFooter';
import A1 from './admin/A1';
import A2 from './admin/A2';
import A3 from './admin/A3';
import NotFound from './NotFound';


import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'

class Dashboard extends Component {

  state = {
    isVisible : true
  }

  onError = () => {
   this.setState({isVisible : false}) 
  }

  render() {
    const { match } = this.props
    const { isVisible } = this.state
    return (
      <div>
        {isVisible ?  <AdminHeader/> : null}
        <Switch>
            <Route path={ match.url } exact component={A1} />
            <Route path={ match.url + '/a2' } exact component={A2} />
            <Route path={ match.url + '/a3' } exact component={A3} />
            <Route render={(props) =>  <NotFound {...props} data='admin' onError={this.onError}/>} />
        </Switch>
        {isVisible ?  <AdminFooter/> : null}
        
      </div>
    )
  }
}


export default Dashboard