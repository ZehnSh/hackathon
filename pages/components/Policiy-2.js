import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Form from "./Form";

export default function Policy2({account,webApi}) {
    console.log(account+"sdfaf")
    return (
      <>
        <div className="w-5/6 m-auto">
          <p className="text-center text-xl font-bold">2nd POLICY (6 MONTHS)</p>
          <div className="flex justify-between">
            <div className="w-2/5 inline-block">
              <p className="text-center text-lg font-bold p-1">Policy view</p>
              <table className="text-lg">
                <thead>
                  <tr>
                    <th className="w-1/3 border-2 border-black ">Months</th>
                    <th className="w-1/3 border-2 border-black text-base">
                      EMI (monthly) (in USDT) (per month) [10% of area (in
                      sq.feet)]
                    </th>
                    <th className="w-1/3 border-2 border-black ">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-black p-1">1st month</td>
                    <td className="border-2 border-black p-1">9000</td>
                    <td className="border-2 border-black p-1">[1day-30day]</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-1">2nd month</td>
                    <td className="border-2 border-black p-1">9000</td>
                    <td className="border-2 border-black p-1">[31day-60day]</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-1">3rd month</td>
                    <td className="border-2 border-black p-1">9000</td>
                    <td className="border-2 border-black p-1">[61day-90day]</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-1">4th month</td>
                    <td className="border-2 border-black p-1">9000</td>
                    <td className="border-2 border-black p-1">[91day-120day]</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-1">5th month</td>
                    <td className="border-2 border-black p-1">9000</td>
                    <td className="border-2 border-black p-1">[121day-150day]</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-1">6th month</td>
                    <td className="border-2 border-black p-1">9000</td>
                    <td className="border-2 border-black p-1">[151day-180day]</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-2/5 inline-block">
              <p className="text-center text-lg font-bold p-1">
                Claim Settlement
              </p>
              <table className="text-lg w-full">
                <thead>
                  <tr>
                    <th className="w-1/3 border-2 border-black ">
                      Windspeed (per hour)
                    </th>
                    <th className="w-1/3 border-2 border-black ">
                      Rainfall (in mm)
                    </th>
                    <th className="w-1/3 border-2 border-black ">
                      Status (in usdt)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-black p-1">Less than 45km</td>
                    <td className="border-2 border-black p-1">
                      Less than 300-400 mm
                    </td>
                    <td className="border-2 border-black p-1">NULL</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-1">46km-87km </td>
                    <td className="border-2 border-black p-1">401mm-500mm</td>
                    <td className="border-2 border-black p-1">90,000</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-1">88km-102km</td>
                    <td className="border-2 border-black p-1">501mm-600mm </td>
                    <td className="border-2 border-black p-1">1,25,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Popup
          trigger={
            <button className="text-lg p-4 border-2 border-black w-full block m-auto my-4">
              Register
            </button>
          }
          modal nested
        >{
            close=>(<Form account={account} webApi={webApi} months={6}/>)
        }

        </Popup>
        </div>
      </>
    );
  }
  