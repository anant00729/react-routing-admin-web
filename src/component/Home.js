import React, { Component } from 'react'
import WebHeader from './web/WebHeader';
import WebFooter from './web/WebFooter';
import W1 from './web/W1';
import W2 from './web/W2';
import W3 from './web/W3';
import NotFound from './NotFound';

import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'

class Home extends Component {


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
        {isVisible ?  <WebHeader/> : null}
          <Switch>
            <Route path={ match.url } exact component={W1} />
            <Route path={ match.url + 'w2' } exact component={W2} />
            <Route path={ match.url + 'w3' } exact component={W3} />
            <Route render={(props) =>  <NotFound {...props} data='web' onError={this.onError}/>} />
          </Switch>
        {isVisible ?  <WebFooter/> : null}
      </div>
    )
  }
}


export default Home