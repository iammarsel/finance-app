/* eslint-disable react/jsx-key */

import axios from "axios";
import { useEffect, useState } from "react";
//import Sidebar from './Sidebar';
function Home() {
  const [EntryList, setEntryList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/entries").then((response) => {
      setEntryList(response.data)
    })
  }, [])

  return (
    <div className='text-center'>
      <p className='text-pink-300'>Transactions</p>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Amount
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Type
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {EntryList.map((value) => (
                    <tr className="border-b">
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {value.title}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {value.amount}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {value.tag}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {value.createdAt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Home