import React from 'react';
import {MyDetails} from "../components/MyDetails";
import { ContactForm } from '../components/ContactForm';
import { GoogleMapAmarLab } from '../components/GoogleMapAmarLab';

export const Contact = () => {
    return (
        <div>
            <h3 className="flex justify-start text-3xl pb-2">Contact Me</h3>
            <hr className="pb-8"/>
             <div className="flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <MyDetails text1="Phone" text2="+88015 7829396"/>
                    <MyDetails text1="Email" text2="mhhasan320@gmail.com"/>
                    <MyDetails text1="Address" text2="Nondipara, Basaboo, Khilgaon, Dhaka 1219"/>
                </div>
                <div className="w-full lg:w-1/2">
                    <ContactForm />
                </div>
            </div>
            <div className="mt-10 mb-20">
                <GoogleMapAmarLab/>
            </div>
        </div>
    )
}
