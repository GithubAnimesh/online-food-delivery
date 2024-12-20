const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="contact">
          <p>Contact Us</p>
          <p>Phone: +123-456-7890</p>
          <p>Email: support@yourfoodapp.com</p>
          <p>Address: 123 Main Street, City, State, ZIP</p>
        </div>
        <div className="social-media">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Food App. All Rights Reserved.</p>
        <p>
          <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
