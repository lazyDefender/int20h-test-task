import * as yup from 'yup'

export const validationSchema = 
    yup.object().shape({
        priceOrder: yup
            .string()
            .oneOf(['asc', 'desc'])
            .required(),
        minPrice: yup
            .number()
            .required(),
        maxPrice: yup
            .number()
            .required(),
        weights: yup
            .array()
            .of(yup.number())
            .required(),
    })
