import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Form from "./Form";

export default function Policy1({account,webApi}) {
  return (
    <>
      <div className="w-5/6 m-auto">
        <p className="text-center text-2xl text-orange-900 mt-4 font-bold">1st POLICY (4 MONTHS)</p>
        <div className="flex justify-between mt-5">
          <div className="w-2/5 inline-block">
            <p className="text-center text-xl font-bold p-1 text-stone-600 ml-10 ">Policy View</p>
            <table className="text-lg ">
              <thead>
                <tr className="bg-blue-100 ">
                  <th className="w-2/5 border-2 border-black p-4 ">Months</th>
                  <th className="w-2/5 border-2 border-black text-base p-4 ">
                    EMI (monthly) (in Rupees) (per month) 
                  </th>
                  <th className="w-2/5 border-2 border-black p-4">Duration</th>
                </tr>
              </thead>
              <tbody className="text-zinc-800">
                <tr>
                  <td className="border-2 border-black  w-2/5 p-4">1st month</td>
                  <td className="border-2 border-black  w-2/5 p-4">10000</td>
                  <td className="border-2 border-black  w-2/5 p-4">[1day-30day]</td>
                </tr>
                <tr className="bg-neutral-300">
                  <td className="border-2 border-black  w-2/5 p-4">2nd month</td>
                  <td className="border-2 border-black  w-2/5 p-4">10000</td>
                  <td className="border-2 border-black  w-2/5 p-4">[31day-60day]</td>
                </tr>
                <tr>
                  <td className="border-2 border-black  w-2/5 p-4">3rd month</td>
                  <td className="border-2 border-black  w-2/5 p-4">10000</td>
                  <td className="border-2 border-black  w-2/5 p-4">[61day-90day]</td>
                </tr>
                <tr className="bg-neutral-300">
                  <td className="border-2 border-black  w-2/5 p-4">4th month</td>
                  <td className="border-2 border-black  w-2/5 p-4">10000</td>
                  <td className="border-2 border-black  w-2/5 p-4">[91day-120day]</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-2/5 inline-block">
            <p className="text-center text-xl font-bold  p-1 text-stone-600 ml-16">
              Claim Settlement
            </p>
            <table className="text-lg w-full">
              <thead>
                <tr className="bg-blue-100">
                  <th className="w-2/5 border-2 border-black p-4">
                    Windspeed (per hour)
                  </th>
                  <th className="w-2/5 border-2 border-black p-4 ">
                    Rainfall (in mm)
                  </th>
                  <th className="w-2/5 border-2 border-black p-4 ">
                    Status (in Rupees)
                  </th>
                </tr>
              </thead>
              <tbody className="text-zinc-800">
                <tr>
                  <td className=" w-2/5 border-2 border-black p-4">Less than 45km</td>
                  <td className=" w-2/5 border-2 border-black p-4">
                    Less than 300-400 mm
                  </td>
                  <td className=" w-2/5 border-2 border-black p-4">NULL</td>
                </tr>
                <tr className="bg-neutral-300">
                  <td className="w-2/5 border-2 border-black p-4">46km-87km </td>
                  <td className=" w-2/5 border-2 border-black p-4">401mm-500mm</td>
                  <td className="w-2/5 border-2 border-black p-4">80000</td>
                </tr>
                <tr>
                  <td className="w-2/5 border-2 border-black p-4">88km-102km</td>
                  <td className=" w-2/5 border-2 border-black p-4">501mm-600mm </td>
                  <td className="w-2/5 border-2 border-black p-4">100000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Popup
          trigger={
            <button className="text-lg p-4 border-2 border-black bg- w-full block m-auto my-4  text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mt-10 mb-10">
              Register
            </button>
          }
          modal nested
        >{
            close=>(<Form account={account} webApi={webApi} months={4}/>)
        }

        </Popup>
      </div>
    </>
  );
}