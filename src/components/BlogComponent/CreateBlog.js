import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {InputBox} from "../InputBox";
import {TextBox} from "../TextBox";

export const CreateBlog = () => {

    let navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState(false);
  
    // send data into mock api with function
    const sendDataApi = (e) => {
      e.preventDefault();
      axios
        .post(`https://61e8713fe32cd90017acc242.mockapi.io/blogPost`, {
          title,
          body,
        })
        .then(() => {
          setError(false);
          navigate("/blog");
        })
        .catch(() => {
          setError(true);
        });
    };

  return (
      <>
        <h3 className="flex justify-start text-3xl pb-2">Create New Post</h3>
        <hr className="pb-8"/>
        <form onSubmit={sendDataApi} className="mb-7 pb-3 border-b border-slate-300 last:border-none w-full xl:w-9/12 m-auto">
            <InputBox
            labelText="Title"
            name="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title here"/>

            <TextBox
            labelText="Post"
            name="body"
            type="text"
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter Post details here"/>

            {error && (
            <p className="mb-4 text-center text-sm text-red-300">
                Faild to post data
            </p>
            )}

            <button className="border border-blue-400 bg-blue-400 text-white hover:bg-blue-600 hover:border-blue-600 w-full py-2 px-2 rounded-lg uppercase font-sm font-bold">
                    Submit
            </button>
        </form>
      </>
  );
};
