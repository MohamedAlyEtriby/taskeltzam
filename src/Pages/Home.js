import React from "react";
import "./Home.css";
import UseFetch from "../UseFetch";
import Loader from "../Loader/Loader";
const Home = () => {
  const data = UseFetch("https://api.github.com/users/github");
  console.log(data);
  return (
    <div className="home">
      <div className="info">
        <div className="AccInfo">
          <h3>Account info</h3>
        </div>
        <div className={`details ${data !== null ? "flex-colo" : "flex"}`}>
          {" "}
          {data !== null ? (
            <>
              {" "}
              <div>
                <img src={data.avatar_url} width={80} height={80} alt="" />
              </div>
              <div className="flex-between">
                <h5>Location</h5>
                <h6>{data?.location}</h6>
              </div>{" "}
              <div className="flex-between">
                <h5>Bio</h5>
                <h6 style={{ maxWidth: "15rem" }}>{data?.bio}</h6>
              </div>{" "}
              <div className="flex-between">
                <h5>Github Id</h5>
                <h6>{data?.id}</h6>
              </div>
              <div className="flex-between">
                <h5>Number of Public Repos</h5>
                <h6>{data?.public_repos}</h6>
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
