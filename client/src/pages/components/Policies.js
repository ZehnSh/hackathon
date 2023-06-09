import { useState } from "react";
import TermConditions from './TermConditions'
import Policy1 from "./Policy-1";
import Policy2 from "./Policiy-2";

export default function Policies({account,webApi}) {
  const [term, setTerm] = useState(false);
  const [policy1, setPolicy1] = useState(false);
  const [policy2, setPolicy2] = useState(false);
  const [policy, setPolicy] = useState(false);

  function viewPolicy() {
    function viewPolicy1() {
      if (policy1) {
        return (
          <>
            <Policy1 account={account} webApi={webApi}/>
          </>
        );
      }
    }

    function viewPolicy2() {
      if (policy2) {
        return (
          <>
            <Policy2 account={account} webApi={webApi}/>
          </>
        );
      }
    }

    if (policy) {
      return (
        <>
          <div className="border-2 border-black w-3/4 block m-auto my-2 rounded-lg mt-10 mb-5">
            <button
              className="border-b-2 border-black w-full p-5 text-xl font-serif bg-zinc-400 text-gray-100 font-bold rounded-lg "
              onClick={() => {
                setPolicy1(!policy1);
              }}
            >
              Policy No.1
            </button>
            {viewPolicy1()}
          </div>
          <div className="border-2 border-black w-3/4 block m-auto my-2 rounded-lg mt-5 mb-5">
            <button
              className="border-b-2 border-black w-full p-5 text-xl font-serif bg-zinc-400 text-gray-100 font-bold rounded-lg"
              onClick={() => {
                setPolicy2(!policy2);
              }}
            >
              Policy No.2
            </button>
            {viewPolicy2()}
          </div>
        </>
      );
    }
  }

  function viewTerm() {
    // console.log(account)
    if (term) {
      return <TermConditions />;
    }
  }

  return (
    <div>
      <div className="border-2 border-green-800 w-5/6 block m-auto my-2 rounded-lg mt-24">
      <button
        className="border-b-2 border-green-800 w-full p-5  text-2xl  font-mono bg-neutral-300 rounded-lg"
        onClick={() => {
          setTerm(!term);
        }}
      >
        Terms and Conditions
      </button>
      {viewTerm()}
      </div>
      <button
        className="text-2xl border-2 font-mono bg-neutral-300 border-green-800 w-5/6 block m-auto p-5 my-5 mb-2 rounded-lg"
        onClick={() => {
          setPolicy(!policy);
          setPolicy1(false);
          setPolicy2(false);
        }}
      >
        View Policies
      </button>
      {viewPolicy()}

    </div>
  );
}