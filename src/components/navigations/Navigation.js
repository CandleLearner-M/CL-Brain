import React from "react";

function Navigation({onRouteChange}) {
  return (
    <nav className="flex justify-end ">
      <p className="f4 link dim underline pa2 pointer" onClick={() => onRouteChange('signin')}>Sign Out</p>
    </nav>
  );
}

export default Navigation;
