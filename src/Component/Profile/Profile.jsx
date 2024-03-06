import React from 'react'
import './a.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Profile = () => {
  return (
    <div className="container">
      <div className="team-single">
        <div className="row">
          <div className="col-lg-4 col-md-5 xs-margin-30px-bottom">
            <div className="team-single-img">
              <img src="https://scontent-xsp2-1.xx.fbcdn.net/v/t39.30808-6/271687508_448485783593541_8314626224747176482_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=kxLeGXzviRsAX9IFy8j&_nc_ht=scontent-xsp2-1.xx&oh=00_AfBDmAju5d3T-C-SwOSlCjlvbRi9WBpiIQJWIZ7mlP6uWw&oe=65EBAF60" alt="" />
            </div>
            <div className="bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center">
              <h4 className="margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600">Trương Công Đức</h4>
              <p className="sm-width-95 sm-margin-auto">PK03303</p>
              <div className="margin-20px-top team-single-icons">
                <ul className="no-margin">
                  <li><a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="javascript:void(0)"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="javascript:void(0)"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a href="javascript:void(0)"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="team-single-text padding-50px-left sm-no-padding-left">
              <h4 className="font-size38 sm-font-size32 xs-font-size30">Profile</h4>
              <p className="no-margin-bottom">Hello</p>
              <div className="contact-info-section margin-40px-tb">
                <ul className="list-style9 no-margin">
                  <li>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="fas fa-graduation-cap text-orange"></i>
                        <strong className="margin-10px-left text-orange">Degree:</strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>Student</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="far fa-gem text-yellow"></i>
                        <strong className="margin-10px-left text-yellow">Exp.:</strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>Studying</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="far fa-file text-lightred"></i>
                        <strong className="margin-10px-left text-lightred">Courses:</strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>Web programming</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="fas fa-map-marker-alt text-green"></i>
                        <strong className="margin-10px-left text-green">Address:</strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>160 Ymoan, bmt</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="fas fa-mobile-alt text-purple"></i>
                        <strong className="margin-10px-left xs-margin-four-left text-purple">Phone:</strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>0706252156</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="fas fa-envelope text-pink"></i>
                        <strong className="margin-10px-left xs-margin-four-left text-pink">Email:</strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p><a href="mailto:truongcongduc2004@gmail.com">truongcongduc2004@gmail.com</a></p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <h5 className="font-size24 sm-font-size22 xs-font-size20">Kỹ năng chuyên nghiệp</h5>
              <div className="sm-no-margin">
                <div className="progress-text">
                  <div className="row">
                    <div className="col-7">HTML-CSS</div>
                    <div className="col-5 text-right">40%</div>
                  </div>
                </div>
                <div className="custom-progress progress">
                  <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}
                    className="animated custom-bar progress-bar slideInLeft bg-sky"></div>
                </div>
                <div className="progress-text">
                  <div className="row">
                    <div className="col-7">JS</div>
                    <div className="col-5 text-right">50%</div>
                  </div>
                </div>
                <div className="custom-progress progress">
                  <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}
                    className="animated custom-bar progress-bar slideInLeft bg-orange"></div>
                </div>
                <div className="progress-text">
                  <div className="row">
                    <div className="col-7">PHP</div>
                    <div className="col-5 text-right">60%</div>
                  </div>
                </div>
                <div className="custom-progress progress">
                  <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}
                    className="animated custom-bar progress-bar slideInLeft bg-green"></div>
                </div>
                <div className="progress-text">
                  <div className="row">
                    <div className="col-7">LARAVEL</div>
                    <div className="col-5 text-right">80%</div>
                  </div>
                </div>
                <div className="custom-progress progress">
                  <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}
                    className="animated custom-bar progress-bar slideInLeft bg-yellow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
