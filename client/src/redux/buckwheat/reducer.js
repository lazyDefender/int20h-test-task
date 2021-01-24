import {types} from './types';

const initialState = {
    items: [],
    filteredItems: [],
    filterValues: {},
    isFirstLoad: true,
    isFetching: false,
    error: null,
};

export const buckwheatReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.BUCKWHEAT_START_FETCHING: 
        return {
            ...state,
            isFetching: true,
        };

        case types.BUCKWHEAT_STOP_FETCHING: 
        return {
            ...state,
            isFetching: false,
        };

        case types.BUCKWHEAT_SET_FETCHING_ERROR:
        return {
            ...state,
            error: payload,
            data: null,
        }

        case types.BUCKWHEAT_FILL: 
        return {
            ...state,
            items: payload,
            filteredItems: payload,
            error: null,
        }

        case types.BUCKWHEAT_SET_FILTER_VALUES:
        return {
            ...state,
            filterValues: payload,
        }

        case types.BUCKWHEAT_SET_FILTERED_ITEMS:
        return {
            ...state,
            filteredItems: payload,
        }

        case types.BUCKWHEAT_SET_IS_FIRST_LOAD:
        return {
            ...state,
            isFirstLoad: payload,
        }

        default: 
            return state
    }
}
