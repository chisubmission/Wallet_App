import React from 'react';
import * as ReactDOM from 'react-dom';
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';
import logo from "../../../assets/images/wallet.png"
import ReactPlayer from "react-player/youtube";
import WalletSetup from '../WalletSetup/WalletSetup';
import './BasicPage.css';
import video1 from "../../../assets/videos/What is Cryptocurrency_ A Simple Explanation.mp4";
import video2 from "../../../assets/videos/Understand the Blockchain in Two Minutes.mp4";
import video3 from "../../../assets/videos/What is a Cryptocurrency Wallet_ Simple To understand Video.mp4";

const BasicPage = () => {
  return (
    <>
      <div className="container-fluid" style={{width: "700px", margin: "auto"}}>
        <div className="header">
          <img src={logo} alt=""/> 
          <h2>MetaMask</h2>
        </div>
        <div className="basic-section">
          <div className="basic-container">
            <div className="title">
              <h3>The Basics</h3>
            </div>
            <div className="content-text">
              <small>Before getting started, it's important that you have a good understanding on how <br/> cryptocurrencies and blockchain technology works.</small>
              <br/> <small>Here are some videos we suggest on the basics.</small>
            </div>
            <div className="content-video">
              <div class="row d-flex">
                <div className="col-sm-4">
                  <div className="video-container">
                    <video controls style={{ borderRadius: '5px', width: '200px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
                      <source
                        type="video/webm"
                        src={video1}
                      />
                    </video>
                  </div>
                  <a href="https://www.youtube.com/watch?v=-z-SJV4ugHU" target="_blank">What are cryptocurrencies?</a>
                </div>
                <div className="col-sm-4">
                  <div className="video-container">
                  <video controls style={{ borderRadius: '5px', width: '200px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
                      <source
                        type="video/webm"
                        src={video2}
                      />
                    </video>
                  </div>
                  <a href="https://www.youtube.com/watch?v=r43LhSUUGTQ" target="_blank">What is a blockchain?</a>
                </div>
                <div className="col-sm-4">
                  <div className="video-container">
                    {/* <ReactPlayer
                      playing
                      width="220px"
                      height="115px"
                      url="https://www.youtube.com/watch?v=712BGhU_4oU"
                    /> */}
                    <video controls style={{ borderRadius: '5px', width: '200px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
                      <source
                        type="video/webm"
                        src={video3}
                      />
                    </video>
                  </div>
                  <a href="https://www.youtube.com/watch?v=712BGhU_4oU" target="_blank">What are wallet & exchanges?</a>
                </div>
              </div>
            </div>
            <div className="lets-moveText">
              <small>Now that you have a basic understanding of everyThing. Let's move on to the wallet setup.</small>
            </div>
            <div>
              <button onClick={() => goTo(WalletSetup)} id="WalletSetupBtn" type="">Wallet Setup</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicPage;