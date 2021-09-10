import React from "react";
import logo from "../images/IMG-0221 (2).jpg";

function MainPage() {
  return (
    <div className="row">
      <div className="side">
        <img
          src={logo}
          id="profile_pic"
          alt="selfie"
        ></img>
      </div>
      <div className="row">
        <div className="main">
          <div>
            <h1>Tyree P. Nettles</h1>
            <p>~Coachable</p>
            <p>~Ambitiously seeks success</p>
            <p>~Detailed oriented/organized</p>
            <p>~Values the concept of integrity</p>
            <p>~A walking product of resiliency</p>
            <p>~Optimistic in stressful situations</p>
            <p>~Firm believer in hard-work/action</p>
            <p>~Values the concept of accountability</p>
            <p>~Leader by nature but willing to follow</p>
            <p>~Takes pride in being a helpful, team player</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="h2center">
          “Built to capture the marketplace by integrating knowledge, creativity
          and usability with unique customs”
        </h2>
      </div>

      <div id="bodyTags">
        <p>
          Hello world. I am pleased to introduce myself, to the technological
          world, as a full stack software engineer.
        </p>
        <p>
          Over the past 5 years, I have been intrigued by the ideas and concepts
          of ingenuity. The qualities of being clever, original, and inventive
          brought me into the world of engineering.
        </p>
        <p>
          I spent time at different jobs where I learned how to better myself in
          the realm of problem solving, critical thinking, stress management and
          many other soft skills.
        </p>
        <p>
          Knowing that the way of world required innovation, in regards to
          technology, I decided to enhance my marketability by learning what the
          world around us requiers, technology.
        </p>
        <p>
          Here I am now as your future web developer, prepared to take on future
          endeavors.
        </p>
        <p>
          Please feel free to navigate through my site and contact me for any
          advice, comments, questions, or concerns.
        </p>
        <p>I look forward to building with you!</p>
      </div>

      <div className="footer">
        <p> MIT License Copyright (c) 2021 Tpnettles</p>

        <p id="finePrint">
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions: The above copyright notice and this
          permission notice shall be included in all copies or substantial
          portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT
          WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
          THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
          AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
          HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
          IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
          IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
        </p>
      </div>
    </div>
  );
}

export default MainPage;
