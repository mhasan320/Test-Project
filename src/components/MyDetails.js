import React from 'react'

export const MyDetails = ({text1, text2}) => {
    return (
        <div>
            <p className="flex flex-col xl:flex-row justify-start text-lg"><b className="pr-3 w-full xl:w-32">{text1} :</b> {text2}</p>
        </div>
    )
}
