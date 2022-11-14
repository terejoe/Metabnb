import houseIcon from "../assets/house_icon.svg"
import metaBnb from "../assets/meta_bnb.svg";
import Group from "../assets/Group.svg"

const Navbar = () => {
    return ( 
        <div className="navbar md:p-6 p-2">
            <div className="p-4 flex justify-between w-full">
                <div className="hidden md:flex">
                    <img className="" src={Group} alt="Web Logo"/>
                </div>

                <div className="mt-1">
                    <ul className="flex gap-2 md:gap-10">
                        <li className="md:text-xl text-xs text-[#434343] font-normal">Home</li>
                        <li className="md:text-xl text-xs text-[#434343] font-normal">Place to stay</li>
                        <li className="md:text-xl text-xs text-[#434343] font-normal">NFTs</li>
                        <li className="md:text-xl text-xs text-[#434343] font-normal">Community</li>
                    </ul>
                </div>

                <div className="mt-1">
                    <button className="bg-[#A02279] text-white font-normal text-sm py-2 px-4 rounded-lg">Connect wallet</button>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;