import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('')

    const handleChangeInput = (e) =>[
        setInputValue(e.target.value)
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2 ) {
            setCategories(cats => [inputValue , ...cats]) // Esto se hace para ahorrar mandar la prop del valor de las categorias
            setInputValue('') 
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={e => handleChangeInput(e)}
                />
            </form>
        </>
    )
}


AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}