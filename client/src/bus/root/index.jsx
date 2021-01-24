import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '../../global/Grid'
import FilterForm from './components/FilterForm'
import Product from './components/Product'
import useBuckwheat from './hooks/useBuckwheat'
import './style.css'

const Root = () => {
    const { isFirstLoad } = useSelector(state => state.buckwheat)
    const buckwheat = useBuckwheat()

    const { 
        filteredItems,
        filterValues,
        isFetching,
    } = buckwheat

    let filterForm = null
    if(!isFetching || (isFetching && !isFirstLoad)) {
        filterForm = <FilterForm filterValues={filterValues}/>
    }

    const filteredItemsJSX = <Grid>
        {filteredItems.map((item) => <Product {...item} key={item.id} />)}
    </Grid>
    

    return (
        <div className="container">
                {filterForm}
                {isFetching ? <h2>Loading...</h2> : filteredItemsJSX}
        </div>
    )
}

export default Root
