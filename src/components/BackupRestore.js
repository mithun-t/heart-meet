// src/BackupRestore.js
import React from "react";

const BackupRestore = ({ meetings, setMeetings }) => {
  // Backup meetings as JSON
  const handleBackup = () => {
    const dataStr = JSON.stringify(meetings, null, 2); // Pretty formatting the JSON data
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = window.URL.createObjectURL(dataBlob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "meeting_backup.json";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Restore meetings from JSON file
  const handleRestore = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const restoredData = JSON.parse(event.target.result);
      setMeetings(restoredData);
      localStorage.setItem("meetings", JSON.stringify(restoredData));
    };
    fileReader.readAsText(e.target.files[0]);
  };

  return (
    <div>
      <button onClick={handleBackup}>Backup Data</button>
      <input type="file" onChange={handleRestore} accept=".json" />
    </div>
  );
};

export default BackupRestore;
