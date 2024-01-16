import React from "react";

function Navigation({ onRouteChange, isSignedIn }) {
  return (
    <nav className="flex justify-end ">
      {isSignedIn ? (
        <p
          className="f4 link dim underline pa2 pointer"
          onClick={() => onRouteChange("signin")}
        >
          Sign Out
        </p>
      ) : (
        <>
          <p
            className="f4 link dim underline pa2 pointer"
            onClick={() => onRouteChange("signin")}
          >
            Sign In
          </p>

          <p
            className="f4 link dim underline pa2 pointer"
            onClick={() => onRouteChange("register")}
          >
            Register
          </p>
        </>
      )}
    </nav>
  );
}

export default Navigation;
