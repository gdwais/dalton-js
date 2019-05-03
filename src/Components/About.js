import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var bio = this.props.data.bio;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="twelve columns main-col">
            <h2>A word about this site.</h2>
            <p>{bio}</p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
