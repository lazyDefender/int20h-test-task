import {combineReducers} from 'redux';

//import reducers
import { buckwheatReducer as buckwheat } from '../redux/buckwheat/reducer'

export const rootReducer = combineReducers({
    // reducers
    buckwheat,
});