import React from 'react'
import FilterForm from './components/FilterForm'
import useBuckwheat from './hooks/useBuckwheat'

const Root = () => {
    const buckwheat = useBuckwheat()
    const { 
        filteredItems,
    } = buckwheat


    return (
        <div>
            {/* <button>Оновити</button>
            <select>
                <option value="">За зростанням ціни</option>
                <option value="">За спаданням ціни</option>
            </select>
            <button>Фільтрувати</button> */}
            {!buckwheat.isFetching && <FilterForm/>}
            
            {filteredItems.map((item, i) => (<div key={item.url}>
                <article >
                    <img src="" alt=""/>
                    <h3>{item.title}</h3>
                    <span>{item.price}</span>
                    <span>{item.weight}</span>
                    <a href={item.url}>{item.url}</a>
                </article>
            </div>))}
            
        </div>
    )
}

export default Root
