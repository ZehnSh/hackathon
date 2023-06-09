import { useState, useEffect } from "react";
import Abi from "../../abi/INRToken.json";
import { ethers } from "ethers";
import { Contract_Address } from "../../config.js";
import Popup from "reactjs-popup";
import ChainAbi from "../../abi/chainLinkWeatherData.json";

export default function MyPolicy({ webApi }) {
  const [allData, setAllData] = useState([]);
  const [account, setAccount] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { signer, contract } = webApi;
    if (signer == null) {
      alert("Connect your wallet");
      return;
    }
    const address = await signer.getAddress();
    setAccount(address);
    const dataIds = await contract.getUserInsurances();
    const insuranceIds = dataIds.map((ele) => {
      return ele.toNumber();
    });
    const dataArray = [];
    for (let i of insuranceIds) {
      let data = await contract.getInsuranceDetails(i);
      const installment = (await contract.getPaidInstallments(i)) + 1;
      dataArray.push({ data: data, id: i, installment: installment });
    }
    setAllData(dataArray);
    console.log(dataArray);
  }

  async function payInstallment(data) {
    const { signer, contract } = webApi;

    console.log(Contract_Address);
    const contractAddress = "0xB640Cf3d2BEEcf5335bc14d9334CD99baf6e4f2E";
    const tokenContract = await new ethers.Contract(
      contractAddress,
      Abi.abi,
      signer
    );
    const approve = await tokenContract.approve(
      Contract_Address,
      data.data.Amount
    );
    await approve.wait();

    const address = await signer.getAddress();
    const transaction = await contract.payInstallment(
      "0xB640Cf3d2BEEcf5335bc14d9334CD99baf6e4f2E",
      data.id
    );
    await transaction.wait();
    // console.log(allData[i].data.maturityDate.toNumber())
    // console.log(allData[i].data.startDate.toNumber())
    // console.log(Date.now())
  }

  return (
    <div>
      <table className="w-3/4 m-auto mt-14 text-lg border-green-300">
        <thead>
          <tr className=" text-slate-800 bg-blue-100 border-2 rounded-lg">
            <th className="border-2 p-3 border-black">Sr. No.</th>
            <th className="border-2 p-3 border-black">Account</th>
            <th className="border-2 p-3 border-black">Policy</th>
            <th className="border-2 p-3 border-black">Seeds Data</th>
            <th className="border-2 p-3 border-black">EMI's</th>
            <th className="border-2 p-3 border-black">Claim</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((ele, i) => {
            // console.log(ele.periodTime)
            return <TableData key={i} data={ele} index={i} />;
          })}
        </tbody>
      </table>
    </div>
  );

  function TableData({ data, index }) {
    return (
      <tr className="bg-gray-300 font-mono">
        <td className="border-2 p-3 border-black">{index + 1}.</td>
        <td className="border-2 p-3 border-black">
          {data.data.userWalletAddress}
        </td>
        <td className="border-2 p-3 border-black">
          {data.data.periodTime.toNumber()}
        </td>
        <td className="border-2 p-3 border-black">{data.data.seedsData}</td>
        <td className="border-2 p-3 border-black p-3 ">
          {data.data.Amount.toNumber()} (paid) <br />
          <h1 className="inline-block p-2 border-2 border-black mt-2">
            {data.installment} No. Installment
          </h1>
          <button
            className="p-2 border-2 border-black mt-2"
            onClick={() => {
              payInstallment(data);
            }}
          >
            Pay
          </button>
        </td>
        <td className="border-2 border-black">
          <Popup
            trigger={
              <button className="border-2 border-black text-lg mx-4 px-8 py-2">
                Claim
              </button>
            }
            modal
            nested
          >
            {(close) => <UserInput data={data} webApi={webApi} />}
          </Popup>
        </td>
      </tr>
    );
  }

  function UserInput({ data, webApi }) {
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [load,setLoad]=useState(false);

    useEffect(() => {
      latLong();
    }, []);

    function latLong() {
      let arr = data.data.yourAddress.split("/");
      setLat(arr[1]);
      setLong(arr[2]);
    }

    async function submit(e) {
      e.preventDefault();
      const { contract,signer } = webApi;
      const contractAddress="0x0bfDAA30C458522F39863e0f9D87E9Ae802fD896"
      const chainContract=await new ethers.Contract(contractAddress,ChainAbi.abi,signer);
      const transaction=await chainContract.requestWeatherData(lat,long,date,time);
      await transaction.wait();
      const myTimeout = setTimeout(myGreeting, 20000);

      async function myGreeting() {
        try{
          const ntransaction=await contract.claim(
            '0xB640Cf3d2BEEcf5335bc14d9334CD99baf6e4f2E',
            data.id,
            "",
            date
          )
          await ntransaction.wait();
          console.log(ntransaction)
          setLoad(true)

        }catch(e){
          console.log(e);
          alert("Unsuccesful");
        }
      }
      
    }
    if(load){
      return (
        <h1 className="text-xl border-2 border-black p-4">Completed</h1>
      )
    }

    return (
      <div className="border-4 text-gray-700 flex justify-center font-mono align-center text-lg border-green-500 rounded-lg bg-gray-100">
        <form action="" method="post" className="text-xl" onSubmit={submit}>
          <div>
            <h1 className="text-center border-2  p-4 w-1/3  border-black m-auto mt-2">
              Location:{" "}
            </h1>
            <div className="text-center">
              <h1 className="inline-block border-2 border-black p-4 mt-2 ">
                lat: {lat}
              </h1>
              <h1 className="inline-block border-2 border-black p-4 mt-2 ">
                long: {long}
              </h1>
            </div>
          </div>
          <div className="text-center border-2 border-black w-3/5 p-4 m-auto mt-2">
            <label htmlFor="time">Enter the date and time: </label>
            <input
              type="datetime-local"
              id="time"
              name="time"
              className="border-2 border-black"
              required
              onChange={(e) => {
                let dateTime = e.target.value;
                let arr = dateTime.split("T");
                setDate(arr[0]);
                console.log(arr[0]);
                let narr = arr[1].split(":");
                setTime(narr[0]);
                console.log(narr[0]);
              }}
            ></input>
          </div>

          <button
            type="submit"
            className="border-2 text-xl border-black mt-2 block w-1/3 p-2 m-auto mb-2  text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
