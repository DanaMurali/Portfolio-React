import "./topbar.scss";
import {FilterVintageOutlined,EmailOutlined} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Darania.
          </a>
          <div className="itemContainer">
            <FilterVintageOutlined className="icon" />
            <span>+44 7821 339817</span>
          </div>
          <div className="itemContainer">
            <EmailOutlined className="icon" />
            <span>mdarania@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
