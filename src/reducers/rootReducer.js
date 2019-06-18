import { combineReducers } from 'redux';
import reducers from './reducers';
import { i18nReducer } from 'react-redux-i18n';

export default combineReducers({
    ...reducers,
    i18n: i18nReducer
});