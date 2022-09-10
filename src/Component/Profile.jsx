import React from "react";
import "../scss/Main.scss";
import myImg from "../image/img (2).jpg";
const Profile = () => {
  return (
    <>
      <div className="profile">
        <div>
          <div className="info">
            <img src={myImg} alt="" />
            <p>
              <span className="title">name:</span>
              <span className="name">mamun hossain</span>
            </p>
            <p>
              <span className="title">mobile:</span>
              <span className="mobile">+88 01628655651</span>
            </p>
            <p>
              <span className="title">email:</span>
              <span className="email">hmamun492@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
