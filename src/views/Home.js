import React from 'react';
import { connect } from 'react-redux';
import { generatePassword } from '../store';
import PasswordContainer from '../components/PasswordContainer';
import ButtonsContainer from '../components/Buttons/ButtonsContainer';
import OptionsContainer from '../components/Options/OptionsContainer';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Home extends React.Component {
  componentDidMount() {
    if (this.props.password === "") {
      this.props.generatePassword();
    }
  }
  render = () => {
    return (
      <div className="App">
          <Jumbotron>
            <h2 className="site-title">Secure Password Generator</h2>
            <strong>Your password is:</strong>
            <PasswordContainer />
            <hr />
            <OptionsContainer />
            <hr />
            <ButtonsContainer />
          </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  password: state.generatedPassword,
});

const mapDispatchToProps = { generatePassword };

export default connect(mapStateToProps, mapDispatchToProps)(Home);