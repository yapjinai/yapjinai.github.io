import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Link extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     posX: 0,
  //     posY: 0,
  //     changeX: 0,
  //     changeY: 0,
  //     elmnt: null
  //   }
  // }

  render() {
    const link = this.props.link;

    return (
      <NavLink
        to={`/${link.page}`}
        exact

        id={link.name}
        className='Link'
      >
        {link.page}
        <img
          src={link.image}
          alt={link.page}
        />
      </NavLink>
    )
  }

  // componentDidMount() {
  //   this.setState({
  //     elmnt: document.querySelector(`#${this.props.link.name}`),
  //   });
  // }
  ///////////////////////

  // make draggable
  //
  // handleMouseDown = (e) => {
  //   e = e || window.event;
  //   e.preventDefault();
  //   // get the mouse cursor position at startup:
  //   this.setState({
  //     posX: e.clientX,
  //     posY: e.clientY
  //   })
  //   document.onmouseup = this.handleMouseUp;
  //   // call a function whenever the cursor moves:
  //   document.onmousemove = this.handleMouseMove;
  // }
  //
  // handleMouseMove = (e) => {
  //   e = e || window.event;
  //   e.preventDefault();
  //   this.setState({
  //     changeX: this.state.posX - e.clientX,
  //     changeY: this.state.posY - e.clientY,
  //     posX: e.clientX,
  //     posY: e.clientY,
  //   })
  //
  //   const elmnt = this.state.elmnt
  //   elmnt.style.top = (this.state.elmnt.offsetTop - this.state.changeY) + "px";
  //   elmnt.style.left = (this.state.elmnt.offsetLeft - this.state.changeX) + "px";
  // }
  //
  // handleMouseUp = (e) => {
  //   e = e || window.event;
  //   e.preventDefault();
  //   const newX = `"${Math.floor(parseInt(this.state.elmnt.style.left) / window.innerWidth * 100)}%"`
  //   const newY = `"${Math.floor(parseInt(this.state.elmnt.style.top) / window.innerHeight * 100)}%"`
  //   // stop moving when mouse button is released:
  //   document.onmouseup = null;
  //   document.onmousemove = null;
  // }

}

export default Link;
