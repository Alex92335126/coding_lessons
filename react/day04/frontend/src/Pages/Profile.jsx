import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

// export default function Home() {
//   const [data, setData] = useState("");
//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_BACKEND}/api/profile`)
//       .then((res) => setData(res.data));
//   }, []);

  export default function Home() {
    const [data, setData] = useState("");

    useEffect(()=> {
      const getProfile = async () => {
          let res = await axios.get(`${process.env.REACT_APP_BACKEND}/api/profile`)
          setData(res.data)
      }
      localStorage.setItem("hello", "world")
      getProfile()

    }, [])

    // useEffect(() => {
    //   getProfile()
    // }, []);

    // const getProfile = async () => {
    //   let res = await axios.get(`${process.env.REACT_APP_BACKEND}/api/profile`)
    //   setData(res.data)
    // }

  return (
    <div>
      <h1>Profile Page</h1>
      <Outlet />
      <h2>Name: Bibek</h2>
      <h2>Skills: React, JavaScript, NodeJS</h2>
      <Link to="/profile/photo">
        <button>View Profile Photo</button>
      </Link>
      <p>{data}</p>
    </div>
  );
}
