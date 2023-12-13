import './App.css';

function App() {
  return (
    <>
      <div>
        {/* <div className="as_loader">
          <img src="assets/images/loader.png" alt="" className="img-responsive" />
        </div> */}
        <div className="as_main_wrapper">
          <section className="as_header_wrapper">
            <div className="container">
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                  <div className="as_logo">
                    <a href="index.html">
                      <img src="assets/images/aq.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-8 col-xs-6">
                  <div className="as_right_info">
                    <div className="as_menu_wrapper">
                      <span className="as_toggle">
                        <img src="assets/images/svg/menu.svg" alt="" />
                      </span>
                      <div className="as_menu">
                        <ul>
                          <li><a href="index.html" >home</a></li>

                          <li><a href="#about">About Us</a>

                          </li>
                          <li><a href="#vision">Vision & Mission</a>

                          </li>
                          <li><a href="#ser">Services</a></li>
                          <li><a href="#special">Our Specials</a>

                          </li>
                          <li><a href="#con">contact</a></li>
                          <button className='btns' style={{marginRight:"10px"}}>Login</button>
                          <button className="btns">Register</button>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="as_banner_wrapper">
            <div className="container">
              <div className="row as_verticle_center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="as_banner_slider">
                    <div className="as_banner_detail">
                      <h5>Welcome to</h5>
                      <h1>Astro5*</h1>
                      <p>Its is upcoming platform to connect user with astrologers for their success</p>

                      <a href="appointments.html" className="as_btn">Learn more </a>
                    </div>
                    <div className="as_banner_detail">
                      <h5>Welcome to</h5>
                      <h1>Astro5*</h1>
                      <p>Best platform for astrologers to showcase their prediction skills and get more customers. </p>
                      <a href="javascript:;" className="as_btn">Learn more </a>
                    </div>
                    <div className="as_banner_detail">
                      <h5>Welcome to</h5>
                      <h1>Astro5*</h1>
                      <p>We are ready to serve you with the best prediction even if you don't have your birth time.</p>

                      <a href="javascript:;" className="as_btn">Learn more </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="as_banner_img text-center">
                    <img src="assets/images/hand_bg.png" alt="" className="img-responsive as_hand_bg" />
                    <img src="assets/images/hand.png" alt="" className="img-responsive as_hand" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="as_horoscope_wrapper as_padderBottom80 as_padderTop80">
            <div className="container">
              <div className="row">

                <div className="col-lg-4 col-sm-4 col-xs-6">
                  <div className="as_sign_box text-center">
                    <a href="">
                      <span className="as_sign">
                        <img src="assets/images/a1.png" alt="" />
                      </span>
                      <div>
                        <h5>Chat</h5>
                        <p>Chat with astrologers via app </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-6">
                  <div className="as_sign_box text-center">
                    <a href="">
                      <span className="as_sign">
                        <img src="assets/images/a2.png" alt="" />
                      </span>
                      <div>
                        <h5>Call</h5>
                        <p>Call to solve problems </p>

                      </div>
                    </a>
                  </div>
                </div >
                <div className="col-lg-4 col-sm-4 col-xs-6">
                  <div className="as_sign_box text-center">
                    <a href="">
                      <span className="as_sign">
                        <img src="assets/images/a3.png" alt="" />
                      </span>
                      <div>
                        <h5>Blog</h5>
                        <p>Daily horoscope and guidelines for success </p>

                      </div>
                    </a>
                  </div >
                </div >
              </div >
            </div >
          </section >
          <section id="about" className="as_service_wrapper as_padderTop80 as_padderBottom80">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 text-center">
                  <h1 className="as_heading">About Astro 5*</h1>
                  <span> <span>
                    <img src="assets/images/za.png" alt="" />
                  </span>
                  </span>
                  <p className="as_font14 as_padderTop20 as_padderBottom50"><br /></p>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="as_aboutimg text-right">
                    <img src="assets/images/about.jpg" alt="" className="img-responsive" />

                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="as_about_detail">
                    <div className="as_paragraph_wrapper">
                      <p className="as_margin0 as_font14 as_padderBottom10">Astro 5 star is one of the best astrology website where you can find renowned, trained, best qualified ,
                        experienced , handpicked astrologers to get your future prediction and to choose a better path to lead your life. You can approach astrologers easily through online for 24/7 with safe and secured data.
                      </p>
                      <p className="as_font14">We are ready to serve you with the best prediction even if you don't have your birth time.</p>
                    </div>


                    <h1 className="as_heading">Why Astro 5 star?</h1>
                    <div className="as_paragraph_wrapper">
                      <p className="as_margin0 as_font14 as_padderBottom10">To get your life's suggestion, choosing a Right Partner, Business related, Family related, Love life, Relationship, Childbirth, Career, Health and Wealth and to know what is destined for your life and the remedies to solve and Vastu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="vision" className="as_horoscope_wrapper as_padderBottom80 as_padderTop80">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h1 className="as_heading as_heading_center">Vision and Mission</h1>
                  <span> <span>
                    <img src="assets/images/za.png" alt="" />
                  </span>
                  </span>
                </div>
              </div>


              <div className="row as_verticle_center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                      <div className="as_service_box text-center">
                        <h4 className="as_subheading" style={{ fontSize: "28px", lineHeight: "44px" }}>Our  motive is to give spiritual knowledge to every individual and a commoner. People should get rid of all the misbelief on astrology and to get a deep knowledge on astrology scientifically.  </h4>
                      </div>
                    </div>




                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="as_service_img">
                    <img src="assets/images/service_img2.png" alt="" className="as_service_circle img-responsive" />
                    <img src="assets/images/service_img1.jpg" alt="" className="as_service_img img-responsive" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="ser" className="as_service_wrapper as_padderTop80 as_padderBottom80">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 text-center">
                  <h1 className="as_heading">We predict by</h1>
                  <span> <span>
                    <img src="assets/images/za.png" alt="" />
                  </span>
                  </span>
                  <p className="as_font14 as_padderTop20 as_padderBottom10"><br /></p>

                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div className="as_product_box">
                        <div className="as_product_img">
                          <img src="assets/images/zz1.jpg" alt="" className="img-responsive" />
                        </div>
                        <div className="as_product_detail">
                          <h3 >Vedic Astro</h3>

                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div className="as_product_box">
                        <div className="as_product_img">
                          <img src="assets/images/zz2.jpg" alt="" className="img-responsive" />
                        </div>
                        <div className="as_product_detail">
                          <h3 style={{ fontSize: "24px", color: "#000000" }}>Numerology </h3>

                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div className="as_product_box">
                        <div className="as_product_img">
                          <img src="assets/images/zz3.jpg" alt="" className="img-responsive" />

                        </div>
                        <div className="as_product_detail">
                          <h3 style={{ fontSize: "24px", color: "#000000" }}>Prasanna Astro</h3>

                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div className="as_product_box">
                        <div className="as_product_img">
                          <img src="assets/images/zz4.jpg" alt="" className="img-responsive" />

                        </div>
                        <div className="as_product_detail">
                          <h3 style={{ fontSize: "24px", color: "#000000" }} >Soli Prasannam</h3>

                        </div>
                      </div>
                    </div>


                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div className="as_product_box">
                        <div className="as_product_img">
                          <img src="assets/images/zz5.jpg" alt="" className="img-responsive" />

                        </div>
                        <div className="as_product_detail">
                          <h3 style={{ fontSize: "24px", color: "#000000" }}>Jaamakol Prasanam</h3>

                        </div>
                      </div>
                    </div>


                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div className="as_product_box">
                        <div className="as_product_img">
                          <img src="assets/images/zz6.jpg" alt="" className="img-responsive" />

                        </div>
                        <div className="as_product_detail">
                          <h3 style={{ fontSize: "24px", color: "#000000" }} >Nadi Astro</h3>
                        </div>
                      </div>
                    </div>


                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div className="as_product_box">
                        <div className="as_product_img">
                          <img src="assets/images/zz7.jpg" alt="" className="img-responsive" />

                        </div>
                        <div className="as_product_detail">
                          <h3 style={{ fontSize: "24px", color: "#000000" }} >Tarot Astro</h3>

                        </div>
                      </div>
                    </div>


                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                      <div className="as_product_box">
                        <div className="as_product_img">
                          <img src="assets/images/zz8.jpg" alt="" className="img-responsive" />

                        </div>
                        <div className="as_product_detail">
                          <h3 style={{ fontSize: "24px", color: "#000000" }} >KP  Astro</h3>

                        </div>
                      </div>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </section>



          <section id="special" className="as_horoscope_wrapper as_padderBottom80 as_padderTop80">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h1 className="as_heading as_heading_center">Special about Astro5Star </h1>
                  <span>
                    <img src="assets/images/za.png" alt="" />
                  </span>
                  <p className="as_font14 as_padderTop20 as_padderBottom20">We are working towards to give you best products and services.</p>
                </div>
              </div>


              <div className="row as_verticle_center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12">
                      <div className="as_service_box text-center">
                        <span className="as_icon">
                          <img src="assets/images/z1.png" alt="" />
                        </span>

                        <h2 className="as_subheading" style={{ fontSize: "24px" }}>Online Pooja Store </h2>
                        <p className="as_paddingBottom10" style={{ fontSize: "20px" }}>You can access globally to get spiritual related items in affordable price.<br />Astrology software available for both PC and mobile.</p>

                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <div className="as_service_box text-center">
                        <span className="as_icon">
                          <img src="assets/images/z2.png" alt="" />
                        </span>

                        <h2 className="as_subheading" style={{ fontSize: "24px" }}>Learn Astrology </h2>
                        <p className="as_paddingBottom10" style={{ fontSize: "20px" }}>     You can learn astrology through online.</p>

                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                      <div className="as_service_box text-center">
                        <span className="as_icon">
                          <img src="assets/images/z2.png" alt="" />
                        </span>

                        <h2 className="as_subheading" style={{ fontSize: "27px" }}>You can access for</h2>
                        <p className="as_paddingBottom10" style={{ fontSize: "22px" }}>    Rasi palan, Star palan, Graha transit palan, Dhasa buthi palan, To View your birth  chart, Spiritual, Astrological and remedy Tips, Details about spiritual function days.. </p>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section id="con" className="as_contact_wrapper as_padderBottom40 as_padderTop50">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h1 className="as_heading as_heading_center">get in touch with us!</h1>
                  <span> <span>
                    <img src="assets/images/za.png" alt="" />
                  </span>
                  </span>
                  <p className="as_font14 as_padderBottom50 as_padderTop20"></p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="as_contact_detail">
                    <ul>
                      <li className="as_info_box">
                        <span className="as_icon">
                          <img src="assets/images/aa.png" alt="" />
                        </span>
                        <p>Edappadi TN- 637101</p>
                      </li>
                      <li className="as_info_box">
                        <span className="as_icon">
                          <img src="assets/images/aa1.png" alt="" />
                        </span>
                        <p>+91 9080061700</p>
                      </li>
                      <li className="as_info_box">
                        <span className="as_icon">
                          <img src="assets/images/aa2.png" alt="" />
                        </span>
                        <p><a href="javascript:;">info@astro5star.com </a></p>
                      </li>
                    </ul>
                    <div className="as_map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.5236416174444!2d77.8369978098165!3d11.585967743694454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba95961c8d002fb%3A0x98f7172292edb2d6!2sEdappadi!5e0!3m2!1sen!2sin!4v1698147402721!5m2!1sen!2sin" style={{ border: "0", minWidth: "min-content" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>               </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <form className="as_appointment_form">
                    <div className="form-group">
                      <input type="text" name="" value="" placeholder="Name" className="form-control" />
                    </div>
                    <div className="form-group">
                      <input type="text" name="" value="" placeholder="Last Name" className="form-control" />
                    </div>
                    <div className="form-group">
                      <input type="text" name="" value="" placeholder="Email Address" className="form-control" />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Subject" className="form-control" />
                    </div>
                    <div className="form-group as_padderBottom10">
                      <textarea name="" className="form-control" placeholder="Message" id=""></textarea>
                    </div>
                    <button className="as_btn">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="as_footer_wrapper as_padderTop80">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="as_footer_inner as_padderTop10 as_padderBottom40">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="as_footer_widget">
                          <div className="as_footer_logo">
                            <a href="index.html"><img src="assets/images/aq1.png" alt="" /></a>
                          </div><br />
                          <h4 style={{ fontSize: "18px" }}>Our app will avaliable in </h4>

                          <ul className="as_contact_list">
                            <li>
                              <img src="assets/images/f1.png" alt="" />
                            </li>
                            <li>
                              <img src="assets/images/f2.png" alt="" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="as_footer_widget">
                          <h3 className="as_footer_heading">Quick Links</h3>
                          <ul>
                            <li><a href=""> About Us</a></li>
                            <li><a href=""> Blog</a></li>
                            <li><a href=""> Astrologers</a></li>
                            <li><a href=""> Appointment</a></li>
                            <button className="btns" style={{  marginBottom: "20px" }}>Login as Astrologer</button>
                            <button className="btns">Register as Astrologer</button>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="as_footer_widget">
                          <h3 className="as_footer_heading">Horoscope Forecasts</h3>

                          <ul>
                            <li><a href=""> Astrology </a></li>
                            <li><a href=""> Numerology</a></li>
                            <li><a href=""> Tarot reading</a></li>
                            <li><a href=""> Vastu</a></li>
                          </ul>
                        </div>
                      </div>


                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="as_footer_widget">
                          <h3 className="as_footer_heading">Our Newsletter</h3>

                          <p>Stat connected with us </p>

                          <div className="as_newsletter_wrapper">
                            <div className="as_newsletter_box">
                              <input type="text" name="" id="" className="form-control" placeholder="Email..." />
                              <a href="javascript:;" className="as_btn">
                                <img src="assets/images/svg/plane.svg" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="as_copyright_wrapper text-center">

                    <p> <img src="assets/images/x1.png" alt="" width="40" />
                      <img src="assets/images/x2.png" alt="" width="40" />
                      <img src="assets/images/x3.png" alt="" width="40" />
                      <br />Copyright &copy; 2023 Astro 5. All Right Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="as_login" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Login</h4>
              </div>
              <div className="modal-body">
                <div className="as_login_box active">
                  <form action="#">
                    <div className="form-group">
                      <input type="text" name="" placeholder="Enter email" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                      <input type="text" name="" placeholder="Enter password here" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                      <div className="as_login_data">
                        <label>Remember me
                          <input type="checkbox" name="as_remember_me" value="" />
                          <span className="checkmark"></span>
                        </label>
                        <a href="#">Forgot password ?</a>
                      </div>
                    </div>
                    <div className="text-center">
                      <a href="javascript:;" className="as_btn">login</a>
                    </div>
                  </form>
                  <p className="text-center as_margin0 as_padderTop20">Create An Account ? <a href="javascript:;" className="as_orange as_signup">SignUp</a></p>
                </div>
                <div className="as_signup_box">
                  <form action="#">
                    <div className="form-group">
                      <input type="text" name="" placeholder="Enter name" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                      <input type="text" name="" placeholder="Enter email" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                      <input type="text" name="" placeholder="Enter password here" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                      <input type="text" name="" placeholder="Enter mobile number" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                      <select name="" className="form-control" id="">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="text-center">
                      <a href="javascript:;" className="as_btn">Sign Up</a>
                    </div>
                  </form>
                  <p className="text-center as_margin0 as_padderTop20">Have An Account ? <a href="javascript:;" className="as_orange as_login">Login</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App;
