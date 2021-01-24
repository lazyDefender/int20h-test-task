import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Formik,
    Form,
    Field,
} from 'formik'
import { validationSchema } from './validationSchema'
import onFilter from './handlers/onFilter'
import onRefresh from './handlers/onRefresh'
import Input from '../../../../global/formElements/Input'
import './style.css'
import { Fragment } from 'react'

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
    {({submitForm, isSubmitting, touched, errors, values, resetForm}) => (
        
        <Form>
                <button 
                    className="contained btn-update" 
                    type="submit"
                    onClick={onRefresh}
                >Оновити</button>
                {/* <Field name="priceOrder" as="select">
                    <option value="asc">Спочатку дешевші</option>
                    <option value="desc">Спочатку дорожчі</option>
                </Field> */}

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
                            <label htmlFor={w}>{w} г</label>
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
