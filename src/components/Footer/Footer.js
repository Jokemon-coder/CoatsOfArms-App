import React from "react";
import "./Footer.css";
function Footer() {
    //Footer with copyright and the current year, so it updates yearly
    let current = new Date();
    let year = current.getFullYear();

    return(
        <div>
            <p>&#xA9; {year} Joel Mantere</p>
        </div>
    )
}

export default Footer;