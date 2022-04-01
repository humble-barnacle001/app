import React from 'react';
import { connect } from 'react-redux';
import { resetOptions, generatePassword } from '../../store';

class ButtonsContainer extends React.Component {
    render = () => {
        return <div>
            <button onClick={this.props.generatePassword} className="btn btn-primary">Generate Password</button>

            <button onClick={this.props.resetOptions} className="btn btn-secondary ml-1">Reset Options</button>

            <button onClick={() => navigator.clipboard.writeText(this.props.password)} className="btn btn-info ml-1">Copy To Clipboard</button>
        </div>
    }
}

const mapDispatchToProps = { resetOptions, generatePassword };

const mapStateToProps = (state, ownProps) => ({
    password: state.generatedPassword
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer);