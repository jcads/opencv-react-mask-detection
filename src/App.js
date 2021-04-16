// TODO: display uploaded images
// possible: use fs module
import React, { Component } from 'react';
import Spinner from './components/Spinner';
import Images from './components/Images';
import Buttons from './components/Buttons';
import Header from './components/Header';
//import { API_URL } from './config';
import './App.css';

class App extends Component {
  state = {
    uploading: false,
    images: []
  }

  onChange = e => {
    //if(event.target.files && event.target.files[0]) {
    //  this.setState({
    //    image: URL.createObjectURL(event.target.files[0])
    //  });
    // }
    const files = Array.from(e.target.files).map(image => {
      return URL.createObjectURL(image);
    })  
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
      console.log(i)
      formData.append(i, file)
    })

    // temporary fix
    setTimeout(() => {
      this.setState({
        uploading: false,
        images: files,
      })
    }, 3000)

    // USE WITH BACKEND
    //fetch(`${API_URL}/image-upload`, {
    //  method: 'POST',
    //  body: formData
    //})
    //.then(res => res.json())
    //.then(images => {
    //  this.setState({
    //    uploading: false,
    //    images
    //  })
    //})
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }

  render() {
    const { uploading, images } = this.state

    const content = () => {
      switch(true) {
        case uploading:
          return <Spinner />
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />
        default:
          return <Buttons onChange={this.onChange} />
      }
    }

    return (
      <div>
        <Header />
        <div className='buttons'>
          {content()}
        </div>
      </div>
    )
  }
}

export default App;
