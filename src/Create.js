import React, {useState }from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const Create = () => {
    const [values, setValues] = useState({
        name:'',
        email:''
    })
    const navigate = useNavigate()
    const handlesubmit =(e) =>{
        e.preventDefault();
        axios
          .post("http://localhost:8081/student", values)
          .then((res) => {
            console.log(res);
            navigate('/')
          }).catch((err) => console.log(err));
    }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handlesubmit}>
          <h2>Add Student</h2>
          <div className="mb-3">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setValues({ ...values, name: e.target.value });
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  setValues({ ...values, email: e.target.value });
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
