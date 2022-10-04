import React from "react";
const Error=()=>{
    const ErrorStyle={
        textAlign:"center"
    }
    return(
        <div style={ErrorStyle}>
             <h1>404 Page Not Found</h1>
              <p>Sorry, This page does not exists   </p>
              {/*<NavLink to="/">Go to home page</NavLink>*/}
        </div>
    );
}
export default Error;