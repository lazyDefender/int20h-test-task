import React, { useState } from 'react'
import {
    Formik,
    Form,
    Field,
} from 'formik'
import { getInitialValues } from './initialValues'
import { validationSchema } from './validationSchema'
import onFilter from './handlers/onFilter'

const FilterForm = () => {
    const [vals, setVals] = useState(getInitialValues())
    return (
        <Formik
        enableReinitialize
        initialValues={vals}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values)
        }}
    >
    {({submitForm, isSubmitting, touched, errors, values}) => (
        
        <Form>
                <button type="submit">Оновити</button>
                <Field name="priceOrder" as="select">
                    <option value="asc">Спочатку дешевші</option>
                    <option value="desc">Спочатку дорожчі</option>
                </Field>
                <Field
                type="number"
                name="minPrice"
                label="minPrice"
                disabled={false}
                />
                <Field
                type="number"
                name="maxPrice"
                label="maxPrice"
                disabled={false}
                />
                {values.weights.map(w => <label htmlFor="" key={w}>
                    {w} г
                    <Field type="checkbox" name="weights" value={`${w}`}/>
                </label>)}
                {/* <label htmlFor="">
                    400 г
                    <Field type="checkbox" name="weights" value="400"/>
                </label>
                <label htmlFor="">
                    500 г
                    <Field type="checkbox" name="weights" value="500"/>
                </label>
                <label htmlFor="">
                    600 г
                    <Field type="checkbox" name="weights" value="600"/>
                </label>
                <label htmlFor="">
                    700 г
                    <Field type="checkbox" name="weights" value="700"/>
                </label> */}
                
                <button type="button">Очистити</button>
                <button type="button" onClick={() => onFilter(values)}>Фільтрувати</button>
        </Form>
    )}
    </Formik>
    )
}

export default FilterForm
