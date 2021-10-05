import React from 'react';
import { connect } from 'react-redux';
import { changeIncludeEmojis } from '../../store';

class EmojiCheckboxContainer extends React.Component {
    changeIncludeEmojis = (event) => {
        this.props.changeIncludeEmojis();
    }
    render = () => {
        if (!this.props.enableEmojiCheckbox) {
            return null;
        } else {
            return <div className="form-check form-check-inline">
                        <label htmlFor="includeEmojis" className="form-check-label mr-1"><strong>Include Emojis:</strong></label>
                        
                        <input type="checkbox" className="form-check-input" checked={!!this.props.includeEmojis} onChange={this.changeIncludeEmojis}></input>
                    </div>
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    enableEmojiCheckbox: state.enableEmojiCheckbox,
    includeEmojis: state.includeEmojis
});

const mapDispatchToProps = { changeIncludeEmojis };

export default connect(mapStateToProps, mapDispatchToProps)(EmojiCheckboxContainer);