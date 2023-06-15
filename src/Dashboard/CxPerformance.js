import React from "react";
import "./CxPerformance.css";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import ChartCxPerformance from "../Chart/ChartCxPerformance";
import ChartMulti from "../Chart/ChartMulti";
import ChartVertBar from "../Chart/ChartVertBar";
import Map from "../Chart/Map";

const CxPerformance = () => {
  return (
    <div className="dashboard-main">
      <div>
        <Link to={"/"} style={{ color: "white" }}>
          <BsArrowLeft className="go-back" size={35} />
        </Link>
        <div className="header-main">
          <div className="header-title">CX Performance Overview</div>
        </div>
        <hr className="header-line" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div className="card mb-3">
                <p style={{ fontSize: 28 }}>4K</p>
                <p style={{ color: "#47C8E7" }}>Number of FFEs</p>
              </div>
              <div className="card mb-2">
                <p style={{ fontSize: 28 }}>$3M</p>
                <p style={{ color: "#47C8E7" }}>Ocean+CX Revenue</p>
              </div>
              <div className="filter-heading">User Name</div>
              <select className="dropdown" id="">
                <option value="">All</option>
              </select>
              <div className="filter-heading">Product Sold Reason</div>
              <select className="dropdown" id="">
                <option value="">All</option>
              </select>
              <div className="filter-heading">Booking Number</div>
              <select className="dropdown" id="">
                <option value="">All</option>
              </select>
              <div className="filter-heading">Completion Date</div>
              <select className="dropdown" id="">
                <option value="">All</option>
              </select>
              <div className="filter-heading">Product Not Sold Reason</div>
              <select className="dropdown" id="">
                <option value="">All</option>
              </select>
              <div className="filter-heading">Reason for In-Progress</div>
              <select className="dropdown" id="">
                <option value="">All</option>
              </select>
            </div>
            <div className="col-md-5">
              <div className="card mb-3">
                <div className="card-head">Deal Status</div>
                <div className="card-title">By Booking Numbers</div>
                <ChartCxPerformance className="chart-container" />
              </div>
              <div className="card mb-2">
                <div className="card-head">Revenue and Revenue MoM%</div>
                <ChartMulti />
              </div>
            </div>
            <div className="col-md-5">
              <div className="crad">
                <div className="card mb-3">
                  <div className="card-head">Revenue by Product</div>
                  <ChartVertBar />
                </div>
                <div className="card mb-2">
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CxPerformance;
