import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class NotFound extends React.Component {
  render = () => {
    return (
      <div className="App">
          <Jumbotron>
            <h2 className="site-title">404 - Not Found</h2>
            <p>The page you were looking for does not exist. Please check the spelling of the url and try again.</p>
          </Jumbotron>
      </div>
    );
  }
}

export default NotFound;