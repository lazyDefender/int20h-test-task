import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buckwheatActions } from '../../../redux/buckwheat/actions'

const useBuckwheat = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(buckwheatActions.fetchAsync({
            isFirstLoad: true,
        }))
    }, [dispatch])
    const buckwheat = useSelector(state => state.buckwheat)
    return buckwheat
}

export default useBuckwheat
