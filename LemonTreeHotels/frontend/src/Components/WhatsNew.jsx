import React from 'react';
import WhatsNewImg from '../Images/whatsnew.jpg';


const WhatsNew = () => {
    return (
        <div className="px-2 my-6 sm:px-6 md:px-16 lg:px-24 xl:px-32 h-auto w-full">
              <h1 className="text-center text-4xl py-5 font-semibold text-gray-700">
                What's New
              </h1>
              <div className="flex flex-col md:flex-row my-4">
                {/* Left Section */}
                <div className="w-full md:w-1/2 px-4">
                  <h5 className="font-bold text-gray-700 mb-4 text-lg">
                    A New Beginning and Fresh Expectation
                  </h5>
                  <p className="mb-4 font-semibold text-md text-gray-700">
                    As we enter January, we embrace the promise of a new year filled
                    with opportunities, growth, and hope. It is a time to reset, renew,
                    and reimagine our goals. January also brings the significance of
                    Republic Day, a day to honour the spirit of India's democracy, the
                    Constitution, and the values that bind us as a nation. We are also
                    excited to announce our latest additions in Kufri, Pavagadh, Bhuj,
                    Shillong, Ranchi, Mirik, Bapane.
                  </p>
                  <p className="mb-4 font-semibold text-md text-gray-700">
                    We look forward to having you visit our hotels and creating memories
                    with us.
                  </p>
                  <button className="bg-[#d7b56d] hover:bg-[#dda734] p-1 px-2 text-md text-sm font-semibold rounded-md border-2 border-white my-4">
                    Click Here For More Details
                  </button>
                  <p className="text-gray-500">
                    *Best viewed on a desktop or in landscape mode on a mobile
                  </p>
                </div>
        
                {/* Right Section */}
                <div className="w-full md:w-1/2 p-4 h-[20rem] flex justify-center items-center">
                  <img
                    src={WhatsNewImg}
                    className="h-full w-auto rounded-xl shadow-md shadow-gray-600"
                    alt="What's New"
                  />
                </div>
              </div>
            </div>
    )
}

export default WhatsNew;