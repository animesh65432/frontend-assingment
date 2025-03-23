import React from 'react'

const Footer: React.FC = () => {
    return (
        <div className="w-full h-fit flex justify-center items-cente py-8">
            <div className="w-[65%]  flex flex-col md:flex-row items-center md:items-start justify-between">

                <div className="relative w-full md:w-[25%]">
                    <img
                        src="https://a.slack-edge.com/6b9d9e8/marketing/img/promos/wtny-resource-tile.jpg"
                        alt="Future Growth"
                        className="rounded-md shadow-md w-full"
                    />
                </div>

                <div className="w-full md:w-[50%] space-y-3 text-center md:text-left">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Now is Your Time to Build a Better Tomorrow
                    </h2>
                    <p className="text-gray-700">
                        We've seen what the future can be. Now, these times decide what it will be.
                    </p>

                    <div className="h-[7vh] hidden xl:flex items-center justify-center border border-fuchsia-900 px-4 rounded-md text-fuchsia-800 cursor-pointer hover:bg-fuchsia-50 transition">
                        WATCH DEMO
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;

