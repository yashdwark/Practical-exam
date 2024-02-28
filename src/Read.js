import React, { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom'

import axios from 'axios';
  
const Read = () => {
   const [data, setData] = useState([]);
    const {id}= useParams();
    useEffect(() => {
    axios.get(`http://localhost:8081/read/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data[0])
      })
      .catch((err) => console.log(err));
    },[id])
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Student Details</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.ID}</td>
              <td>{data.Name}</td>
              <td>{data.Email}</td>
              <td>
                <Link to="/" className="btn  btn-sm btn-primary my-2">
                  Back
                </Link>
                <Link
                  to={`/edit/${data.ID}`}
                  className="btn btn-sm btn-success mx-2"
                >
                  Edit
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Read
