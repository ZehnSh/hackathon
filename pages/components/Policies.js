import { useState } from "react";
import TermConditions from './TermConditions'
import Policy1 from "./Policy-1";
import Policy2 from "./Policiy-2";

export default function Policies({account}) {
  const [term, setTerm] = useState(false);
  const [policy1, setPolicy1] = useState(false);
  const [policy2, setPolicy2] = useState(false);
  const [policy, setPolicy] = useState(false);

  function viewPolicy() {
    function viewPolicy1() {
      if (policy1) {
        return (
          <>
            <Policy1 account={account} />
          </>
        );
      }
    }

    function viewPolicy2() {
      if (policy2) {
        return (
          <>
            <Policy2 account={account}/>
          </>
        );
      }
    }

    if (policy) {
      return (
        <>
          <div className="border-2 border-black w-5/6 block m-auto my-2 rounded-lg">
            <button
              className="border-b-2 border-black w-full p-5 text-xl"
              onClick={() => {
                setPolicy1(!policy1);
              }}
            >
              Policy No.1
            </button>
            {viewPolicy1()}
          </div>
          <div className="border-2 border-black w-5/6 block m-auto my-2 rounded-lg">
            <button
              className="border-b-2 border-black w-full p-5 text-xl"
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
      <div className="border-2 border-black w-5/6 block m-auto my-2 rounded-lg">
      <button
        className="border-b-2 border-black w-full p-5 text-xl"
        onClick={() => {
          setTerm(!term);
        }}
      >
        Terms and Conditions
      </button>
      {viewTerm()}
      </div>
      <button
        className="text-xl border-2 border-black w-5/6 block m-auto p-5 my-5 mb-2 rounded-lg"
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





