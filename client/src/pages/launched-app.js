import Navbar from "./components/My-Navbar";
// import style from "./components/homepage1.module.css";
import Policies from "./components/Policies";
import Reinsurance from "./components/Reinsurance";
import MyPolicy from "./components/My-Policy";
import Footer2 from "./components/footer2";
import Web3modal from "web3modal";
import { ethers } from "ethers";
import { useState } from "react";
import Abi from "../abi/insuranceRegistery.json"
import {Contract_Address} from '../config'
import style from "./launched-app.module.css";

export default function Launch() {
  // css is same but  Navbar is differrent
  const [account, setAccount] = useState("");
  const [select, setSelect] = useState(0);
  const [webApi,setWebApi]=useState({contract:null,signer:null})

  function option() {
    // console.log(webApi)
    if (select == 0) {
      return <Policies account={account} webApi={webApi}/>;
    } else if (select == 1) return <Reinsurance />;
    else if (select == 2) return <MyPolicy webApi={webApi}/>;
    return <Policies account={account} webApi={webApi} />;
  }

  async function connectWallet() {
    try{
    const web3modal = new Web3modal();
    const connection = await web3modal.connect();
    const provider = await new ethers.providers.Web3Provider(connection);
    const signer = await provider.getSigner();
    // console.log(await signer.getAddress())
    setAccount(await signer.getAddress());
    const network = await provider.getNetwork();
    // if (network.chainId != 11155111) {
    //   alert("Please connect with sepolia network");
    //   return;
    // }
    const contract=await new ethers.Contract(Contract_Address,Abi.abi,signer);
    setWebApi({contract:contract,signer:signer})
    }catch(e){
      alert("Please reload the page")
      return ;
    }
  }

  return (
    <div className={style.launchApp}>
      <Navbar connect={connectWallet} />

      <div className="container w-4/5 m-auto min-h-[70vh] mt-[40px] border-2 border-slate-700  border-solid bg-neutral-200 ">
            
        <div className="flex justify-evenly">
          <button
            className=" w-1/3  border-2  font-mono font-bold  py-3  text-2xl text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 "
            
            onClick={() => {
              setSelect(0);
            }}
          >
            Policies
          </button>
       
          <button
            className=" w-1/3  border-2 font-mono font-bold   py-3 text-2xl text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
           
            onClick={() => {
              setSelect(2);
            }}
          >
            My Policies
          </button>
        </div>

        {/* POLICIES */}
        {option()}
      </div>
      <Footer2/>
    </div>
  );
}
