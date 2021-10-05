import { createSlice } from '@reduxjs/toolkit';
import emojis from './data/emoji';

const initialState = {
    // Password Generation Options
    passwordLength: 16,
    includeSymbols: true,
    includeNumbers: true,
    includeEmojis: false,
    includeLowercaseLetters: true,
    includeUppercaseLetters: true,
    excludeSimilarCharacters: true, // ( e.g. i, / \ ' " ` ~ , ; : . < > ) l, 1, L, o, 0, O )
    excludeAmbiguousCharacters: true, // ( { } [ ] ( )
    
    // Feature Flags
    enablePasswordLengthOption: true,
    enableSymbolsCheckbox: true,
    enableNumbersCheckbox: true,
    enableEmojiCheckbox: true,
    enableLowercaseLettersCheckbox: true,
    enableUppercaseLettersCheckbox: true,
    enableClickToCopy: true,
    enableClickToSelect: true,
    enablePasswordManager: false,
    
    // Generated Data
    generatedPassword: '',
    storedPasswords: []
};

const slice = createSlice({
    name: "passwordGenerator",
    initialState,
    reducers: {
        resetOptions: (state, action) => {
          state.passwordLength = 16;
          state.includeSymbols = true;
          state.includeNumbers = true;
          state.includeEmojis = false;
          state.includeLowercaseLetters = true;
          state.includeUppercaseLetters = true;
          state.excludeSimilarCharacters = true;
          state.excludeAmbiguousCharacters = true;
        },
        changeIncludeSymbols: (state, action) => {
          state.includeSymbols = !state.includeSymbols;
        },
        changeIncludeNumbers: (state, action) => {
          state.includeNumbers = !state.includeNumbers;
        },
        changeIncludeEmojis: (state, action) => {
          state.includeEmojis = !state.includeEmojis;
        },
        changeIncludeLowercaseLetters: (state, action) => {
          state.includeLowercaseLetters = !state.includeLowercaseLetters;
        },
        changeIncludeUppercaseLetters: (state, action) => {
          state.includeUppercaseLetters = !state.includeUppercaseLetters;
        },
        changeExcludeAmbiguousCharacters: (state, action) => {
          state.excludeAmbiguousCharacters = !state.excludeAmbiguousCharacters;
        },
        changeExcludeSimilarCharacters: (state, action) => {
          state.excludeSimilarCharacters = !state.excludeSimilarCharacters;
        },
        changePasswordLength: (state, action) => {
          if (action.payload.passwordLength > 999999) {
            state.passwordLength = 999999;
          } else {
            state.passwordLength = action.payload.passwordLength;
          }
        },
        generatePassword: (state, action) => {
          let allowedCharacters = [];
          state.generatedPassword = '';
      
          if (state.includeSymbols === true) {
            allowedCharacters = allowedCharacters.concat(["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?", "|", "\\"]);
          }
      
          if (state.includeNumbers === true) {
            allowedCharacters = allowedCharacters.concat(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
          }
      
          if (state.includeLowercaseLetters === true) {
            allowedCharacters = allowedCharacters.concat(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
          }
      
          if (state.includeUppercaseLetters === true) {
            allowedCharacters = allowedCharacters.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
          }

          if (state.includeEmojis === true) {
            allowedCharacters = allowedCharacters.concat(emojis);
          }
      
          if (state.excludeAmbiguousCharacters === true) {
            allowedCharacters.filter(c => ![
                '(', '{', '}', '[', ']',
                '(', ')', '/', "'", '>',
                '>', '"', '`', '~', ',',
                ';', ':', '.', '<', '>',
                ')'
              ].includes(c));
          }
      
          if (state.excludeSimilarCharacters === true) {
            allowedCharacters.filter(c => ![
                "i", "l", "1", "L", "o", 
                "0", "O"
              ].includes(c));
          }

          // Calculate highest mulitples of allowedCharacters.length and UInt32
          const multiples = Math.floor((Math.pow(2, 32) - 1) / allowedCharacters.length );
          const maxWithoutBias = multiples * allowedCharacters.length;

          // Cap password length
          let passwordLength = 0;
          state.passwordLength > 999999 ? passwordLength = 999999 : passwordLength = state.passwordLength;

          // Generate a password by going through the array and adding a random character
          for (let i = 0; i < passwordLength; i++) {
            //let num = Math.floor(Math.random() * allowedCharacters.length);
            let rng = new Uint32Array(1);
            
            window.crypto.getRandomValues(rng);

            while (rng[0] > maxWithoutBias) {
              window.crypto.getRandomValues(rng); 
            }

            let num = rng[0] % allowedCharacters.length;
            let char = allowedCharacters[num];

            if (char !== undefined) {
              state.generatedPassword = state.generatedPassword.concat(char);
            } else {
              state.generatedPassword = state.generatedPassword.concat("!");
            }
          }
        }
      }
});

export default slice;