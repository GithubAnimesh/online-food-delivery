const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center text-white bg-black mx-10 px-2 py-6">
      <div className="footer-top text-center mb-4">
        <div className="contact mb-4">
          <p>Contact Us</p>
          <p>Phone: +123-456-7890</p>
          <p>Email: support@yourfoodapp.com</p>
          <p>Address: 123 Main Street, City, State, ZIP</p>
        </div>
        <div className="social-media flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; 2023 Your Food App. All Rights Reserved.</p>
        <p>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>{" "}
          |
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
