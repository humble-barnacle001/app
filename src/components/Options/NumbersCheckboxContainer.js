import React from 'react';
import { connect } from 'react-redux';
import { changeIncludeNumbers } from '../../store';

class NumbersCheckboxContainer extends React.Component {
    changeIncludeNumbers = (event) => {
        this.props.changeIncludeNumbers();
    }
    render = () => {
        if (!this.props.enableNumbersCheckbox) {
            return null;
        } else {
            return <div className="form-check form-check-inline">
                        <label htmlFor="includeNumbers" className="form-check-label mr-1"><strong>Include Numbers:</strong></label>
                        
                        <input type="checkbox" className="form-check-input" checked={!!this.props.includeNumbers} onChange={this.changeIncludeNumbers}></input>  
                    </div>
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    enableNumbersCheckbox: state.enableNumbersCheckbox,
    includeNumbers: state.includeNumbers
});

const mapDispatchToProps = { changeIncludeNumbers };

export default connect(mapStateToProps, mapDispatchToProps)(NumbersCheckboxContainer);