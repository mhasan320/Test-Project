import React from 'react'

export const MyDetailsLink = ({text1, link, linkText}) => {
    return (
        <div>
            <p className="flex flex-col xl:flex-row justify-start text-lg"><b className="pr-3 w-full xl:w-32">{text1} :</b> <a href={linkText} className="hover:text-blue-700">{link}</a></p>
        </div>
    )
}
