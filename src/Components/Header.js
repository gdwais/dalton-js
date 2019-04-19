import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
       var { name, occupation, description } = this.props.data
       var { city, state } = this.props.data.address;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
1
      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home"><code>Home</code></a></li>
            <li><a className="smoothscroll" href="#about"><code>About</code></a></li>
	         <li><a className="smoothscroll" href="#resume"><code>Resume</code></a></li>
            <li><a className="smoothscroll" href="#portfolio"><code>Works</code></a></li>
            <li><a className="smoothscroll" href="#testimonials"><code>Testimonials</code></a></li>
            <li><a className="smoothscroll" href="#contact"><code>Contact</code></a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>I'm a {state} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
