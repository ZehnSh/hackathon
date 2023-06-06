import { useRef, useState } from "react";

export default function Form({ account, months }) {
  const [flag, setFlag] = useState(false);
  const lat = useRef();
  const long = useRef(); //document.getElementById("checkbox").checked = true;

  if (account == "") {
    return (
      <h2 className="h-28 text-2xl text-center pt-10 bg-slate-200">
        Please Connect your Wallet
      </h2>
    );
  }

  function change() {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          lat.current = position.coords.latitude;
          long.current = position.coords.longitude;
          console.log(lat.current)
          console.log(long.current)
        });
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    getLocation();
    console.log(lat.current*10000000)
    console.log(long.current*10000000)
    if (lat.current != null) setFlag(true);
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
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  let month = date.getMonth() + months;
  let year = date.getFullYear();
  if (month > 12) {
    month = month - 12;
    year = year + 1;
  }
  const maturityDate = date.getDate() + "/" + month + "/" + year;

  return (
    <div className=" border-2 border-black">
      <form action="" method="post" className="text-lg">
        <div className="w-[550px] m-auto border-2 border-black text-center p-2 text-lg mt-2 rounded-md">
          <h4>Account: {account}</h4>
        </div>
        <div className="w-4/5 m-auto">
          <div className="mt-2">
            <h4 className="inline-block border-2 border-black p-2 px-6 w-1/3 h-14">
              Start Date: {currentDate}
            </h4>
            <h4 className="inline-block border-2 border-black p-2 px-6 w-1/3 h-14">
              Period of Time: {months} months
            </h4>
            <h4 className="inline-block border-2 border-black p-2 px-6 w-1/3 h-14">
              Maturity Date: {maturityDate}
            </h4>
          </div>

          <div className="">
            <div className="w-1/2 border-2 border-black p-[14px] h-14 inline-block">
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
              className="w-1/2 border-2 border-black p-3 h-14"
            >
              <option value="select">Seeds Data</option>
              <option value="Rabi">Rabi</option>
              <option value="Kharif">Kharif</option>
            </select>
          </div>
          <div>
            <div className="p-1 border-2 border-black w-1/2 inline-block h-14">
              <label htmlFor="seedsQuatity">Area of Land: </label>
              <input
                type="number"
                name="seedsQuatity"
                id="seedsQuatity"
                className="p-[8px] border-2 border-black w-[290px]"
                required
              />
            </div>
            <div className="p-1 border-2 border-black w-1/2 inline-block h-14">
              <label htmlFor="seedsQuatity">Seeds QTY.: </label>
              <input
                type="number"
                name="seedsQuatity"
                id="seedsQuatity"
                className="p-[8px] border-2 border-black w-[300px]"
                required
              />
            </div>
          </div>
          <div className="">
            <div className="p-1 border-2 border-black w-full inline-block h-24">
              <h3 className="">Address: </h3>
              {/* <textarea name="address" id="address" className="w-4/5  border-2 border-black">saf<textarea/> */}
              <textarea
                name="address"
                id="address"
                cols="0"
                rows="0"
                className="w-full h-14 border-2 border-black "
                required
              ></textarea>
            </div>
          </div>
          <div className="p-1 border-2 border-black w-full inline-block h-20">
            <label htmlFor="landPhoto">Photo of Land: </label>
            <input
              type="file"
              name="landPhoto"
              id="landPhoto"
              className=""
              required
            />
          </div>
          <div>
            <h4 className="inline-block border-2 border-black p-2 px-6 w-1/2 h-20">
              Ether to Pay (per Month): {emi}
            </h4>
            <h4 className="inline-block border-2 border-black p-2 px-6 w-1/2 h-20">
              Amount he/she will get: {totalMoney}
            </h4>
          </div>
          <button
            type="submit"
            className="w-5/6 border-2 border-black m-auto block p-3 my-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
