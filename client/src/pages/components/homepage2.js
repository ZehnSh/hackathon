import React from 'react';
import Styles from './homepage2.module.css';
import Link from 'next/link';


const homepage2 = () => {
  return (
   <div className={Styles.forhometwo}>

    <div className='flex justify-between items-center'>

    
      <div className={Styles.firstfifty}>

        <div className={Styles["holeimg"]}>
          <div> 
            <img className={Styles.oneimg} src="h2-3.png"  width={100} height={60} alt="" />
          </div>

          <div> 
            <img className={Styles.twoimg} src="h2-2.png"  width={100} height={60} alt="" />
          </div>

          <div> 
            <img className={Styles.threeimg} src="h2-1.png"  width={100} height={60} alt="" />
          </div>
        </div>
        
        <div>
          <img className={Styles.fourimg} src="h2-4.png"  width={100} height={60} alt="" />
        </div>

     

      </div>

      <div className={Styles.secondfifty}>
            
          <div className={Styles.boxone}> 
            <p className={Styles.para}>
              If you are unsure about investing in crop safety measures, <br/>there's no need to worry.
            </p>
          </div>
         
          <div className=" bg-slate-300">
          <Link href="/launched-app"> <button type='button' className={Styles.but}>Obtain Prime</button> </Link>
            <p className="text-lg font-serif h-80 text-slate-700 tracking-normal ml-4 mt-4 leading-relaxed tracking-wide text-center">
              Take the leap of faith and embrace the revolutionary power of<br/> blockchain-powered crop insurance, or risk the devastating <br/>consequences of an unpredictable world on your harvests!<br/> Don't let hesitation hold you back from securing your future <br/>against the perils of climate change. With this groundbreaking technology,<br/> you can confidently protect your crops from extreme weather events,<br/> crop failures, and mounting uncertainties. Embrace the extreme<br/> solution that guarantees resilience in the face of an <br/>increasingly volatile climate. Act now, or suffer <br/>the irreversible consequences of inaction.
            </p> 
          </div> 
          
      </div>
    </div>
   
    </div>
  )
}

export default homepage2;
