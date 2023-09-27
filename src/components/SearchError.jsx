import React from 'react'

const SearchError = ({error}) => {
    if(error === null){
        return(<></>)
    } else {
        return(
        <p>{error}</p>
        )
    }
}

export default SearchError
