// Types
import api from '../../api/'
import { getInitialValues } from './functions/getInitialValues'
import { types } from './types'

export const buckwheatActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.BUCKWHEAT_START_FETCHING,
        }
    },

    stopFetching: () => {
        return {
            type: types.BUCKWHEAT_STOP_FETCHING,
        }
    },

    fill: (payload) => {
        return {
            type: types.BUCKWHEAT_FILL,
            payload,
        }
    },

    setFetchingError: (error) => {
        return {
            type: types.BUCKWHEAT_SET_FETCHING_ERROR,
            error: true,
            payload: error,
        }
    },

    setFilterValues: (filters) => {
        return {
            type: types.BUCKWHEAT_SET_FILTER_VALUES,
            payload: filters,
        }
    },

    setFilteredItems: (filteredItems) => {
        return {
            type: types.BUCKWHEAT_SET_FILTERED_ITEMS,
            payload: filteredItems,
        }
    },

    setIsFirstLoad: (payload) => {
        return {
            type: types.BUCKWHEAT_SET_IS_FIRST_LOAD,
            payload,
        }
    },

    // Async
    fetchAsync: ({filters, isFirstLoad}) => async (dispatch) => {
        dispatch(buckwheatActions.startFetching())
        const { status, data} = await api.buckwheat.get(filters)
        if(status === 200) {
            dispatch(buckwheatActions.fill(data))
            
            if(isFirstLoad) {
                dispatch(buckwheatActions.setFilterValues(getInitialValues(data)))
            }
            
            dispatch(buckwheatActions.stopFetching())
            dispatch(buckwheatActions.setIsFirstLoad(false))
        }
        
    }
})
