import React, { Component } from 'react'
import ImageGallery from './components/ImageGallery'
import images from "./images.json";

// const pictures = images.map(image => image.name);
// console.log("pictures that have been mapped", pictures);


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
  };


  
  render () {
    return (
      
      <div>
        <ImageGallery
         images={this.state.images}
        />
      </div>
    )
  }
}

export default App;

