import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export class Model extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="lt1vnLJu1GU"
            onClose={() => this.setState({ isOpen: false })}
          />
          <button  className="btn btn-smart" onClick={this.openModal}><a herf="" >Play Vedio</a></button>
        </div>
      </div>
    );
  }
}

export default Model;