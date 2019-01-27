import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../../css/Home.css';

import bg from '../../img/home/bg.png';
import man from '../../img/home/man.png';
import woman from '../../img/home/woman.png';
import dog from '../../img/home/dog.png';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <img
          id='bg'
          src={bg}
          alt='bg'
        />
        {this.renderLinks()}
      </div>
    );
  }

  /////////////////

  renderLinks = () => {
    const links = [
      {
        name: 'man',
        image: man,
        page: 'visual'
      },
      {
        name: 'woman',
        image: woman,
        page: 'music'
      },
      {
        name: 'dog',
        image: dog,
        page: 'web'
      },
    ]

    return links.map(link => {
      return <Link link={link} key={link.name} />
    })
  }
}

export default Home;

/////////////////////////////////////////////////

const Link = ({link}) => {
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


// // Make the DIV element draggable:
// dragElement(document.getElementById("mydiv"));
//
// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }
//
//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }
//
//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }
//
//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
