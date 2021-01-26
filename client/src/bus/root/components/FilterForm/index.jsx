import React from 'react'
import {
    Formik,
    Form,
    Field,
} from 'formik'
import { validationSchema } from './validationSchema'
import onFilter from './handlers/onFilter'
import onRefresh from './handlers/onRefresh'
import Input from '../../../../global/formElements/Input'
import Select from '../../../../global/formElements/Select'
import './style.css'
import { formatWeight } from '../../../../utils/formatWeight'
import { sortingOptions } from './sortingOptions'

const FilterForm = ({filterValues}) => {
    const vals = filterValues
    
    return (
        <>
        <Formik
        // enableReinitialize
        initialValues={{
            ...vals,
            weights: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values, formikBag) => {
            onRefresh(values)
        }}
        onReset={(values, formikBag) => {
            onFilter(values)
        }}
    >
    {({submitForm, isSubmitting, touched, errors, values, resetForm, setFieldValue}) => (
        
        <Form>
                <button 
                    className="contained btn-update" 
                    type="submit"
                    onClick={onRefresh}
                >Оновити</button>

                <Select
                    onChange={value => setFieldValue('priceOrder', value.value)}
                    value={sortingOptions.find(opt => opt.value === values.priceOrder)}
                    options={sortingOptions}
                    className="react-select-container"
                    classNamePrefix="react-select"
                />

                <h5>Ціна</h5>
                <div className="price-inputs">
                    <Field
                        type="number"
                        name="minPrice"
                        label="minPrice"
                        component={Input}
                    />
                    <span>—</span>
                    <Field
                        type="number"
                        name="maxPrice"
                        label="maxPrice"
                        component={Input}
                    />
                </div>

                
                <h5>Вага</h5>
                <ul className="weights-list">
                    {vals.weights?.map(w => 
                        <li className="weights-list-item" key={w}>
                            <Field
                                id={w} 
                                type="checkbox" 
                                name="weights" 
                                value={`${w}`}
                                component={Input}
                            />
                            <label htmlFor={w}>{formatWeight(w)}</label>
                        </li>)
                    }
                </ul>
                
                <div className="buttons">
                    <button 
                        className="btn-clear" 
                        type="button"
                        onClick={resetForm}
                    >Очистити</button>
                    <button 
                        className="contained" 
                        type="button"
                        onClick={() => onFilter(values)}
                    >Фільтрувати</button>
                </div>
        </Form>
    )}
    </Formik>
    </>
    )
}

export default FilterForm
