const footerHTML = `<footer class="section-footer">
          <div class="footer-container container">
            <div class="content_1">
              <img src="public/images/logoo.png" alt="">
              <p>Welcome to MyStore ECommStore, your ultimate destination for cutting-edge gadgets!</p>
              <img src="public/images/PaymentOptions.png" alt="Payment Options" class="Payament">
            </div>
            <div class="content_2">
              <h4>SHOPPING</h4>
              <a href="">Computer Store</a>
              <a href="">Laptop Store</a>
              <a href="#">Accessories</a>
              <a href="#">Sales & Discount</a>
            </div>

            <div class="content_3">
              <h4>Experience</h4>
              <a href="#">Contact Us</a>
              <a href="#" target="_blank">Payment Method</a>
              <a href="#" target="_blank">Delivery</a>
              <a href="#" target="_blank">Return and Exchange</a>
            </div>

            <div class="content_4">
              <h4>NEWSLETTER</h4>
              <P>Be the first to know about <br/>arrivals,sales & promos!</P>
              <div class="f-email">
                <input type="email" placeholder="Enter email"/>
                <i class="bx bx-envelope"></i>
              </div>
              <hr/>
            </div>
          </div>

          <div class="f-design">
            <div class="f-design-txt">
              <p>Design and Code by Chandrakant Gaikwad</p>
            </div>
          </div>
        </footer>`

        const footerElem = document.querySelector(".section-footer");
        footerElem.insertAdjacentHTML("afterbegin", footerHTML);