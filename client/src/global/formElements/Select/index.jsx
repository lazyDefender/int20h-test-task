import React from 'react'
import ReactSelect from 'react-select'

const Select = ({
    onChange,
    value,
    options ,
    className,
    classNamePrefix,
}) => {
    const styles = {
        container: (base, state) => ({
            ...base,
            marginBottom: 10,
            transition: 'all .2s linear',
        }),
        menu: (base, state) => ({
            ...base,
            transition: 'all .2s linear',
        }),
        control: (base, state) => ({
            ...base,
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: state.isFocused ? 'rgb(85, 204, 0)' : 'black',
            "&:hover": {
                borderColor: state.isFocused ? 'rgb(85, 204, 0)' : 'black',
            },

            boxShadow: 'none',
            transition: 'all .2s linear',
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? 'rgb(85, 204, 0)' : 'white',
            "&:hover": {
                backgroundColor: state.isSelected ? 'rgb(85, 204, 0)' : 'rgb(94, 227, 0)',
                color: 'white',
            },
            transition: 'all .2s linear',
        }),
        dropdownIndicator: (base, state) => ({
            ...base,
            color: state.isFocused ? 'rgb(85, 204, 0)' : 'black',
            "&:hover": {
                color: 'rgb(85, 204, 0)',
            },
            transition: 'all .2s linear',
        }),
    }

    return (
        <ReactSelect
            onChange={onChange}
            value={value}
            options={options}
            className={className}
            classNamePrefix={classNamePrefix}
            components={{
                IndicatorSeparator: null
            }}
            styles={styles}
            isSearchable={false}
        />
    )
}

export default Select
