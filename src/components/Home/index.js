import React, { useEffect } from "react";
import buytokenCrouselIcon from "../assests/images/icon-buytoken-crousel.svg";
import aibotCrouselIcon from "../assests/images/icon-aibots-crousel.svg";
import staketokenCrouselIcon from "../assests/images/icon-staketoken-crousel.svg";
import chart from "../assests/images/icon-chart.svg";
import binanceIcon from "../assests/images/icon-binance.svg";
import stakingIcon from "../assests/images/icon-staking.svg";
import "./style.css";
import Navbar from "../Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="backdropDiv1">
        <Navbar />
        <div className="container-mainWrapper1">
          <div className="mainWrapper1" data-aos="fade-up">
            <div className="titleContent">
              <div className="transparentBtn">Cerebreum</div>
              <div className="mainHeadingTxt">
                First&nbsp;Ever,
                <br />
                Sustainable&nbsp;&
                <br />
                Compounding,
                <br />
                <div className="gradientTxt">APY&nbsp;Token</div>
              </div>
              <div className="buyBtnWrapper">
                <div className="btn1">Buy&nbsp;the&nbsp;token</div>
                <div className="btn2">Stake&nbsp;Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="backdropDiv2">
        <div className="mainWrapper2">
          <div
            id="howItWorksSection"
            className="howItWorksSection"
            data-aos="fade-up"
          >
            <div className="headingUnderlineWrapper">
              <div className="howItWorksHeading">How&nbsp;it&nbsp;works</div>
              <div className="styledUnderline"></div>
            </div>
            <div className="howItWorksTxt">
              The more & longer you stake the bigger are the rewards which means
              that earnings compound the longer u stake or don’t claim,
              <b> claim USDT rewards!</b>
            </div>
            <div className="crousel">
              <div className="crouselItem">
                <img src={buytokenCrouselIcon} alt="buy-token-img" />
                <div>Buy token</div>
              </div>
              <div className="crouselItem">
                <img src={aibotCrouselIcon} alt="buy-token-img" />
                <div>AI bots do trading</div>
              </div>
              <div className="crouselItem">
                <img src={staketokenCrouselIcon} alt="buy-token-img" />
                <div>Stake the tokens</div>
              </div>
            </div>
            <div className="nonNativeDiv">
              <div className="nonNativeHeading">
                Non-Native Token Yield Generation
              </div>
              <div className="nonNativeTxt">
                Cerebreum has worked with trading bots, lending & farming
                products with long backtests. Taxes from token trading go into
                the yield pool, are profited from, and claimable as earnings in
                $USDT a for token stakers.
              </div>
            </div>
          </div>
          <div
            id="tokenomicsWrapper"
            className="tokenomicsWrapper"
            data-aos="fade-up"
          >
            <img src={chart} alt="chart" />
            <div className="tokenomics">
              <div className="tokenomicsFeatures">
                <div className="headingUnderlineWrapper">
                  <div className="tokenomicsTxt">Tokenomics</div>
                  <div className="styledUnderline"></div>
                </div>
                <div className="tokenomicsInfoTxt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum lacus quam, accumsan non iaculis ac, ornare nec
                  nulla. Duis mollis urna et tellus pharetra laoreet sit amet
                  ultrices ligula.
                </div>
              </div>
              <div className="optionsGrid">
                <div className="gridCol">
                  <div className="option">
                    <div className="optionColoredDivs optionColorDiv1"></div>
                    <div>Staking rewards</div>
                  </div>
                  <div className="option">
                    <div className="optionColoredDivs optionColorDiv2"></div>
                    <div>Treasury</div>
                  </div>
                  <div className="option">
                    <div className="optionColoredDivs optionColorDiv3"></div>
                    <div>
                      Liquidity&nbsp;and <br />
                      Exchanges
                    </div>
                  </div>
                </div>
                <div className="gridCol">
                  <div className="option">
                    <div className="optionColoredDivs optionColorDiv4"></div>
                    <div>Public&nbsp;Sale</div>
                  </div>
                  <div className="option">
                    <div className="optionColoredDivs optionColorDiv5"></div>
                    <div>Airdrop</div>
                  </div>
                  <div className="option">
                    <div className="optionColoredDivs optionColorDiv6"></div>
                    <div className="optionDivTxt">
                      Marketing and Community
                      <br />
                      Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contactUs" data-aos="fade-up">
            <div className="contactUsHeading">Cerebreum Grant & Partners</div>
            <div className="infoTxt">
              We are offering a grant program as well as potential partnerships
              with teams utilizing the $CERAI token, building amazing trading
              systems & more!
            </div>
            <div className="contactUsBtn">Contact us</div>
          </div>
          <div className="binanceDiv">
            <img
              className="binanceDivImg"
              src={binanceIcon}
              alt="binance-icon"
            />
            <img
              className="binanceDivImg"
              src={binanceIcon}
              alt="binance-icon"
            />
            <img
              className="binanceDivImg"
              src={binanceIcon}
              alt="binance-icon"
            />
            <img
              className="binanceDivImg"
              src={binanceIcon}
              alt="binance-icon"
            />
          </div>
          <div className="stakingWrapper" data-aos="fade-up">
            <div className="stakingheadingWrapper">
              <div className="stakingHeading">High APY Staking</div>
              <div className="styledUnderline"></div>
            </div>
            <div className="stakingImgWrapper">
              <img src={stakingIcon} alt="staking-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
