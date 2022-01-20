import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Loader } from '../components/Loader';
import {Link} from "react-router-dom";

export const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        .get(`https://61e8713fe32cd90017acc242.mockapi.io/blogPost`)
        .then((getData) => {
            setBlogPosts(getData.data);
            setLoading(false);
      });
    }, [])

      // update data after deletion
  const getUpdateData = () => {
    axios
      .get(`https://61e8713fe32cd90017acc242.mockapi.io/blogPost`)
      .then((getData) => {
        setLoading(false);
        setBlogPosts(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://61e8713fe32cd90017acc242.mockapi.io/blogPost/${id}`)
      .then(() => {
        setLoading(true);
        getUpdateData();
      });
  };


    //set id into local storage
    const setId = (id, title, body) => {
        localStorage.setItem("ID", id);
        localStorage.setItem("title", title);
        localStorage.setItem("body", body);
    }



    return (
        <div>
            <div className="flex justify-between py-3">
                <h3 className="flex justify-start text-3xl pb-2">Blog</h3>
                <Link to="/create">
                    <button className="py-2 px-8 border border-blue-500 m-auto uppercase hover:bg-blue-500 hover:text-white transition-all">
                    New Post
                    </button>
                </Link>
            </div>
            <hr className="pb-8"/>
            {
                loading ? (
                    <Loader/>
                ):(
                    <ul>
                        {
                            blogPosts.slice(Math.max(blogPosts.length- 3, 1)).map((data) => (
                                <li className="mb-7 pb-3 border-b border-slate-300 last:border-none w-full xl:w-9/12 m-auto flex justify-between" key={data.id}>
                                    <span className="mr-8">
                                        <h2 className="text-xl text-bold pb-1">{data.title}</h2>
                                        <p className="text-base text-justify">{data.body}</p>
                                    </span>
                                    <span className="flex justify-center items-center">
                                        <Link to="/update" className="mr-3 border border-blue-500 py-1 px-3 hover:bg-blue-500 hover:text-white">
                                            <span  onClick={() => setId(data.id, data.title, data.body)} >Edit</span>
                                        </Link>
                                        <button  onClick={() => onDelete(data.id)} className="border border-blue-500 py-1 px-3 hover:bg-blue-500 hover:text-white">Delete</button>
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}
