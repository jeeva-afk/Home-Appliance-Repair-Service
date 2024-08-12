import { Link } from "react-router-dom";
import "../footer/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <img src="https://static.theprint.in/wp-content/uploads/2022/10/ANI-20221021045819.jpg"></img>
        <ul className="fList">
          <br></br>
          <li className="fListItem">Electricians</li>
          <li className="fListItem">TV Mounting</li>
          <li className="fListItem">Fan Installation</li>
          <li className="fListItem">Switch Repair</li>
          <li className="fListItem">Car Service</li>
         
        </ul>
        <ul className="fList">
          <br></br>
          <h1 className="fListItem">Contact us</h1><br></br>
          <li className="fListItem">+91 9345689346</li>
          <li className="fListItem">PatchWork@gmail.com</li>
          <li className="fListItem">For more information<b></b>Vist our app</li>
        </ul>
       
        <ul className="fList">
          <br></br>
          
          <h2 className="fListItem">FAQs</h2>
      
         <Link to='/Privacy'> <li className="fListItem">Privacy Policy</li></Link>
         
          <li className="fListItem">Contact Information</li>
        
          <li className="fListItem">Terms & Conditions</li>
          <Link to='/payment'>    <li className="fListItem">Payment</li></Link>
     
        </ul>
      
        <ul className="fList socialIcons">
          <br></br>
        <h2 className="fListItem">Social Media</h2><br/><br/>
          <li className="fListItem">
            <a href="link-to-facebook">
              <FaFacebook /> 
            </a>
          </li>
          <li className="fListItem">
            <a href="https://twitter.com/hotelsdotcom">
              <FaTwitter />
            </a>
          </li>
          <li className="fListItem">
            <a href="link-to-instagram">
              <FaInstagram />
            </a>
          </li>
         
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Lamabooking.</div>
    </div>
  );
};

export default Footer;