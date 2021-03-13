import React, { useState, useEffect, useContext } from "react";
import UserContext from "../Context/UserContext";
import Axios from "axios";
import { toast } from "react-toastify";
import CardList from "./CardList";

const Card = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [gitUser, setGitUser] = useState(null);

  const api = "https://api.github.com/users/";

  const fetchUsers = async () => {
    try {
      const { data } = await Axios.get(`${api}${query}`);
      setGitUser(data);
    } catch (error) {
      toast("User not Available", { type: "error" });
    }
  };

  const submitData = (e) => {
    e.preventDefault();

    fetchUsers();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <form onSubmit={submitData}>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                className="form-control"
                placeholder="Enter username..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </form>

          {gitUser ? (
            <>
              {/* <div className="col-lg-4 py-5"> */}
                <div className="card my-5">
                  <img
                    src={gitUser.avatar_url}
                    className="cardImg card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{gitUser.name}</h5>
                    <p className="card-text">{gitUser.bio}</p>
                    <h6 className="card-text">{gitUser.location}</h6>
                  </div>
                </div>
              {/* </div> */}
            </>
          ) : null}
        </div>
        <div className="col-lg-8">
            {gitUser ? 
            (
               <CardList repos_url={gitUser.repos_url}/>
            ) 
            :
             null}
        </div>
      </div>
    </div>
  );
};

export default Card;
