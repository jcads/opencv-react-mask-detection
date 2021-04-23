// TODO: display uploaded images
// possible: use fs module
import React, { Component } from 'react';
import Spinner from './components/Spinner';
import Images from './components/Images';
import Buttons from './components/Buttons';
import Header from './components/Header';
//require('dotenv').config();
import './App.css';

class App extends Component {
  state = {
    uploading: false,
    images: []
  }

  onChange = e => {
    const apiEndpoint = process.env.API_URL || "http://localhost:5000";
    this.setState({ uploading: true })

    const formData = new FormData()
    formData.append("images", e.target.files[0])

    // USE WITH BACKEND
    fetch(`${apiEndpoint}/image`, {
      method: 'POST',
      body: formData,
    })
    .then(res => res.blob())
    .then(blob => blob.arrayBuffer())
    .then(arrayBuffer => {
      const blob = new Blob([arrayBuffer]);
      const img = URL.createObjectURL(blob);

      this.setState({
        uploading: false,
        images: [img]
      })
    })
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
