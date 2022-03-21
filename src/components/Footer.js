import React from "react";
import "./Footer.css";
import { AiOutlineYoutube, AiOutlineInstagram ,AiFillLinkedin} from 'react-icons/fa';
import { BsFacebook,BsLinkedin,BsInstagram,BsYoutube} from "react-icons/bs";

const Footer = () => {
  return (
    <div class="site-footer">
      <div class="container">
        <div class="row1">
          <div class="col-sm-12 col-md-6">
          <img src="/img/vector.png" alt="logo" className="footerlogo"/>
            <h6>About</h6>
            <p class="text-justify">codechef.com <i>CODE WANTS TO BE SIMPLE </i> CodeChef-SNIST is a non-commercial organisation with a goal to provide a platform for programmers and developers everywhere to meet, compete & have fun. At CodeChef-SNIST, we believe in the words of Matt Mullenweg - “Technology is best when it brings people together”.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
        
      </div>
      <div class="container">
        <div class="row1">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="#">codechefsnist.com</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><BsFacebook/></a></li>
              <li><a class="twitter" href="#"><BsInstagram/></a></li>
              <li><a class="dribbble" href="#"><BsYoutube/></a></li>
              <li><a class="linkedin" href="#"><BsLinkedin/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</div>
  );
};

export default Footer;
