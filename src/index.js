import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import languages from './languages/languages.json';
import languages from './languages/languages.js';


syncTranslationWithStore(store)
store.dispatch(loadTranslations(languages));
store.dispatch(setLocale('en'));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
