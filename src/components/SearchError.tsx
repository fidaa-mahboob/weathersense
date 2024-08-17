import React from 'react'

interface Props {
    error: String
}

const SearchError = ({ error } : Props) => {
    if(error === null){
        return(<></>)
    } else {
        return(
        <p>{ error }</p>
        )
    }
}

export default SearchError
