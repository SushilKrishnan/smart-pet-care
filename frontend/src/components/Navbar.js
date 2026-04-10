import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: 15, background: "#c2f07e", color: "black" }}>
      <Link to="/" style={{ color: "black", marginRight: 15 }}>Create</Link>
      <Link to="/search" style={{ color: "black", marginRight: 15 }}>Search</Link>
      <Link to="/update" style={{ color: "black", marginRight: 15 }}>Update</Link>
      <Link to="/status" style={{ color: "black", marginRight: 15 }}>Status</Link>
      <Link to="/all" style={{ color: "black" }}>All Records</Link>
    </div>
  );
}

export default Navbar;