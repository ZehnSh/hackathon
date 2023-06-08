import { useState, useEffect } from "react";
import Abi from "../../abi/INRToken.json";
import { ethers } from "ethers";
import { Contract_Address } from "../../config.js";
import Popup from "reactjs-popup";

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
    const contractAddress = "0x1f0c915A2c3B789af61D9A2D5b666FC4c73711B8";
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
      "0x1f0c915A2c3B789af61D9A2D5b666FC4c73711B8",
      data.id
    );
    await transaction.wait();
    // console.log(allData[i].data.maturityDate.toNumber())
    // console.log(allData[i].data.startDate.toNumber())
    // console.log(Date.now())
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="border-2 border-black">Sr. No.</th>
            <th className="border-2 border-black">Account</th>
            <th className="border-2 border-black">Policy</th>
            <th className="border-2 border-black">Seeds Data</th>
            <th className="border-2 border-black">EMI's</th>
            <th className="border-2 border-black">Claim</th>
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
      <tr>
        <td className="border-2 border-black">{index + 1}.</td>
        <td className="border-2 border-black">{data.data.userWalletAddress}</td>
        <td className="border-2 border-black">
          {data.data.periodTime.toNumber()}
        </td>
        <td className="border-2 border-black">{data.data.seedsData}</td>
        <td className="border-2 border-black p-3">
          {data.data.Amount.toNumber()} (paid) <br />
          <h1 className="inline-block p-2 border-2 border-black">
            {data.installment} no. Installment
          </h1>
          <button
            className="p-2 border-2 border-black "
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
            {(close) => <UserInput data={data} />}
          </Popup>
        </td>
      </tr>
    );
  }

  function UserInput({ data }) {
    return (
      <div>
        <form action="" method="post" className="text-xl">
        <div>
        <h1 className="text-center border-2 border-black p-4 w-1/3 m-auto">Location: </h1>
        <div className="text-center">
        <h1 className="inline-block border-2 border-black p-4 ">lat: {data.data.lat}</h1>
        <h1 className="inline-block border-2 border-black p-4 ">long: {data.data.long}</h1>
        </div>
        </div>
        <div className="text-center border-2 border-black w-1/2 p-4 m-auto">
        <label htmlFor="time">Enter the date and time: </label>
        <input type="datetime-local" id="time" name="time"className="border-2 border-black"></input>
        </div>
      
        <button type="submit" className="border-2 border-black block w-1/3 p-2 m-auto">Submit</button>
        </form>
      </div>
    );
  }
}
