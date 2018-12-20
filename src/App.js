import React, { Component } from 'react';
import pic from './1.jpg';
import './App.css';
import {Grid,Row,Col} from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook,faTwitter,faGooglePlus, faInstagram,faPinterest } from '@fortawesome/free-brands-svg-icons';


library.add(fas, fab,faFacebook,faTwitter,faGooglePlus, faInstagram,faPinterest);


class App extends Component {
  
  render() {
    return (
    
<Grid fluid="true" className="fadeIn">
  <Row className="show-grid">
    <Col xs={12} md={6}>
    <div className="image">
      <img src={pic} className="pic" alt="" /> 
      </div>
    </Col>
    <Col xs={12} md={6}>
    <div className="text">
            <div className="head">
              <b>Under <br></br> Construction</b>
              <p>This website is currently undergoing scheduled maintenance & development. Should be back shortly.</p>
            </div> 

        <div className="extra">
          <ul>
              <li>
              Stay in touch :
              </li>

              <li >
                <a href="https://www.facebook.com/okrittim" className="fb">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </a>      
              </li>

              <li>
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwi-7L3a5JnfAhWMaCsKHUqyAi4QFjAAegQIBBAB&url=https%3A%2F%2Fgithub.com%2Fmotasimfoad&usg=AOvVaw3pU-M9uRkMrYkI34XMFFsO" className="git">
                <FontAwesomeIcon icon={faGithub} />
                </a>      
              </li>

              <li>
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjg2puN5ZnfAhXHdysKHaFBBT0QFjAAegQIChAB&url=https%3A%2F%2Fplus.google.com%2F%2Bmotasimfoadcharchill&usg=AOvVaw1NDECZJhuidt-B9U0Df04e" className="gplus">
                <FontAwesomeIcon icon={faGooglePlus} />
                </a>                
              </li>

            <li>
              <a href="https://www.instagram.com/motasimfoad/" className="insta">
              <FontAwesomeIcon icon={faInstagram} />
              </a>      
            </li>

            <li>
              <a href="https://www.pinterest.com/motasimf/" className="pin">
              <FontAwesomeIcon icon={faPinterest} />
              </a>      
            </li>

        </ul>
      </div>
    </div>
    </Col>
  </Row>
</Grid>
    
     


      
    );
  }
}

export default App;
