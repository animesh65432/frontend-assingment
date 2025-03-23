import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="h-[25vh] flex flex-col md:flex-row items-center md:justify-center space-y-6 md:space-y-0 md:gap-4 mb-2">

            <div className="max-w-lg space-y-4">
                <h1 className="text-2xl font-bold text-gray-900">
                    Slack is Where the Future Works
                </h1>
                <p className="text-gray-700">
                    Transform the way you work with one place for everyone and everything you need to get stuff done.
                </p>
                <div className="flex items-center gap-2">
                    <div className="h-10 flex text-white items-center justify-center bg-fuchsia-900 px-6 py-2  cursor-pointer hover:bg-fuchsia-800 transition">
                        TRY FOR FREE
                    </div>
                    <div className="h-10 flex justify-between text-white items-center  bg-blue-800 px-6 py-2  cursor-pointer hover:bg-blue-900 transition">
                        <div><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="h-7 w-7" /></div>
                        <div>SIGN UP WITH GOOGLE</div>
                    </div>
                </div>
            </div>

            <div className="h-[25vh] w-[30%]">
                <video
                    src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-md shadow-lg"
                />
            </div>
        </section>
    );
};

export default Hero;
