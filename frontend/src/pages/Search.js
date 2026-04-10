import { useState } from "react";

function Search() {
  const [visitId, setVisitId] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [record, setRecord] = useState(null);

  const handleSearch = async () => {
    const res = await fetch("http://localhost:5000/search-record", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visitId, ownerId }),
    });

    const data = await res.json();
    if (data.success) setRecord(data.data);
    else alert(data.message);
  };

  return (
    <div className="container">
        <h2>Search Record</h2>

        <label>Visit ID</label>
        <input onChange={(e)=>setVisitId(e.target.value)} />

        <label>Owner ID</label>
        <input onChange={(e)=>setOwnerId(e.target.value)} />

        <button onClick={handleSearch}>Search</button>

        {record && (
            <div>
            <h3>Details</h3>
            <p><b>Pet:</b> {record.petName}</p>
            <p><b>Service:</b> {record.service}</p>
            <p><b>Time:</b> {record.visitTime}</p>
            <p><b>Status:</b> {record.status}</p>
            </div>
        )}
    </div>
  );
}

export default Search;