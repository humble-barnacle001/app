import React from 'react';
import { connect } from 'react-redux';
import { changeIncludeSymbols } from '../../store';

class SymbolsCheckboxContainer extends React.Component {
    changeIncludeSymbols = (event) => {
        this.props.changeIncludeSymbols();
    }
    render = () => {
        if (!this.props.enableSymbolsCheckbox) {
            return null;
        } else {
            return <div className="form-check form-check-inline">
                        <label htmlFor="includeSymbols" className="form-check-label mr-1"><strong>Include Symbols:</strong></label>
                        
                        <input type="checkbox" className="form-check-input" checked={!!this.props.includeSymbols} onChange={this.changeIncludeSymbols}></input>
                    </div>
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    enableSymbolsCheckbox: state.enableSymbolsCheckbox,
    includeSymbols: state.includeSymbols
});

const mapDispatchToProps = { changeIncludeSymbols };

export default connect(mapStateToProps, mapDispatchToProps)(SymbolsCheckboxContainer);