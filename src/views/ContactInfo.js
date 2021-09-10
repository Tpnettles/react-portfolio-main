import React from "react";

function ContactInfo() {
  return (
    <div class="card" style={{width: "28rem", marginLeft:"475px", marginTop: "200px"}}>
      <div class="card-body">
        <h5 class="card-title">Tyree P. Nettles</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          Full-Stack Software Engineer
        </h6>
        <p class="card-text">
          “Built to capture the marketplace by integrating knowledge, creativity
          and usability with unique customs”.
        </p>
        <p>Phone:(773) 699-8348</p>
        <p>E-mail: Nettles.code@gmail.com</p>
        <a href="https://github.com/tpnettles" id="link">
          Click to access Github
        </a>
        <a href="https://www.linkedin.com/in/tyree-nettles-4b6659197/">
          Click to access LinkedIn
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
