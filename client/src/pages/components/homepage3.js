import React from "react";
import Styles from "./homepage3.module.css";


const homepage3 = () => {
  return (
  <div className={Styles.forhomethree}>
      <div className=" h-40 flex justify-center items-center ">
        <h1 className={Styles.head1}>HOW IT WORKS</h1> 
      </div>

      <div className={Styles.stem}>
        <div className={Styles.stem2}></div>
      </div>
      
      <div className={Styles.leaf1}>
        <h1 className={Styles.h1}>1. T&C</h1>
        <p className={Styles.para1}>Review the terms and conditions <br/>thoroughly before proceeding,<br/>
         ensuring complete <br/> understanding and <br/> agreement.</p>
      </div>

      <div className={Styles.leaf2}>
        <h1 className={Styles.h2}> 2. Pick a Policy</h1>
        <p className={Styles.para2}>Select an appropriate policy within <br/> the specified time constraints <br/> that aligns with your <br/>requirements and<br/> preferences.</p>
      </div>

      <div className={Styles.leaf3}>
        <h1 className={Styles.h3}>3. Request for Reimbursement</h1>
        <p className={Styles.para3}>File a compensation request for <br/> the crop damage caused <br/>by adverse weather <br/>conditions.</p>
      </div>

      <div className={Styles.leaf4}>
        <h1 className={Styles.h4}> 4. Your Entitlement</h1>
        <p className={Styles.para4}>The smart contract automatically <br/> initiates the crop claim settlement<br/> process based on weather <br/>conditions and promptly<br/> disburses the payment.</p>
      </div>

      <div className={Styles.leaf5}>
        <h1 className={Styles.h5}>5. Extend the Policy </h1>
        <p className={Styles.para5}> The farmer can enhance her crop <br/> farm by extending the policy<br/> using reinsure, allowing for<br/> upgrades and <br/>improvements.</p>
      </div>
    
  </div>
 )
};

export default homepage3;
