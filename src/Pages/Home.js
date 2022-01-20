import React from 'react';
import myImg from "../assets/img/hasan.jpg";
import { MyDetailsLink } from '../components/MyDetailsLink';

export const Home = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between h-90vh items-center">
            <div className="w-full lg:w-1/2">
                <img className="w-full lg:w-9/12 m-auto" src={myImg} alt="Mahmudul Hasan"/>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="flex justify-start text-3xl">Mahmudul Hasan</h3>
                <p className="pb-4 text-lg">Front-end Developer</p>
                <MyDetailsLink text1="Email" link="mhhasan320@gmail.com" linkText="mailto:mhhasan320@gmail.com"/>
                <MyDetailsLink text1="Website" link="https://mhasanportfolio.netlify.app" linkText="https://mhasanportfolio.netlify.app"/>
                <MyDetailsLink text1="LinkedIn" link="https://www.linkedin.com/in/mahmudulhasan12/" linkText="https://www.linkedin.com/in/mahmudulhasan12/"/>
                <p className="mt-8 text-justify">Front-end Developer with 5 years+ professional experience by providing service to ‘Eunoia IT Solutions ‘. Enjoy Coding and problem solver.</p>
            </div>
        </div>
    )
}
