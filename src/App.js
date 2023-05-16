import { useState } from "react";
import "./App.css";
import avatar from "./images/avatar-michelle.jpg";
import share_icon from "./images/icon-share.svg";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="image_container"></div>

      <div className="container">
        <div className="text_container">
          <h4 className="title">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h4>
          <p className="info">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>

        <div className="social_share">
          <div className="social">
            <div className="social_info">
              <img src={avatar} alt="" className="avatar" />
              <p>
                <span>Michelle Appleton</span>28 Jun 2020
              </p>
            </div>
            <img
              src={share_icon}
              onClick={() => setOpen(!open)}
              alt="Share"
              className="share_icon"
            />
          </div>

          <div className={`share ${open ? "" : "hidden"}`}>
            <div className="social_info">
              <p>Share</p>
              <img
                srcSet={require("./images/icon-facebook.svg").default}
                alt="facebook"
              />
              <img
                srcSet={require("./images/icon-twitter.svg").default}
                alt="twitter"
              />
              <img
                srcSet={require("./images/icon-pinterest.svg").default}
                alt="pinterest"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
