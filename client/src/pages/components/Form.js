import { useState } from "react";
import axios from "axios";
import { Contract_Address, pinata } from "../../config.js";

export default function Form({ account, webApi, months }) {
  const [flag, setFlag] = useState(false);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [fileurl, setFileUrl] = useState("");
  const [seedData, setSeedData] = useState(null);
  const [area, setArea] = useState(null);
  const [seedQt, setSeedQt] = useState(null);
  const [address, setAddress] = useState(null);
  const [succesful, setSuccesful] = useState(false);

  if (account == "") {
    return (
      <button type="button" class=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-4xl rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Please Connect your Wallet!
      </button>
    );
  }

  function change() {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    getLocation();
    console.log(lat);
    console.log(long);
    if (lat != null) setFlag(true);
  }

  let emi;
  let totalMoney;
  if (months == 4) {
    emi = 10000;
    totalMoney = 100000;
  } else {
    emi = 9000;
    totalMoney = 125000;
  }

  const date = new Date();
  const currentDate =
    date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
  let month = date.getMonth() + months;
  let year = date.getFullYear();
  if (month > 12) {
    month = month - 12;
    year = year + 1;
  }

  const maturityDate = date.getDate() + "." + month + "." + year;

  async function uploadImage(e) {
    try {
      let img = e.target.files[0];
      const formData = new FormData();
      formData.append("file", img);
      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: pinata.APIKey,
          pinata_secret_api_key: pinata.APISecret,
          "Content-Type": "multipart/form-data",
        },
      });

      const ImageURL = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
      console.log(ImageURL);
      setFileUrl(ImageURL);
    } catch (err) {
      console.log("error to upload", err);
    }
  }

  async function submit(e) {
    e.preventDefault();
    const nDate = month + "." + date.getDate() + "." + year;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const maturityTimestamp = Math.floor(new Date(nDate).getTime() / 1000);

    const { signer, contract } = webApi;
    console.log("lat- " + lat);
    console.log("long- " + long);
    console.log("fileurl- " + fileurl);
    console.log("seedData- " + seedData);
    console.log("seedQt- " + seedQt);
    console.log("area- " + area);
    console.log("address- " + address);
    console.log(currentTimestamp);
    console.log(maturityTimestamp);
    const naddress=address+'/'+lat+'/'+long
    if (area < 100000) {
      alert("Area should be greater than 100000 sqfeet");
      return;
    }
    try {
      const transaction = await contract.insuranceRegister([
        account,
        currentTimestamp,
        maturityTimestamp,
        months,
        area,
        seedData,
        seedQt,
        fileurl,
        naddress,
        emi,
        90
      ]);
      await transaction.wait();

      setSuccesful(true);
    } catch (e) {
      console.log(e)
      alert("Sorry some error occured, register again");
    }
  }

  if (succesful) {
    return (
      <h1 className="h-20 p-6 text-center text-2xl bg-slate-300">
        Registration succesfull
      </h1>
    );
  }

  return (
    <div className=" border-4 border-green-800 rounded-lg overflow-x-auto  bg-slate-200 p-2 shadow-2xl shadow-slate-700 h-auto ">
      <form action="" method="post" className="text-lg " onSubmit={submit}>
        <div className="  border-2 border-black text-center p-2 font-mono  text-zinc-500 text-xl bg-orange-200 font-bold  rounded-md">
          <h4>Account: {account}</h4>
        </div>
        <div className="  border-2 rounded-lg  ">
          <div className=" flex justify-center font-mono text-xl text-slate-700 ">
            <h4 className="inline-block border-2 border-black p-2  w-1/3 ">
              Start Date: {currentDate}
            </h4>
            <h4 className="inline-block border-2 border-black p-2  w-1/3 ">
              Period of Time: {months} months
            </h4>
            <h4 className="inline-block border-2 border-black p-2 w-1/3 ">
              Maturity Date: {maturityDate}
            </h4>
          </div>

          <div className="">
            <div className="w-1/2 border-2 border-black  font-mono text-xl text-slate-700 p-2  inline-block">
              <input
                type="checkbox"
                name="location"
                id="location"
                value={false}
                required
                checked={flag}
                onChange={change}
              />
              <label htmlFor="location"> Click for location </label>
            </div>

            <select
              name="seedData"
              id="seedData"
              className="w-1/2 border-2 border-black p-2 font-mono text-xl  text-slate-700"
              onChange={(e) => {
                console.log(e.target.value)
                setSeedData(e.target.value);
              }}
            >
              <option value="select">Seeds Data</option>
              <option value="Rice">Rice</option>
              <option value="Wheat">Wheat</option>
            </select>
          </div>
          <div>
            <div className=" border-2 border-black w-1/2 inline-block font-mono text-xl text-slate-700 p-2 ">
              <label htmlFor="seedsQuatity">Area of Land: </label>
              <input
                type="number"
                name="seedsQuatity"
                id="seedsQuatity"
                className="p-[8px] border-2 border-black w-[200px]"
                required
                onChange={(e) => {
                    setArea(e.target.value);
                  }}
              />
            </div>
            <div className=" border-2 border-black w-1/2 inline-block font-mono text-xl text-slate-700 p-2 ">
              <label htmlFor="seedsQuatity">Seeds QTY.: </label>
              <input
                type="number"
                name="seedsQuatity"
                id="seedsQuatity"
                className="p-[8px] border-2 border-black w-[200px]"
                required
                onChange={(e) => {
                    setSeedQt(e.target.value);
                  }}
              />
            </div>
          </div>
          <div className="">
            <div className=" border-2 border-black w-full inline-block font-mono text-xl text-slate-700 p-2 ">
              <h3 className="">Address: </h3>
              {/* <textarea name="address" id="address" className="w-4/5  border-2 border-black">saf<textarea/> */}
              <textarea
                name="address"
                id="address"
                cols="0"
                rows="0"
                className="w-full h-14 border-2 border-black "
                required
                onChange={(e) => {
                    setAddress(e.target.value);
                  }}
              ></textarea>
            </div>
          </div>
          <div className=" border-2 border-black w-full inline-block font-mono text-xl text-slate-700 p-2 ">
            <label htmlFor="landPhoto">Photo of Land: </label>
            <input
              type="file"
              name="landPhoto"
              id="landPhoto"
              className=""
              required
              onChange={(e) => {
                uploadImage(e);
              }}
            />
          </div>
          <div>
            <h4 className="inline-block border-2 border-black  px-6 w-1/2 font-mono text-xl text-slate-700 p-2 ">
              Amount to Pay (per Month): {emi}
            </h4>
            <h4 className="inline-block border-2 border-black px-6 w-1/2 font-mono text-xl text-slate-700 p-2 ">
              Amount he/she will get: {totalMoney}
            </h4>
          </div>
          <button
            type="submit"
            className="w-5/6 border-2 border-black m-auto block p-2 my-2 rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
