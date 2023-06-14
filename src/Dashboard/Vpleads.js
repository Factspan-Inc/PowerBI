import React, { useState } from "react";
import Chart from '../Chart/Chart';
import "./Vpleads.css";

const Vpleads = () => {
  const countryOptions = [
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "UK", label: "UK" },
    { value: "Germany", label: "Germany" },
    // Add more options here
  ];
  const [selectedCountry, setSelectedCountry] = useState("");
  const vpLeadsData = [7, 2, 15, 1, 90, 10]; 
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div className="vpleads-main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="filter-heading">Booking Date Range</div>
            <div>Hi</div>
            <div>Hi</div>
            <div className="filter-heading">Destination Country</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Destination Location</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Sales Group Export</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Origin Country</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Contract MSL Account Owner</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">CBP Name Export</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">CX User Action VP</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Consignee Name</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Price Owner Name</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Contractual Customer</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-8">
            <div className="value-report-button">Value Protect</div>
            <div className="row">
                <div className="col-md-7">
                    <div className="chart-lead-bucket">Lead Probability Bucket</div>
                   <div className="row value-chart">
                    <div className="chart-container col-md-6">
              <Chart chartData={vpLeadsData} />
              </div>
              <div className="col-md-4 legend-main">
              <div className="legend">
      <div className="legend-circle" style={{ backgroundColor: '#efb5b9' }}></div>
      <span className="legend-text">60-70%</span>
    </div>
    <div className="legend">
      <div className="legend-circle" style={{ backgroundColor: '#e8d166' }}></div>
      <span className="legend-text">70-80%</span>
    </div>
    <div className="legend">
      <div className="legend-circle" style={{ backgroundColor: '#eb895f' }}></div>
      <span className="legend-text">80-90%</span>
    </div>
    <div className="legend">
      <div className="legend-circle" style={{ backgroundColor: '#a666b0' }}></div>
      <span className="legend-text">Above 90%</span>
    </div>
    <div className="legend">
      <div className="legend-circle" style={{ backgroundColor: '#02b38d' }}></div>
      <span className="legend-text">Below 60%</span>
    </div>
    <div className="legend">
      <div className="legend-circle" style={{ backgroundColor: '#4dd5ff' }}></div>
      <span className="legend-text">No prob</span>
    </div>
              </div>
              </div>
                </div>
                <div className="col-md-4">
                    <div className="value-button">2M <span className="text-booked">Booked FFEs</span></div>
                    <div className="value-button">1M <span className="text-booked">Total Booking #</span></div>
                </div>
                
            </div>
          </div>
          <div className="col-md-2">
            <div>Hi</div>
            <div className="filter-heading">Delivery Agreement Type</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Container Type RKEM</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Contractual Customer Vertical</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Is Reefer?</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Is Reefer?</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Parent Commodity</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Shipper</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="filter-heading">Find Booking Number</div>
            <select
              className="dropdown"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="booking-feedback-button">Booking Feedback</div>
            <div className="note">
  <span>Note:</span> Please select booking number and click on "Check opportunity details" button for more information
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vpleads;
