import React from 'react';
import buytokenCrouselIcon from "../assests/images/icon-buytoken-crousel.svg";
import aibotCrouselIcon from "../assests/images/icon-aibots-crousel.svg";
import staketokenCrouselIcon from "../assests/images/icon-staketoken-crousel.svg";
import chart from "../assests/images/icon-chart.svg" ;
import binanceIcon from "../assests/images/icon-binance.svg";
import "./style.css";
export default function Home()
{
    return (
        <div className='mainWrapper'>
            <div className='titleContent'>
                <div className='transparentBtn'>Cerebreum</div>
                <div className='mainHeadingTxt'>First&nbsp;Ever,<br/>Sustainable&nbsp;&<br/>Compounding,<br/><div className='gradientTxt'>APY&nbsp;Token</div></div>
                <div className='buyBtnWrapper'>
                    <div className='btn1'>Buy&nbsp;the&nbsp;token</div>
                    <div className='btn2'>Stake&nbsp;Now</div>
                </div>
            </div>

            <div className='howItWorksSection'>
                <div className='howItWorksHeading'>How&nbsp;it&nbsp;works</div>
                <div className='howItWorksTxt'>The more & longer you stake the bigger are the rewards which means that earnings compound the longer u stake or don’t claim,<b> claim USDT rewards!</b></div>
                <div className='crousel'>
                    <div className='crouselItem'>
                        <img src={buytokenCrouselIcon} alt="buy-token-img"/>
                        <div>Buy token</div>
                    </div>
                    <div className='crouselItem'>
                        <img src={aibotCrouselIcon} alt="buy-token-img"/>
                        <div>AI bots do trading</div>
                    </div>
                    <div className='crouselItem'>
                        <img src={staketokenCrouselIcon} alt="buy-token-img"/>
                        <div>Stake the tokens</div>
                    </div>
                </div>
            </div>

            <div className='tokenomicsWrapper'>
                <img src={chart} alt="chart"/>
                <div className='tokenomics'>
                <div className='tokenomicsFeatures'>
                    <div className='tokenomicsTxt'>Tokenomics</div>
                    <div className='tokenomicsescTxt'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus quam, accumsan non iaculis ac, 
                        ornare nec nulla. Duis mollis urna et tellus pharetra laoreet sit amet ultrices ligula.
                    </div>
                </div>
                <div className='optionsGrid'>
                    <div className='option'>
                        <div className='optionColorDiv1'></div>
                        <div>Staking rewards</div>
                    </div>
                    <div className='option'>
                        <div className='optionColorDiv2'></div>
                        <div>Treasury</div>
                    </div>
                    <div className='option'>
                        <div className='optionColorDiv3'></div>
                        <div>Liquidity&nbsp;and&nbsp;Exchanges</div>
                    </div>
                    <div className='option'>
                        <div className='optionColorDiv4'></div>
                        <div>Public&nbsp;Sale</div>
                    </div>
                    <div className='option'>
                        <div className='optionColorDiv5'></div>
                        <div>Airdrop</div>
                    </div>
                    <div className='option'>
                        <div className='optionColorDiv6'></div>
                        <div>Marketing and Community Development</div>
                    </div>
                </div>
                </div>
            </div>

            <div className='contactUs'>
                <div className='contactUsHeading'>Are you an institution or large investor?</div>
                <div className='contactUsBtn'>Contact us</div>
            </div>
            <div className='binanceDiv'>
                <img src={binanceIcon} alt="binance-icon" />
                <img src={binanceIcon} alt="binance-icon" />
                <img src={binanceIcon} alt="binance-icon" />
                <img src={binanceIcon} alt="binance-icon" />
            </div>
        </div>
    );
}