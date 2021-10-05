import React from 'react';
import { connect } from 'react-redux';
import { changeIncludeUppercaseLetters } from '../../store';

class UppercaseLettersCheckboxContainer extends React.Component {
    changeIncludeUppercaseLetters = (event) => {
        this.props.changeIncludeUppercaseLetters();
    }
    render = () => {
        if (!this.props.enableUppercaseLettersCheckbox) {
            return null;
        } else {
            return <div className="form-check form-check-inline">
                        <label htmlFor="includeUppercaseLetters" className="form-check-label mr-1"><strong>Include Uppercase Letters:</strong></label>
                        
                        <input type="checkbox" className="form-check-input" checked={!!this.props.includeUppercaseLetters} onChange={this.changeIncludeUppercaseLetters}></input>  
                    </div>
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    enableUppercaseLettersCheckbox: state.enableUppercaseLettersCheckbox,
    includeUppercaseLetters: state.includeUppercaseLetters
});

const mapDispatchToProps = { changeIncludeUppercaseLetters };

export default connect(mapStateToProps, mapDispatchToProps)(UppercaseLettersCheckboxContainer);