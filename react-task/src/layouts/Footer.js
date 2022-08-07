import React from 'react'

function Footer() {
  return (
    <>
    <div>
    <footer class="footer_area section_padding_130_0">
      <div class="container">
        <div class="row">
          {/* <!-- Single Widget--> */}
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="single-footer-widget section_padding_0_130">
              {/* <!-- Footer Logo--> */}
              <div class="footer-logo mb-3"></div>
             
              {/* <!-- Copywrite Text--> */}
              <div class="copywrite-text mb-5">
                <p class="mb-0">Follow Us on <i class="lni-heart mr-1"></i></p>
              </div>
              {/* <!-- Footer Social Area--> */}
              <div class="footer_social_area"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i class="fa-brands fa-instagram"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype"><i class="fa-brands fa-youtube"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></div>
            </div>
          </div>
          {/* <!-- Single Widget--> */}
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              {/* <!-- Widget Title--> */}
              <h5 class="widget-title">About</h5>
              {/* <!-- Footer Menu--> */}
              <div class="footer_menu">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Corporate Sale</a></li>
                  <li><a href="#">Terms &amp; Policy</a></li>
                  <li><a href="#">Community</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Single Widget--> */}
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              {/* <!-- Widget Title--> */}
              <h5 class="widget-title">Support</h5>
              {/* <!-- Footer Menu--> */}
              <div class="footer_menu">
                <ul>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Term &amp; Conditions</a></li>
                  <li><a href="#">Help &amp; Support</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Single Widget--> */}
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              {/* <!-- Widget Title--> */}
              <h5 class="widget-title">Contact</h5>
              {/* <!-- Footer Menu--> */}
              <div class="footer_menu">
                <ul>
                  <li><a href="#">Call Centre</a></li>
                  <li><a href="#">Email Us</a></li>
                  <li><a href="#">Term &amp; Conditions</a></li>
                  <li><a href="#">Help Center</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    </div>
    </>
  )
}

export default Footer