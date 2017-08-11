import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import {Link} from 'react-router-dom';



class Panorama extends React.Component{
  constructor(props){
    super(props);
    this.goback=this.goback.bind(this);
  }
  goback(){
    this.props.history.push('/');
  }
    render(){
      //console.log("Image: "+ {props.match.params.id);
        let url=decodeURIComponent(this.props.match.params.id);
      return( 
        <div className="pano">
          <Scene>
            <a-assets position="5 5 5">
              <img id="myImage" src={`${url}`} crossorigin="anonymous"/>
            </a-assets>
              <a-sky src="#myImage"></a-sky>
          </Scene>
          <div className="goback"><a onClick={this.goback}>Go back</a></div>
          </div>
        )
    }
  }


module.exports={
  Panorama:Panorama
}
