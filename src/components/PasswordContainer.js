import React from 'react';
import { connect } from 'react-redux';

class PasswordContainer extends React.Component {
    handleFocus = (event) => {
        if (this.props.enableClickToSelect) {
            event.target.select();
        }
        if (this.props.enableClickToCopy) {
            navigator.clipboard.writeText(this.props.password);
        }
    }
    render = () => {
        return <div>
            <input type="text" className="form-control" value={this.props.password} onFocus={this.handleFocus} readOnly />
        </div>
    }
}

const mapStateToProps = (state, ownProps) => ({
    password: state.generatedPassword,
    enableClickToCopy: state.enableClickToCopy,
    enableClickToSelect: state.enableClickToSelect
});

export default connect(mapStateToProps)(PasswordContainer);