import { Component } from "react";
import { FaBlog } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import { NavLink, withRouter } from "react-router-dom";
import "../styles/footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="inner-footer">
          <div className="footer-items">
            <h1>Roles</h1>
            <p>임경섭,장수민,김면수,유병국</p>
          </div>
          <div className="footer-items">
            <h2>Quick Links</h2>
            <div className="border"></div>
            <ul>
              <NavLink to="">
                <li>Home</li>
              </NavLink>
              <NavLink to="/recruit">
                <li>Recruit</li>
              </NavLink>
              <NavLink to="/apply">
                <li>Apply</li>
              </NavLink>
              <NavLink to="/createTeam">
                <li>Create Team</li>
              </NavLink>
              <NavLink to="/profile">
                <li>Profile</li>
              </NavLink>
            </ul>
          </div>
          <div className="footer-items">
            <h2>Constact Us</h2>
            <div className="border"></div>
            <ul>
              <a>
                <li>임경섭</li>
                <div className="social-media">
                  <a href="https://velog.io/@ranisol">
                    <li>
                      <FaBlog />
                    </li>
                  </a>
                </div>
              </a>
              <a>
                <li>장수민</li>
                <div className="social-media">
                  <a href="https://smss.netlify.app/">
                    <li>
                      <SiNetlify />
                    </li>
                  </a>
                </div>
              </a>
              <a>
                <li>김면수</li>
                <div className="social-media">
                  <a href="https://velog.io/@conape">
                    <li>
                      <FaBlog />
                    </li>
                  </a>
                </div>
              </a>
              <a>
                <li>유병국</li>
                <div className="social-media">
                  <a href="https://velog.io/@godkor200">
                    <li>
                      <FaBlog />
                    </li>
                  </a>
                </div>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright &copy; Heungshinso 2020. All rights reserved.
        </div>
      </div>
    );
  }
}
export default Footer;
