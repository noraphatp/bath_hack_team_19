import { Link } from "react-router-dom";
import Navbar from './Navbar';
import styles from '../css/findjobs.module.css';
import React, { useState, useEffect } from 'react';

function FindJobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

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

  useEffect(() => {
    setFilteredJobs(
      jobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, jobs]);

  return (
    <div className={styles.jobsPage}>
      <Navbar />
      <h1>Jobs</h1>
      <input
        type="text"
        placeholder="Search jobs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles.jobsList}>
        {filteredJobs.map((job) => (
          <div key={job.id} className={styles.jobItem}>
            <h2>{job.title}</h2>
            <p>{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindJobs;
