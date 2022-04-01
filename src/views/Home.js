import React from 'react';
import { connect } from 'react-redux';
import { generatePassword } from '../store';
import PasswordContainer from '../components/PasswordContainer';
import ButtonsContainer from '../components/Buttons/ButtonsContainer';
import OptionsContainer from '../components/Options/OptionsContainer';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Alert from "react-bootstrap/Alert";

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
            <Alert variant="danger">
              <Alert.Heading>
                <strong>CISA AA22-041AFD</strong> <br /> The Cybersecurity and Infrastructure Security Agency (CISA) recommends that internet users change their passwords to random strings of emojis to combat new cybersecurity threats. This is the new default on PassGen.io and will take effect for existing users upon pressing the Reset Options button.
              </Alert.Heading>
            </Alert>
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