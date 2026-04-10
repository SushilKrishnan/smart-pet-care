import { useState } from "react";

function Create() {
  const [data, setData] = useState({
    visitId: "",
    ownerId: "",
    petName: "",
    service: "",
    visitTime: "",
    status: "pending"
  });

  const handleCreate = async () => {
    const res = await fetch("http://localhost:5000/create-record", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    alert(result.message);
  };

  return (
    <div className="container">
        <h2>Create Visit</h2>

        <label>Visit ID</label>
        <input onChange={(e)=>setData({...data, visitId:e.target.value})} />

        <label>Owner ID</label>
        <input onChange={(e)=>setData({...data, ownerId:e.target.value})} />

        <label>Pet Name</label>
        <input onChange={(e)=>setData({...data, petName:e.target.value})} />

        <label>Service</label>
        <input onChange={(e)=>setData({...data, service:e.target.value})} />

        <label>Visit Time</label>
        <input onChange={(e)=>setData({...data, visitTime:e.target.value})} />

        <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default Create;