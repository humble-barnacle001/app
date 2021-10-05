import React from 'react';
import { connect } from 'react-redux';
import { changeIncludeLowercaseLetters } from '../../store';

class LowercaseLettersCheckboxContainer extends React.Component {
    changeIncludeLowercaseLetters = (event) => {
        this.props.changeIncludeLowercaseLetters();
    }
    render = () => {
        if (!this.props.enableLowercaseLettersCheckbox) {
            return null;
        } else {
            return <div className="form-check form-check-inline">
                        <label htmlFor="includeLowercaseLetters" className="form-check-label mr-1"><strong>Include Lowercase Letters:</strong></label>
                        
                        <input type="checkbox" className="form-check-input" checked={!!this.props.includeLowercaseLetters} onChange={this.changeIncludeLowercaseLetters}></input>  
                    </div>
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    enableLowercaseLettersCheckbox: state.enableLowercaseLettersCheckbox,
    includeLowercaseLetters: state.includeLowercaseLetters
});

const mapDispatchToProps = { changeIncludeLowercaseLetters };

export default connect(mapStateToProps, mapDispatchToProps)(LowercaseLettersCheckboxContainer);