 import isEmpty from '../validation/is-empty';
 import {
     SET_CURRENT_PERSONNEL
 } from '../actions/types';


 const initialState = {
     isAuthenticated: false,
     personnel: {}
 }

 export default function (state = initialState, action) {
     switch (action.type) {
         case SET_CURRENT_PERSONNEL:
             return {
                 ...state,
                 isAuthenticated: !isEmpty(action.payload),
                     personnel: action.payload
             };
         default:
             return state;
     }
 }