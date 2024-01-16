import React from "react";

function Navigation({ onRouteChange, isSignedIn }) {
  return isSignedIn ? (
    <nav className="flex justify-end ">
      <p
        className="f4 link dim underline pa2 pointer"
        onClick={() => onRouteChange("signin")}
      >
        Sign Out
      </p>
    </nav>
  ) : (
    <nav className="flex justify-end ">
      <p
        className="f4 link dim underline pa2 pointer"
        onClick={() => onRouteChange("signin")}
      >
        Sign In
      </p>

      <p
        className="f4 link dim underline pa2 pointer"
        onClick={() => onRouteChange("signin")}
      >
        Sign In
      </p>
    </nav>
  );
}

export default Navigation;
