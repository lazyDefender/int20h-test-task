import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buckwheatActions } from '../../../redux/buckwheat/actions'
const useBuckwheat = (filters) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(buckwheatActions.fetchAsync(filters))
    }, [dispatch, filters])
    const buckwheat = useSelector(state => state.buckwheat)
    return buckwheat
}

export default useBuckwheat
