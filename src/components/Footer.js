//import React, { Component } from "react";

//import React, { Component } from "react";

import React from "react";

var style = {
 backgroundColor: "#F8F8F8",
 borderTop: "1px solid #E7E7E7",
 textAlign: "center",
 padding: "20px",
 position: "fixed",
 left: "0",
 bottom: "0",
 height: "60px",
 width: "100%",
 fontsize: "55%"
};

var phantom = {
 display: "block",
 padding: "20px",
 height: "10px",
 width: "100%",
 fontsize: "55px"
};

//class Footer extends Component {

function Footer({ children }) {
 return (
   <div>
     <div style={phantom} />
     <div style={style}>
       {children}
       <h3>
         GitHubUserFinder Oscar Buenavidez Jr. All Rights Reserved CDK 2019
       </h3>
     </div>
   </div>
 );
}

export default Footer;
