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
      { id: 1, title: 'Software Engineer', location: 'Bristol', companyName: 'Gooble', description: 'Working at Gooble as a software engineer', accessibility: 'Fully Accessible'},
      { id: 2, title: 'Product Manager', location: 'Bath', companyName: 'Notcraft', description: 'Working at Notcraft as a product manager', accessibility: 'Fully Accessible' },
      { id: 3, title: 'Game Dev', location: 'Trowbridge', companyName: 'Tony' , description: 'Working at Tony as a game dev', accessibility: 'Not Wheelchair Accessible' },
      { id: 4, title: 'Data Analyst', location: 'Bath', companyName: 'Tesko', description: 'Working at Tesko as a data analyst', accessibility: 'Fully Accessible' },
      { id: 5, title: 'Teacher', location: 'Bath', companyName: 'School of Teaching', description: 'Working at SoT as a Teacher', accessibility: 'Fully Accessible'},
      { id: 6, title: 'Marketing Specialist', location: 'Bristol', companyName: 'PixelCorp', description: 'Managing marketing campaigns for PixelCorp clients', accessibility: 'Fully Accessible'},
      { id: 7, title: 'Web Developer', location: 'Chippenham', companyName: 'WebWizards', description: 'Developing and maintaining client websites at WebWizards', accessibility: 'Partially Accessible'},
      { id: 8, title: 'Data Analyst', location: 'Trowbridge', companyName: 'DataSolutions', description: 'Analyzing data and providing insights for DataSolutions clients', accessibility: 'Fully Accessible'},
      { id: 9, title: 'Graphic Designer', location: 'Frome', companyName: 'DesignHub', description: 'Creating visual concepts for DesignHub clients', accessibility: 'Fully Accessible'},
      { id: 10, title: 'Project Manager', location: 'Weston-super-Mare', companyName: 'ManageIt', description: 'Leading projects and ensuring timely delivery at ManageIt', accessibility: 'Partially Accessible'},
      { id: 11, title: 'HR Specialist', location: 'Radstock', companyName: 'PeopleFirst', description: 'Managing HR processes and employee relations at PeopleFirst', accessibility: 'Fully Accessible'},
      // Add more job data here...
    ];

    setJobs(mockJobsData);
  }, []);

  const filterJobs = (query) => {
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.companyName.toLowerCase().includes(query.toLowerCase()) ||
      job.location.toLowerCase().includes(query.toLowerCase())
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
          <p>{job.accessibility}</p>
          <p>{job.companyName}</p>

        </li>
      ))}
    </ul>
  </div>
  );
      }
  

export default FindJobs;
