import { useState } from "react";

function Update() {
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

  const handleUpdate = async () => {
    const res = await fetch("http://localhost:5000/update-record", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        visitId,
        ownerId,
        visitTime: record.visitTime,
        service: record.service
      }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="container">
        <h2>Update Record</h2>

        <label>Visit ID</label>
        <input onChange={(e)=>setVisitId(e.target.value)} />

        <label>Owner ID</label>
        <input onChange={(e)=>setOwnerId(e.target.value)} />

        <button onClick={handleSearch}>Load Record</button>

        {record && (
            <>
            <p>Status: {record.status}</p>

            <label>Visit Time</label>
            <input
                value={record.visitTime}
                onChange={(e)=>setRecord({...record, visitTime:e.target.value})}
            />

            <label>Service</label>
            <input
                value={record.service}
                onChange={(e)=>setRecord({...record, service:e.target.value})}
            />

            <button onClick={handleUpdate}>Update</button>
            </>
        )}
    </div>
  );
}

export default Update;