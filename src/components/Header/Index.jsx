import React from "react";
import "./Index.css";
import Red from "../assets/img/Ellipse 1.svg";
import Orange from "../assets/img/Ellipse 2.svg";
import Green from "../assets/img/Ellipse 3.svg";

export default (props) => {
  return (
    <div>
      <div className="bg-drac">
        <div className="container-fluid">
          <div className="row">
            <div className="col-1">
              <img src={Red} alt="" />
            </div>
            <div className="col-1">
              <img src={Orange} alt=""/>
            </div>
            <div className="col-1">
              <img src={Green} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
