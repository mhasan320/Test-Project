import React from 'react'

export const TextBox = ({labelText, ...rest}) => {
    return (
        <div className="mb-3 block">
            <label
                htmlFor="fullname"
                className="text-black dark:text-black text-lg mb-3 block font-medium"
            >
                {labelText}
            </label>
            <textarea
                className="border border-blue-400 w-full py-2 px-2 rounded-lg focus:ring focus:ring-blue-400 focus:border focus:outline-none"
                {...rest}
            ></textarea>
        </div>
    )
}
