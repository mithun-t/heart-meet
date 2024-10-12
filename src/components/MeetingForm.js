// src/MeetingForm.js
import React, { useState } from "react";

const MeetingForm = ({ addMeeting }) => {
  const [meeting, setMeeting] = useState({
    date: "",
    location: "",
    activities: "",
    notes: "",
  });

  const handleChange = (e) => {
    setMeeting({ ...meeting, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMeeting(meeting);
    setMeeting({ date: "", location: "", activities: "", notes: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={meeting.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={meeting.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Activities:</label>
        <input
          type="text"
          name="activities"
          value={meeting.activities}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Notes:</label>
        <textarea name="notes" value={meeting.notes} onChange={handleChange} />
      </div>
      <button type="submit">Add Meeting</button>
    </form>
  );
};

export default MeetingForm;
