import React, { useState, useEffect } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";

const Update = () => {

  const { id } = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    axios.get("http://localhost:8081/read/" + id)
      .then((res) => {
        console.log(res);
        setValues({...values, name:res.data[0].Name, email: res.data[0].Email })
      })
      .catch((err) => console.log(err));
  }, []);

      const [values, setValues] = useState({
        name: '',
        email: '',
      });

      const handleUpdate = (event) =>{
        event.preventDefault();
        axios.put('http://localhost:8081/update/' +id , values).then(res =>{
          console.log(res);
          navigate('/')

        }).catch(err =>{
          console.log(err);
        })
      }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
         
          <h2>Update Student</h2>
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
                value={values.name}
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
                value={values.email}
                onChange={(e) => {
                  setValues({ ...values, email: e.target.value });
                }}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
