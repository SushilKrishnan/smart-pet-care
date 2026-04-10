import { useState } from "react";

function Status() {
  const [visitId, setVisitId] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [status, setStatus] = useState("");

  const handleUpdate = async () => {
    const res = await fetch("http://localhost:5000/update-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ visitId, ownerId, status }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="container">
        <h2>Update Status</h2>

        <label>Visit ID</label>
        <input onChange={(e)=>setVisitId(e.target.value)} />

        <label>Owner ID</label>
        <input onChange={(e)=>setOwnerId(e.target.value)} />

        <label>Status</label>
        <select onChange={(e)=>setStatus(e.target.value)}>
            <option value="">Select</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
        </select>

        <button onClick={handleUpdate}>Update Status</button>
    </div>
  );
}

export default Status;