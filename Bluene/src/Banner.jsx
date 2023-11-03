import React from 'react'

function Banner() {
  return (
    <div>
      <section class="banner_main">
        <div class="container-fluid">
          <div class="row d_flex">
            <div class="col-md-7">
              <div class="text-bg">
                <div class="padding_lert">
                  <i>
                    <img src="images/btn.png" alt="#" />
                  </i>
                  <h1>A Digital Creative Agency Landing Page</h1>
                  <a href="Javascript:void(0)">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-md-5 bah">
              <div class="bann_img">
                <figure>
                  <img
                    src="images/bann_img.png"
                    alt="#"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner