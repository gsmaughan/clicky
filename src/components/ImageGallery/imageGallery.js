import Nav from '../Nav'
import Jumbotron from '../Jumbotron'
import React, { Component } from "react"
import images from "../../images.json";

const pictures = images.map(function(picture){
  return picture.src;
});
console.log("pictures mapped", pictures);

// pictures.forEach(picture => return(`${picture}`));

let imageArray = [];

for(let i = 1; i < pictures.length + 1; i++){
  imageArray.push("pictures["+ [i] + "],");
  // console.log("for loop", pictures[i] + ",");
}

console.log("imageArray", imageArray);


class imageGallery extends Component {
 
  state = {
    images:
    [
    
    pictures[0], 
    pictures[1],
    pictures[2],
    pictures[3],
    pictures[4],
    pictures[5],
    pictures[6],
    pictures[7],
    pictures[8],
    pictures[9],
    pictures[10],
    pictures[11],
    pictures[12],
    pictures[13],
    pictures[14]

    ],
    
    imageObj: this.props.images,
    score: 0,
    hiScore: 0
  };

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  
  componentDidMount() {
    this.shuffleImages();
    console.log(this.state.images);
  }

  shuffleImages() {
    var shuffledImages = this.shuffle(this.state.images);
    this.setState({images:shuffledImages});
  }

  incrementScore() {
    let newScore = this.state.score + 1;
    if (newScore > this.state.hiScore) {
      this.setState({hiScore:newScore});
    }
    this.setState({score: newScore});
    this.shuffleImages();
  }

  resetGame() {
    this.state.imageObj.forEach(image => {
      let imageObjCopy = this.state.imageObj;
      imageObjCopy[imageObjCopy.indexOf(image)].clicked = false;
      this.setState({imageObj:imageObjCopy});
    });
    this.setState({score: 0});
    this.shuffleImages();
    return;
  }


  handleClick = src => {
    console.log(src);
    let imageObjCopy = this.state.imageObj;
    let clickCount = 0;
    this.state.imageObj.forEach(image => {
      if (image.src === src) {
        if (image.clicked === false) {
          this.incrementScore();
          
          // set image to clicked
          imageObjCopy[imageObjCopy.indexOf(image)].clicked = true;
          
          this.setState({imageObj: imageObjCopy});
          
          console.log(this.state.imageObj);
        } else if (image.clicked === true) {
          
          this.resetGame();
        }
      }
      // win condition
      if (image.clicked === true) {
        clickCount++;
        if (clickCount === 15) {
          alert("You win!!")
          this.resetGame();
          return;
        }
      }
    });
  }

  render() {
    return(
    <div  style={{backgroundColor: "grey"}}>
    <Nav score={this.state.score} hiScore={this.state.hiScore}></Nav>
    <Jumbotron/>
    <div className='container' >
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[0])}>
            <img src={this.state.images[0]} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[1])}>
            <img src={this.state.images[1]} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[2])}>
            <img src={this.state.images[2]} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[3])}>
            <img src={this.state.images[3]} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[4])}>
            <img src={this.state.images[4]} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[5])}>
            <img src={this.state.images[5]} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[6])}>
            <img src={this.state.images[6]}alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4' onClick={() => this.handleClick(this.state.images[7])}>
          <div className='thumbnail'>
            <img src={this.state.images[7]} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4' onClick={() => this.handleClick(this.state.images[8])}> 
          <div className='thumbnail'>
            <img src={this.state.images[8]} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4' onClick={() => this.handleClick(this.state.images[9])}> 
          <div className='thumbnail'>
            <img src={this.state.images[9]}  alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4' onClick={() => this.handleClick(this.state.images[10])}> 
          <div className='thumbnail'>
            <img src={this.state.images[10]}  alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4' onClick={() => this.handleClick(this.state.images[11])}> 
          <div className='thumbnail'>
            <img src={this.state.images[11]}   alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4' onClick={() => this.handleClick(this.state.images[12])}> 
          <div className='thumbnail'>
            <img src={this.state.images[12]}  alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4' onClick={() => this.handleClick(this.state.images[13])}> 
          <div className='thumbnail'>
            <img src={this.state.images[13]}   alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4' onClick={() => this.handleClick(this.state.images[14])}> 
          <div className='thumbnail'>
            <img src={this.state.images[14]} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }
}

export default imageGallery;