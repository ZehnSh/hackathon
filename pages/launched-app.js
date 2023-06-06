import Navbar from "./components/My-Navbar";
import style from "./components/homepage1.module.css";
import Policies from "./components/Policies";
import Reinsurance from "./components/Reinsurance";
import MyPolicy from "./components/My-Policy";
import Web3modal from "web3modal";
import { ethers } from "ethers";
import { useState } from "react";
import { useRef } from "react";

export default function Launch() {
  // css is same but  Navbar is differrent
  const [account, setAccount] = useState("");
  const [select, setSelect] = useState(0);

  function option() {
    if (select == 0) {
      return <Policies account={account} />;
    } else if (select == 1) return <Reinsurance />;
    else if (select == 2) return <MyPolicy />;
    return <Policies account={account} />;
  }

  async function connectWallet() {
    const web3modal = new Web3modal();
    const connection = await web3modal.connect();
    const provider = await new ethers.providers.Web3Provider(connection);
    const signer = await provider.getSigner();
    // console.log(await signer.getAddress())
    setAccount(await signer.getAddress());
    const network = await provider.getNetwork();
    if (network.chainId != 11155111) {
      alert("Please connect with sepolia network");
      return;
    }
  }

  return (
    <div className={style.forhomeone}>
      <Navbar connect={connectWallet} />

      <div className="container w-3/4 m-auto min-h-[70vh] mt-[40px] border-2 border-t-0 border-black">
        <div>
          <button
            className="w-1/3  border-2 border-l-0 border-t-0 border-black  py-3 text-2xl"
            onClick={() => {
              setSelect(0);
            }}
          >
            Policies
          </button>
          <button
            className="w-1/3  border-2 border-l-0 border-t-0 border-black  py-3 text-2xl"
            onClick={() => {
              setSelect(1);
            }}
          >
            Reinsurance
          </button>
          <button
            className="w-1/3  border-2 border-l-0 border-r-0 border-t-0 border-black  py-3 text-2xl"
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
    </div>
  );
}
