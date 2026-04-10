import { useEffect, useState } from "react";

function AllRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-records")
      .then(res => res.json())
      .then(data => setRecords(data));
  }, []);

  return (
    <div className="container">
      <h2>All Records</h2>

      {records.map((r, i) => (
        <div key={i} style={{borderBottom: "1px solid #ccc", marginBottom: 10}}>
          <p><b>Visit:</b> {r.visitId}</p>
          <p><b>Owner:</b> {r.ownerId}</p>
          <p><b>Pet:</b> {r.petName}</p>
          <p><b>Service:</b> {r.service}</p>
          <p><b>Time:</b> {r.visitTime}</p>
          <p><b>Status:</b> {r.status}</p>
        </div>
      ))}
    </div>
  );
}

export default AllRecords;