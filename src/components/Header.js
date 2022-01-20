/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <div className="bg-blue-500 py-3 px-2">
            <div className="w-full sm:w-3/5 flex m-auto">
                <Link to="/home" className="text-white flex font-bold uppercase w-1/2">AmarLab <span className="hidden sm:block pl-1">Test Project</span></Link>
                <ul className="flex items-center justify-between w-1/2">
                    <li><Link to="/home" className="text-white">Home</Link></li>
                    <li><Link to="/blog" className="text-white">Blog</Link></li>
                    <li><Link to="/contact" className="text-white">Contact</Link></li>
                    <li><Link to="/" className="text-white">Log Out</Link></li>
                </ul>
            </div>
        </div>
    )
}
