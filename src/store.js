import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import  slice  from "./slice";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [ // These are feature flags, we do not want them cached. This way we can toggle the features with an app update
        'enablePasswordLengthOption',
        'enableSymbolsCheckbox',
        'enableNumbersCheckbox',
        'enableEmojiCheckbox',
        'enableLowercaseLettersCheckbox',
        'enableUppercaseLettersCheckbox',
        'enableClickToCopy',
        'enableClickToSelect',
        'enablePasswordManager'
    ]
};

const reducer = slice.reducer;
const actions = slice.actions;

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);

export const { resetOptions, changeIncludeSymbols, changeIncludeNumbers, changeIncludeEmojis, changeIncludeLowercaseLetters, changeIncludeUppercaseLetters, changeExcludeAmbiguousCharacters, changeExcludeSimilarCharacters, changePasswordLength, generatePassword } = actions;