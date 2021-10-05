import React from 'react';
import { connect } from 'react-redux';
import { changePasswordLength } from '../../store';

class PasswordLengthOptionContainer extends React.Component {
    changePasswordLength = (event) => {
        this.props.changePasswordLength({passwordLength: event.target.value});
    }
    render = () => {
        if (!this.props.enablePasswordLengthOption) {
            return null;
        } else {
            return <div className="form-group">
                    <label htmlFor="passwordLength"><strong>Password Length:</strong></label>
                    
                    <input type="number" value={this.props.passwordLength} className="form-control" max="999999" onChange={this.changePasswordLength}></input>
                </div>
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    passwordLength: state.passwordLength,
    enablePasswordLengthOption: state.enablePasswordLengthOption,
});

const mapDispatchToProps = { changePasswordLength };

export default connect(mapStateToProps, mapDispatchToProps)(PasswordLengthOptionContainer);