import React from 'react';

const index = ({content}) => (

  <div className = "loginBox" >
      <div className="header">
      <div className="logo">
          <i className="fa fa-tachometer"></i>
          <span>Brand</span>
      </div>
      <a href="#" className="nav-trigger"><span></span></a>
      </div>i
      <div className="side-nav">
      <div className="logo">

      <img src="./../logo.png" alt="Start React" title="Start React" height="35px" /> <a /><span />;

      </div>
      <nav>
          <ul>
              <li>
                  <a href="./form">
                      <span><i className="fa fa-user"></i></span>
                      <span>Register CheckIn's</span>
                  </a>
              </li>
              <li className="active">
                  <a href="#">
                      <span><i className="fa fa-envelope"></i></span>
                      <span>Scheduled Visitor List</span>
                  </a>
              </li>
              <li>
                  <a href="#">
                      <span><i className="fa fa-bar-chart"></i></span>
                      <span>Visitor Information</span>
                  </a>
              </li>
              <li>
                  <a href="#">
                      <span><i className="fa fa-credit-card-alt"></i></span>
                      <span>Visitor Analysis</span>
                  </a>
              </li>
          </ul>
      </nav>
      </div>
      <div className="main-content" />
      </div>

)
export default index;
