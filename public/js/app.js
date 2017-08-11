import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {FirstPage} from './FirstPage.js';
import {Panorama} from './Panorama.js';
import {BrowserRouter,Route,Router,Switch} from 'react-router-dom';


class App extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={FirstPage} />
              <Route path="/panorama/:id" component={Panorama} />
            </Switch>
          </BrowserRouter>
        </div>
        )
    }
  }

ReactDOM.render(<App/>,document.getElementById('container'));