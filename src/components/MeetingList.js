// src/MeetingList.js
import React, { useEffect, useState } from "react";
import MeetingForm from "./MeetingForm";
import BackupRestore from "./BackupRestore";

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const savedMeetings = JSON.parse(localStorage.getItem("meetings"));
    if (savedMeetings) {
      setMeetings(savedMeetings);
    }
  }, []);

  const addMeeting = (newMeeting) => {
    const updatedMeetings = [...meetings, newMeeting];
    setMeetings(updatedMeetings);
    localStorage.setItem("meetings", JSON.stringify(updatedMeetings));
  };

  const deleteMeeting = (index) => {
    const updatedMeetings = meetings.filter((_, i) => i !== index);
    setMeetings(updatedMeetings);
    localStorage.setItem("meetings", JSON.stringify(updatedMeetings));
  };

  return (
    <div>
      <h2>Meeting Details</h2>
      <MeetingForm addMeeting={addMeeting} />
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index}>
            <strong>Date:</strong> {meeting.date} <br />
            <strong>Location:</strong> {meeting.location} <br />
            <strong>Activities:</strong> {meeting.activities} <br />
            <strong>Notes:</strong> {meeting.notes} <br />
            <button onClick={() => deleteMeeting(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <BackupRestore meetings={meetings} setMeetings={setMeetings} />
    </div>
  );
};

export default MeetingList;
