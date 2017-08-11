import React from 'react';
import ReactDom from 'react-dom' ;
import $ from 'jquery' ;
import {Panorama} from './Panorama.js';
import {Redirect,Link} from 'react-router-dom';
import {withRouter} from 'react-router';

class FirstPage extends React.Component{
    constructor(props){
      super(props);
      this.state={
        list:[],
        images:[],
        isClicked:false,
        redirect:true,
        imageUrl:''
      }
      this.loadImages=this.loadImages.bind(this);
      this.loadOne=this.loadOne.bind(this);
    }
    componentDidMount(){
     // window.addEventListener('load',this.loadImages);
       console.log("hey");
      this.loadImages(); 
   }

   loadImages(){ 
      //console.log("load");
      var that=this;
      $.ajax({
        type:'GET',
        url:'https://demo0813639.mockable.io/getPanos',
        datatype:'jsonp',
        success:function(result){
          var images=that.state.images;
          for(var i=0;i<result.length;i++){
            that.state.images.push({"pano":result[i].pano,"name":result[i].name});
          }
          images=that.state.images;
          that.setState({
            images:images
         })
        }

      })
   }

   loadOne(pano){
    console.log("pano: ",pano);
    let imageUrl=encodeURIComponent(pano);
    this.setState({
      isClicked:true,
      imageUrl:pano
    })
    this.props.history.push(`/panorama/${imageUrl}`)
  }

  render(){
    var list=this.state.list;
    console.log("Image URL: "+this.state.imageUrl);
     list=this.state.images.map((result)=>{
        return(<div className="box">
                <div className="label">{result.name}</div>
                  <img src={result.pano} className="image col-md-3" onClick={this.loadOne.bind(this,result.pano)}/>   
              </div>
              )

       })

    return <div>{list}</div>
  }
}

module.exports={
  FirstPage:FirstPage
}

//export withRouter(FirstPage);