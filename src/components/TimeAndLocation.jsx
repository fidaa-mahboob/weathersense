import {React, useState} from 'react'

const TimeAndLocation = ({ data }) => {

    let unixTimeStamp = data.dt
    const date = new Date(unixTimeStamp * 1000)
    console.log("Date: " + date.toDateString())
    console.log("time: " + date.toLocaleTimeString())
    const time = date.toLocaleTimeString()
    console.log(time.slice(0,5))
    

    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <p className='text-white text-xl font-extralight'>Current Date: {date.toDateString()} </p>
            </div>
            <div className="flex items-center justify-center my-3">
                <p className='text-white text-3xl font-medium'>{data.name}, {data.sys.country}</p>
            </div>
        </div>
    )
}

export default TimeAndLocation