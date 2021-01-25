import React from 'react'
import { useSelector } from 'react-redux'
import ScrollUpButton from 'react-scroll-up-button'
import Loader from 'react-loader-spinner'
import Grid from '../../global/Grid'
import FilterForm from './components/FilterForm'
import Product from './components/Product'
import useBuckwheat from './hooks/useBuckwheat'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
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
    
    const loaderJSX = <Loader type="Oval" color="#55CC00" height={80} width={80} />

    return (
        <div className="container">
                <ScrollUpButton
                    StopPosition={0}
                    ShowAtPosition={300}
                    EasingType='easeOutCubic'
                    AnimationDuration={500}
                />
                {filterForm}
                {isFetching ? loaderJSX : filteredItemsJSX}
        </div>
    )
}

export default Root
