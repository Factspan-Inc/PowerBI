import React from "react";
import "./Dashboard.css";
import Chart from "../Chart/Chart";
import { Link } from "react-router-dom";
import logo from "../Images/Maersk-Emblem.jpg";

const Dashboard = () => {
  const vpLeadsData = [7, 2, 15, 1, 90, 10]; // Example data for VP Leads
  const intermodalLeadsData = [5, 8, 3, 12, 6, 15];
  const extramodalLeadsData = [5, 10, 3, 10, 16, 6];
  const chbimport = [10, 20, 30, 8, 8, 24];
  const chbexport = [10, 20, 10, 10, 0, 40];

  // Example data for Intermodal Leads
  return (
    <div className="dashboard-main">
      <div className="header-mains">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <img
              src={logo}
              alt="logo"
              className="logo_img"
              style={{ width: "30px" }}
            />
          </div>
          <div className="header-title col-md-6">
            Product Xsell Recommendations (future 90 days)
          </div>
          <div className="col-md-3">
            <button className="button-cx">GDA</button>
          </div>
        </div>
        <hr className="header-line"></hr>
        <div className="container-fluid">
          <div className="grid">
            <div className="item">
              <Link to="/vpleads">
                <button className="button vp_button">VP Leads</button>
              </Link>
              <div className="chart-info">
                <span className="sideway-text">Booking FFEs</span>
                <span className="chart-values">
                  <p className="button-number-vpLeads">2.4M</p>
                </span>
              </div>
              <div className="chart-info">
                <span className="sideway-text">Booking #</span>
                <span className="chart-values">
                  <p className="btn-down button-number-vpLeads">1.4M</p>
                </span>
              </div>
              <div className="chart-container-vp chart-info">
                <span className="sideway-text">Lead Prob. Bucket</span>
                <span className="chart-values-vp">
                  <Chart chartData={vpLeadsData} />
                </span>
              </div>
            </div>

            <div className="item">
              <button className="button">Intermodel Import Leads</button>
              <div className="button-number">1.5M</div>
              <div className="btn-down button-number">790.4K</div>

              <div className="chart-container">
                <Chart chartData={intermodalLeadsData} />
              </div>
            </div>
            <div className="item">
              <button className="button">Intermodel Export Leads</button>
              <div className="button-number">2.6M</div>
              <div className="btn-down button-number">199.1K</div>

              <div className="chart-container">
                <Chart chartData={extramodalLeadsData} />
              </div>
            </div>
            <div className="item">
              <button className="button custom-btn">CHB Import Leads</button>
              <div className="button-number">1.7M</div>
              <div className="btn-down button-number">875.1K</div>

              <div className="chart-container">
                <Chart chartData={chbimport} />
              </div>
            </div>
            <div className="item">
              <button className="button custom-btn">CHB Export Leads</button>
              <div className="button-number">2.9M</div>
              <div className="btn-down button-number">
                <span style={{ visibility: "hidden" }}>t</span>1.6M
                <span style={{ visibility: "hidden" }}>t</span>
              </div>

              <div className="chart-container">
                <Chart chartData={chbexport} />
              </div>
            </div>
            <div className="item">
              <button className="button">Booking service Import Leads</button>
              <div className="button-number">1.8M</div>
              <div className="btn-down button-number">890.1K</div>

              <div className="chart-container">
                <Chart chartData={vpLeadsData} />
              </div>
            </div>
            <div className="item borderless">
              <button className="button">Booking service Export Leads</button>
              <div className="button-number">2.8M</div>
              <div className="btn-down button-number">1.6M</div>

              <div className="chart-container">
                <Chart chartData={extramodalLeadsData} />
              </div>
            </div>
          </div>
        </div>

        <div className="legend-text-main">
          Prob. Buckets -
          <div className="legends">
            <div className="legend">
              <div
                className="legend-circle"
                style={{ backgroundColor: "#efb5b9" }}
              ></div>
              <span className="legend-text">60-70%</span>
            </div>
            <div className="legend">
              <div
                className="legend-circle"
                style={{ backgroundColor: "#e8d166" }}
              ></div>
              <span className="legend-text">70-80%</span>
            </div>
            <div className="legend">
              <div
                className="legend-circle"
                style={{ backgroundColor: "#eb895f" }}
              ></div>
              <span className="legend-text">80-90%</span>
            </div>
            <div className="legend">
              <div
                className="legend-circle"
                style={{ backgroundColor: "#a666b0" }}
              ></div>
              <span className="legend-text">Above 90%</span>
            </div>
            <div className="legend">
              <div
                className="legend-circle"
                style={{ backgroundColor: "#02b38d" }}
              ></div>
              <span className="legend-text">Below 60%</span>
            </div>
            <div className="legend">
              <div
                className="legend-circle"
                style={{ backgroundColor: "#4dd5ff" }}
              ></div>
              <span className="legend-text">No prob</span>
            </div>
          </div>
        </div>
        <hr className="header-line-bottom"></hr>
        <div className="row footer">
          <div className="col-md-2"></div>
          <div className="col-md-4 contact-us">
            <div className="contact">Contact @</div>
            <div className="email">
              <span className="email-address">
                OceanProductsDataAnalytics@maersk.com
              </span>
            </div>
          </div>
          <div className="col-md-3 CX-button">
            <Link to="/CxPerformance">
              <button className="button-cx vp_button">
                CX Performance Dashboard
              </button>
            </Link>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
