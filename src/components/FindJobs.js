import { Link } from "react-router-dom";
import Navbar from './Navbar';
import styles from '../css/findjobs.module.css';
import React, { useState, useEffect } from 'react';

function FindJobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    // Replace this with an API call to fetch jobs data
    const mockJobsData = [
      { id: 1, title: 'Software Engineer', location: 'New York' },
      { id: 2, title: 'Product Manager', location: 'San Francisco' },
      { id: 3, title: 'Data Scientist', location: 'Boston' },
      // Add more job data here...
    ];

    setJobs(mockJobsData);
  }, []);

  const filterJobs = (query) => {
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };


  useEffect(() => {
    filterJobs(searchQuery);
  }, [jobs, searchQuery]);
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  
  return (
    <div>
      <Navbar />
      <h1>Find Jobs</h1>
      <input
        type="text"
        placeholder="Search jobs by title"
        value={searchQuery}
        onChange={handleSearch}
      />
  
  <h2>Job Listings</h2>
    <ul>
      {filteredJobs.map((job) => (
        <li key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.location}</p>
          <p>{job.description}</p>
        </li>
      ))}
    </ul>
  </div>
  );
      }
  

export default FindJobs;
