import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {InputBox} from "../InputBox";
import {TextBox} from "../TextBox";
export const UpdateBlog = () => {
  
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [ID, setID] = useState(null);

  // send data into mock api with function
  const sendDataApi = (e) => {
    e.preventDefault();
    axios
      .put(`https://61e8713fe32cd90017acc242.mockapi.io/blogPost/${ID}`, {
        title,
        body,
      })
      .then(() => {
        navigate("/blog");
      });
  };

  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setBody(localStorage.getItem("body"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <>
    <h3 className="flex justify-start text-3xl pb-2">Update Post</h3>
    <hr className="pb-8"/>
    <form onSubmit={sendDataApi} className="mb-7 pb-3 border-b border-slate-300 last:border-none w-full xl:w-9/12 m-auto">
        <InputBox
        labelText="Title"
        name="title"
        type="text"
        value={title || ""}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title here"/>

        <TextBox
        labelText="Post"
        name="body"
        type="text"
        value={body || ""}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter Post details here"/>


        <button className="border border-blue-400 bg-blue-400 text-white hover:bg-blue-600 hover:border-blue-600 w-full py-2 px-2 rounded-lg uppercase font-sm font-bold">
                Update
        </button>
    </form>
  </>
  );
};
