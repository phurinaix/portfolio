import { setLocale } from 'react-redux-i18n';

export const setLang = (l) => dispatch =>{
    dispatch(setLocale(l));
}