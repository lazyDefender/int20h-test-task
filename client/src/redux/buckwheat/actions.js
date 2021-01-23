// Types
import api from '../../api/'
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

    setFilters: (filters) => {
        return {
            type: types.BUCKWHEAT_SET_FILTERS,
            payload: filters,
        }
    },

    setFilteredItems: (filteredItems) => {
        return {
            type: types.BUCKWHEAT_SET_FILTERED_ITEMS,
            payload: filteredItems,
        }
    },

    // Async
    fetchAsync: (id) => async (dispatch) => {
        dispatch(buckwheatActions.startFetching())
        const { status, data} = await api.buckwheat.get()
        if(status === 200) {
            dispatch(buckwheatActions.fill(data))
            dispatch(buckwheatActions.stopFetching())
        }
        
    }
})
