import React from "react";
import {
  RightbarHolder,
TopNavHolder
} from "../../assets/styles/RightSideBarStyle";
import NavRightBar from "./NavRightBar";
import {EarningsContentHolder,
  RewardContentHolder,
  ReferralsContentHolder,
  TransactionContentHolder

} from '../../assets/styles/EarningsRightBarStyles';

import {TiArrowForward, TiArrowForwardOutline, TiArrowLeft, TiArrowLeftOutline, TiArrowLeftThick, TiWaves} from 'react-icons/ti';
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";

import BoardReferral from "../../assets/images/board.jpg";

const EarningsRightBar = () => {
  return (
    <RightbarHolder>
      {/* nav started from here */}
      <TopNavHolder>
      <NavRightBar />
      </TopNavHolder>
      
      {/* nav ends here */}

      {/* content started from here */}
     <EarningsContentHolder>
     <RewardContentHolder>
     <div className="rewardDetails">
              <p>Rewards</p>
              <span className="totalBalance">Total Balance</span>
              <div className="amount">
                <span className="currency">N</span>
                <span className="figure">2000</span>
                <span className="near">Near</span>
              </div>
             <div className="waveMoney">
              <span className="waveMoneyIcon"><TiWaves color="#E0E0E0"/></span>
              <span className="waveMoneyCash">$20</span>
               </div>
              <div className="referralHolder">
                <ul>
                  <li>20 Uploaded Content</li>
                  <li className="referralNumber">9 Referrals</li>
                </ul>
              </div>
            </div>
            <div className="manageReward">
                <div className="innerManageRewardHolder">
                    <div className="manageYourReward">
                        <span>Manage your reward</span>
                        <p>
                        Use your reward to shop at our marketplace 
                        or withdraw the cryptocurrency to your wallet
                        </p>
                    </div>

                    <div className="autoWithdraw">
                        <div className="autoWithdrawContent">
                          <span>Auto withdraw cash</span>
                          <p>Withdraw to your wallet</p>
                        </div>
                        <div className="autoWithdrawIcon">
                        <IoIosArrowForward color="#979797"/>

                        </div>

                    </div>

                    <div className="shopMarketPlace">
                      <div className="shopMarketPlaceContent">
                    <span>Shop at market place</span>
                          <p>Use your reward at our marketplace</p>
                        </div>
                        <div className="shopMarketPlaceIcon">
                        <IoIosArrowForward color="#979797"/>

                        </div>


                    </div>
                </div>
            </div>
     </RewardContentHolder>

     <ReferralsContentHolder>
          <div className="innerReferralsContentHolder">
            <div className="contentsForReferrals">
              <div className="contentsForReferralsHeader" >
                  <span>
                    Refer Clients and 
                  Earn NEAR
                  </span>
              </div>

              <div className="contentsForReferralsMessage">
                  <span>
                  Earn 2 Near tokens for any client you introduce. 
                  Join the Program,
                   then someone will reach out to you to get started.
                  </span>
              </div>

              <div className="contentsForReferralsButton">
                    <button>
                    Join the referral program
                    </button>
              </div>

            </div>
            <div className="referraImage">
                  <img src={BoardReferral} alt="board-img" />
            </div>

          </div>

        </ReferralsContentHolder>

        <TransactionContentHolder>
        <div class="container mt-3">
  <p>Transactions</p>            
  <table className="table table-borderless rounded">
    <thead>
      <tr>
        <th>Action</th>
        <th>Type</th>
        <th>Date</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="theFirstValues">Uploaded new material</td>
        <td className="theOtherValues">Deposit</td>
        <td className="theOtherValues">15 April 2022 5:00 pm</td>
        <td className="theOtherValues">20 Near ($2)</td>
      </tr>
      <tr>
        <td className="theFirstValues">Withdrawal</td>
        <td className="theOtherValues">Withdrawal</td>
        <td className="theOtherValues">15 May 2022 7:00 pm</td>
        <td className="theOtherValues">15 Near ($1.5)</td>
      </tr>
      <tr>
        <td className="theFirstValues">New Referral</td>
        <td className="theOtherValues">Deposit</td>
        <td className="theOtherValues">15 June 2022 11:00 pm</td>
        <td className="theOtherValues">2 Near ($0.2)</td>
      </tr>

      <tr>
        <td className="theFirstValues">Uploaded new material</td>
        <td className="theOtherValues">Deposit</td>
        <td className="theOtherValues">15 August 2022 10:00 pm</td>
        <td className="theOtherValues">20 Near ($2)</td>
      </tr>

      <tr>
        <td className="theFirstValues">Marketplace shop</td>
        <td className="theOtherValues">Withdrawal</td>
        <td className="theOtherValues">15 July 2022 8:00 pm</td>
        <td className="theOtherValues">15 Near ($1.5)</td>
      </tr>

      <tr>
        <td className="theFirstValues">Withdrawal</td>
        <td className="theOtherValues">Withdrawal</td>
        <td className="theOtherValues">15 January 2022 9:00 pm</td>
        <td className="theOtherValues">2 Near ($0.2)</td>
      </tr>
    </tbody>
  </table>
</div>
        </TransactionContentHolder>




        
     </EarningsContentHolder>
      {/* content ends here */}
  </RightbarHolder>
  )
}

export default EarningsRightBar