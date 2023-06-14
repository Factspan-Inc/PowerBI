import React, { useEffect, useState, useRef } from 'react';
import ChartVpLeads from '../Chart/ChartVpLeads';
import "./Vpleads.css";
import * as Papa from 'papaparse';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useNavigate } from 'react-router-dom'; 

const Vpleads = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [rangeValues, setRangeValues] = useState([-90, -1]);
  const navigate  = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Data/VpLeads.csv', {
          headers: {
            Accept: 'text/csv',
          },
        });
        const csvData = await response.text();
        const parsedData = Papa.parse(csvData);
        const csvHeaders = parsedData.data[0];
        const slicedData = parsedData.data.slice(1);
        console.log('slicedData', slicedData);
        setData(slicedData);
        setHeaders(csvHeaders);
      } catch (error) {
        console.error('Error reading CSV file:', error);
      }
    };

    fetchData();
  }, []);
  const countryOptions = [
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "UK", label: "UK" },
    { value: "Germany", label: "Germany" },
    // Add more options here
  ];

  const handleRangeChange = (values) => {
    setRangeValues(values);
    // Perform any actions or logic based on the selected range values
    console.log('Selected range values:', values);
    // Add your custom code here
  };
  const customHeaders = [
    'Surgery Date',
    'Department',
    'Scheduled Surgeries',
    'Scheduled staffs',
    'Surgery count',
    'Flu season',
    'Holiday',
  ];
  const handleCellClick = (cellValue) => {
    // Perform any actions or logic based on the clicked cell value
    console.log('Clicked cell value:', cellValue);
    localStorage.setItem("booking-number",cellValue);
    
    navigate(`/bookingnumber-feedback/${cellValue}`);
    // Add your custom code here
  };
  
  const [selectedCountry, setSelectedCountry] = useState("");
  const vpLeadsData = [10, 10, 10, 10, 5, 5]; 
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div className="vpleads-main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="filter-heading">Booking Date Range</div>
            <div className="range-selector">
      <div className="slider-wrapper">
      <span className='range_value-left'>{rangeValues[0]}</span>
        <Slider
          min={-90}
          max={-1}
          step={1}
          range
          defaultValue={rangeValues}
          onChange={handleRangeChange}
          className="custom-slider"
        />
        <div className="slider-values">
         
          <span className='range_value-right'>{rangeValues[1]}</span>
        </div>
      </div>
    </div>
              
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
                    <div className="chart-containers col-md-6">
              <ChartVpLeads chartData={vpLeadsData} />
              </div>
              <div className="col-md-4 legend-main">
              <div className="legend">
      <div className="legend-circle" style={{ backgroundColor: '#717BC5' }}></div>
      <span className="legend-text">60-70%</span>
    </div>
    <div className="legend">
      <div className="legend-circle" style={{ backgroundColor: '#F0E199' }}></div>
      <span className="legend-text">70-80%</span>
    </div>
    <div className="legend">
      <div className="legend-circle" style={{ backgroundColor: '#F0A787' }}></div>
      <span className="legend-text">80-90%</span>
    </div>
    <div className="legend">
      <div className="legend-circle" style={{ backgroundColor: '#A666B0' }}></div>
      <span className="legend-text">Above 90%</span>
    </div>
    <div className="legend">
      <div className="legend-circle" style={{ backgroundColor: '#EC8FCA' }}></div>
      <span className="legend-text">Below 60%</span>
    </div>
    <div className="legend">
      <div className="legend-circle" style={{ backgroundColor: '#4DD5FF' }}></div>
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
            <div>
            <div className="col-md-12 table-name" style={{ maxHeight: '300px', overflowY: 'auto' }}>
  <table className="table">
    <thead className="table-header">
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody className="table-body">
    {data.map((row, index) => (
      <tr key={index}>
        <td className="clickable-cell" onClick={() => handleCellClick(row[0])}>{row[0]}</td>
        {row.slice(1).map((value, colIndex) => (
          <td key={colIndex}>{value}</td>
        ))}
      </tr>
    ))}
  </tbody>
  </table>
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
            {/* <div className="booking-feedback-button">Booking Feedback</div> */}
            <div className="note">
  <span>Note:</span> Please click on booking number and give feedback back for the same.
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vpleads;
