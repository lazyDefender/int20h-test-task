import { store } from '../../../../../init/store'
import { buckwheatActions } from '../../../../../redux/buckwheat/actions'

export default (filters) => {
    const { isFirstLoad } = store.getState().buckwheat
    store.dispatch(buckwheatActions.fetchAsync({
        filters,
        isFirstLoad,
    }))
}