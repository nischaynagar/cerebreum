import React, { useEffect } from "react";
import buytokenCrouselIcon from "../assests/images/icon-buytoken-crousel.svg";
import aibotCrouselIcon from "../assests/images/icon-aibots-crousel.svg";
import staketokenCrouselIcon from "../assests/images/icon-staketoken-crousel.svg";
import matrixlabsIcon from "../assests/images/icon-matrixlabs.svg";
import chart from "../assests/images/icon-chart.svg";
import binanceIcon from "../assests/images/icon-binance.svg";
import stakingIcon from "../assests/images/icon-staking.svg";
import BenzingaLogo from "../assests/images/Benzinga-Logo-768x432.png";
import CoinDeskLogo from "../assests/images/CoinDesk-logo.png";
import ForbesPng from "../assests/images/forbes-png.png";
import YahooLogo from "../assests/images/Yahoo.png";
import roadmapImg from "../assests/images/roadmap.svg";
import devImg1 from "../assests/images/dev-img1.jpg";
import devImg2 from "../assests/images/dev-img2.jpg";
import devImg3 from "../assests/images/dev-img3.jpg";
import forbesIcon from "../assests/images/icon-forbes.svg";
import coinDeskIcon from "../assests/images/icon-coindesk.svg";
import bezingaIcon from "../assests/images/icon-benzinga.svg";
import yahooIcon from "../assests/images/icon-yahoo.svg";
import "./style.css";
import Navbar from "../Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img
      src={BenzingaLogo}
      className="bnbIcon"
      alt="binance-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={CoinDeskLogo}
      alt="pinksale-icon"
      onDragStart={handleDragStart}
    />,
    <img
      src={ForbesPng}
      className="coinmarketcapIcon"
      alt="coinmarketcap-icon"
      onDragStart={handleDragStart}
    />,
    <img src={YahooLogo} alt="coingecko-icon" onDragStart={handleDragStart} />,
    <img
      src={matrixlabsIcon}
      className="matrixlabsIcon"
      alt="matrixlabs-icon"
      onDragStart={handleDragStart}
    />,
  ];
  return (
    <>
      <Navbar />
      <div className="backdropDiv1">
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
                <div className="sparkle1"></div>
                <img src={buytokenCrouselIcon} alt="buy-token-img" />
                <div>Buy the $CERAI token</div>
              </div>
              <div className="crouselItem">
                <div className="sparkle2"></div>
                <img src={aibotCrouselIcon} alt="buy-token-img" />
                <div>Bots trade tax revenue</div>
              </div>
              <div className="crouselItem">
                <div className="sparkle3"></div>
                <img src={staketokenCrouselIcon} alt="buy-token-img" />
                <div>Earn $CERAI & $USDT 
                by staking
                </div>
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
            <div className="headingUnderlineWrapper">
                  <div className="tokenomicsTxt">Tokenomics</div>
                  <div className="styledUnderline"></div>
            </div>
            <div className="tokenomicsDiv2">

            <img src={chart} alt="chart" />
            <div className="tokenomics">
              <div className="tokenomicsFeatures">
                <div className="tokenomicsInfoTxt">
                  100,000,000 total supply
                </div>
                <div className="tokenomicsInfotxt2">
                  <div>15% buy tax</div>
                  <div>15% sell tax</div>
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
          <div className="contactUs" data-aos="fade-up">
            <div className="contactUsHeading">Cerebreum Grant & Partners</div>
            <div className="infoTxt">
              We are offering a grant program as well as potential partnerships with teams utilizing the $CERAI token, building amazing trading systems & more!
            </div>
            <div className="contactUsBtn">Contact&nbsp;us</div>
          </div>

          <div className="roadmap" data-aos="fade-up">
            <div className="roadmapHeadingWrapper">
                <div className="roadmapHeading">Roadmap</div>
                <div className="styledUnderline"></div>
              </div>
              <div className="stageWrapper">

              <div className="stageLeft">
              <div className="stage2">
                  <div className="stageTitle2">Stage</div>
                    <ul className="stageList">
                      <li>Additional chain & bridge</li>
                      <li>2nd trading bot activated </li>
                      <li>Project partnerships</li>
                      <li>Secret new utility goes live</li>
                    </ul>
                </div>
              <div className="stage4">
                  <div className="stageTitle4">Stage</div>
                    <ul className="stageList">
                      <li>DAO launches to vote on treasury investments</li>
                      <li>NFT collection w/ revenue generating use case (may be earlier depending on market)</li>
                      <li>Second secret utility released</li>
                    </ul>
                </div>
              </div>
              <img className="roadmapImg" src={roadmapImg} alt="roadmapImg"/>
              <div className="stageRight">
                <div className="stage1">
                  <div className="stageTitle1">Stage</div>
                    <ul className="stageList">
                      <li>Token sale & listing</li>
                      <li>CMC/CG/Avedex</li>
                      <li>1st trading algorithm begins w/ weekly payouts</li>
                      <li>$CERAI staking pool to earn $CERAI + USDT rewards from trading</li>
                    </ul>
                </div>
                <div className="stage3">
                  <div className="stageTitle3">Stage</div>
                    <ul className="stageList">
                      <li>Grant partnership program growth </li>
                      <li>New listings</li>
                      <li>iOS / Android apps</li>
                      <li>3-4th trading bot released</li>
                    </ul>
                </div>
                </div>
              </div>
          </div>

          <div className="meetTeam" data-aos="fade-up">
            <div className="meetTeamHeadingWrapper">
                <div className="meetTeamHeading">Meet our Team</div>
                <div className="styledUnderline"></div>
              </div>
              <div className="teamCrousel">
              <div className="teamCrouselItem">
                <div className="sparkle1"></div>
                <div className="teamCrouselImg">
                  <img src={devImg1} alt="dev-img" />
                </div>
                <div className="teamMemberWrapper">
                  <div className="teamRole">Lead dev / founder</div>
                  <div className="teamUsername">@Skyhoox</div>
                </div>
              </div>
              <div className="teamCrouselItem">
                <div className="sparkle2"></div>
                <div className="teamCrouselImg">
                  <img src={devImg2} alt="dev-img" />
                </div>
                <div className="teamMemberWrapper">
                  <div className="teamRole">Second dev / trader</div>
                  <div className="teamUsername">@jackaitrader</div>
                </div>
              </div>
              <div className="teamCrouselItem">
                <div className="sparkle3"></div>
                <div className="teamCrouselImg">
                  <img src={devImg3} alt="dev-img" />
                </div>
                <div className="teamMemberWrapper">
                  <div className="teamRole">CMO</div>
                  <div className="teamUsername">@danielfriedman</div>
                </div>
              </div>
            </div>
          </div>

          <div className="partnerDiv" data-aos="fade-up">
            <div className="partnerDiv1">
              <img
                className="forbesIcon"
                src={forbesIcon}
                alt="binance-icon"
                />
              <img
                className="coinDeskIcon"
                src={coinDeskIcon}
                alt="binance-icon"
                />
              </div>
            <div className="partnerDiv2">
              <img
              className="bezingaIcon"
              src={bezingaIcon}
              alt="binance-icon"
              />
            <img
              className="yahooIcon"
              src={yahooIcon}
              alt="binance-icon"
              />
              </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
