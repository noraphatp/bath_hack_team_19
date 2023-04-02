import { Link } from "react-router-dom";
import Navbar from './Navbar';
import styles from '../css/findjobs.module.css';
import React, { useState, useEffect } from 'react';

function FindJobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isReading, setIsReading] = useState(false);
  const [speech, setSpeech] = useState(null);

  useEffect(() => {
    // Replace this with an API call to fetch jobs data
    const mockJobsData = [
      { id: 1, title: 'Software Engineer', location: 'Bristol', companyName: 'Gooble', description: 'Working at Gooble as a software engineer', accessibility: 'Fully Accessible'},
      { id: 2, title: 'Product Manager', location: 'Bath', companyName: 'Notcraft', description: 'Working at Notcraft as a product manager', accessibility: 'Fully Accessible' },
      { id: 3, title: 'Game Dev', location: 'Trowbridge', companyName: 'Tony' , description: 'Working at Tony as a game dev', accessibility: 'Not Wheelchair Accessible' },
      { id: 4, title: 'Data Analyst', location: 'Bath', companyName: 'Tesko', description: 'Working at Tesko as a data analyst', accessibility: 'Fully Accessible' },
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
  
  // Define a function to read the text below Job Listings out loud
  const readJobListings = () => {
    const jobListings = document.querySelector('.job-listings');
    if (isReading) {
      setIsReading(false);
      if (speech) {
        speechSynthesis.cancel(speech);
        setSpeech(null);
      }
    } else {
      setIsReading(true);
      const speech = new SpeechSynthesisUtterance(jobListings.textContent);
      speech.rate = 0.5;
      setSpeech(speech);
      speechSynthesis.speak(speech);
    }
  }
  
  return (
    <div>
      <Navbar />
      <div className={styles.contentContainer}>
        <h1>Find Jobs</h1>
        <input
          type="text"
          placeholder="Search jobs by title"
          value={searchQuery}
          onChange={handleSearch}
        />

        <h2>Job Listings</h2>
        <button onClick={readJobListings}>{isReading ? 'Stop Reading' : 'Read Job Listings'}</button>
        <ul className="job-listings">
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
    </div>
  );
}
  
export default FindJobs;
