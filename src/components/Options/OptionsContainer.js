import React from 'react';
import PasswordLengthOptionContainer from './PasswordLengthOptionContainer';
import SymbolsCheckboxContainer from './SymbolsCheckboxContainer';
import NumbersCheckboxContainer from './NumbersCheckboxContainer';
import LowercaseLettersCheckboxContainer from './LowercaseLettersCheckboxContainer';
import UppercaseLettersCheckboxContainer from './UppercaseLettersCheckboxContainer';
import EmojiCheckboxContainer from './EmojiCheckboxContainer';

class OptionsContainer extends React.Component {
  render = () => {
      return <div>
          <h3>Options</h3>
            <form>
              <PasswordLengthOptionContainer />

              <SymbolsCheckboxContainer />
              
              <NumbersCheckboxContainer />

              <LowercaseLettersCheckboxContainer />

              <UppercaseLettersCheckboxContainer />

              <EmojiCheckboxContainer />
            </form>
      </div>
  }
}
 
export default OptionsContainer;