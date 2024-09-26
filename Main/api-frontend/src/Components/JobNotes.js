import React, { useState } from 'react';

const JobNotes = () => {
  const [jobNotes, setJobNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the data to your backend API
    console.log('Submitting job notes:', jobNotes);
    // Reset the form after submission
    setJobNotes('');
  };

  return (
    <div className="job-notes">
      <h2>Job Notes</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="job-notes">Enter Job Notes:</label>
        <textarea
          id="job-notes"
          value={jobNotes}
          onChange={(e) => setJobNotes(e.target.value)}
          rows="5"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobNotes;
