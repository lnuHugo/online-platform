import "./Footer.css"

function Footer({}) {
  
    return (
        <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h4>Contact Us</h4>
            <p>Address: 123 Example Street, Sample City</p>
            <p>Phone: (012) 345-6789</p>
            <p>Email: info@example.com</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="./">About Us</a></li>
              <li><a href="./">Services</a></li>
              <li><a href="./">Contact</a></li>
              <li><a href="./">Privacy Policy</a></li>
              <li><a href="./">Terms of Service</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Follow Us</h4>
            <ul class="social-media">
              <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
              <li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
              <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Newsletter</h4>
            <form>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Course Platform. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  