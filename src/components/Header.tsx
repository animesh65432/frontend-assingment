import React from "react";
import { Search } from "lucide-react";

const Header: React.FC = () => {
    return (
        <header className="flex w-full h-[10vh] xl:p-8 p-4 justify-around items-center">
            <nav className="flex justify-between w-[40%] items-center text-black font-semibold">
                <img
                    src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png"
                    alt="Slack Logo"
                    className="h-8"
                />
                <select name="products" id="products" className="border px-2 py-1 rounded">
                    <option value="products">PRODUCTS</option>
                </select>
                <span>Enterprise</span>
                <span>Resources</span>
                <span>Pricing</span>
            </nav>
            <div className="flex xl:justify-around w-[40%] items-center font-semibold space-x-10">
                <Search className="cursor-pointer" />
                <span>Sign in</span>
                <div className="h-[7vh] xl:flex hidden items-center justify-center border border-fuchsia-900 px-4 rounded-md text-fuchsia-800">
                    TALK TO SALES
                </div>
                <div className="h-[7vh] flex text-white items-center justify-center border bg-fuchsia-900 px-4 rounded-md">
                    TRY FOR FREE
                </div>
            </div>
        </header>
    );
};

export default Header;
