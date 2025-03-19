import React from "react";

const Navbar: React.FC = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl rounded-lg">Image Gallery preview</a>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
    </div>
  </div>
</div>
    );
  };
  
  export default Navbar;