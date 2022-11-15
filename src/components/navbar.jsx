import Group from "../assets/Group.svg"
import metaMask from "../assets/metamask.svg"
import walletConnect from "../assets/wallet_connect.svg"
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Close modal when body of document is clicked
    useEffect(() => {
        document.body.addEventListener("click", () => {
            setShowModal(false)
        })
    })

    const handleClick =(e) => {
        e.stopPropagation()
        setShowModal(true)
    }

    const handleOffClick =(e) =>{
        e.stopPropagation()
        setShowModal(false);
    }

    const handleNavClick =() => {
        setIsNavOpen(true)
    }

    const handleOffNavClick =() =>{
        setIsNavOpen(false)
    }

    return ( 
        <div className="navbar md:p-6 p-2">
            <div className="p-4 flex justify-between w-full">
                <div className="flex">
                    <img className="" src={Group} alt="Web Logo"/>
                </div>

                <div className="mt-1 hidden md:flex">
                    <ul className="flex gap-2 md:gap-10 mt-1">
                        <Link to ="/"><li className="md:text-xl text-xs text-[#434343] font-normal">Home</li></Link>
                        <Link to ="/places"><li className="md:text-xl text-xs text-[#434343] font-normal">Place to stay</li></Link>
                        <Link to ="/"><li className="md:text-xl text-xs text-[#434343] font-normal">NFTs</li></Link>
                        <Link to ="/"><li className="md:text-xl text-xs text-[#434343] font-normal">Community</li></Link>
                    </ul>
                </div>

                <div className="mt-1 hidden md:flex">
                    <button className="bg-[#A02279] text-white font-normal text-sm py-2 px-4 rounded-lg" type="button"
                    onClick={handleClick}>Connect wallet</button>
                </div>

                {/*Hamburger Menu*/}
                <div className="md:hidden z-20 cursor-pointer right-0 fixed pr-3" >
                    { !isNavOpen ?<FaBars className="fill-[#A02279]" size={40} onClick={handleNavClick}/> :  <AiOutlineClose className="fill-[#A02279]" size={40} onClick={handleOffNavClick}/>}
                </div>

                {/*Mobile Menubar */}
                <div className={!isNavOpen ? "hidden" : "top-0 right-0 fixed"}>
                    <ul className="flex flex-col items-center justify-center min-h-[500px] px-20 z-20 bg-[#1D1D1E]">
                        <Link to ="/"><li className="py-6 text-2xl text-[#A02279] font-normal">Home</li></Link>
                        <Link to ="/places"><li className="py-6 text-2xl text-[#A02279] font-normal">Place to stay</li></Link>
                        <Link to ="/"><li className="py-6 text-2xl text-[#A02279] font-normal">NFTs</li></Link>
                        <Link to ="/"><li className="py-6 text-2xl text-[#A02279] font-normal">Community</li></Link>
                        
                        <button className="bg-[#A02279] text-white font-normal text-sm py-2 px-4 rounded-lg" type="button" onClick={handleClick}>Connect wallet</button>
                    </ul>
                </div>
                    
            
            </div>

            <>

                {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-2xl font-bold text-[#333333]">Connect Wallet</h3>
                                    <AiOutlineClose className="mt-2 cursor-pointer" onClick={handleOffClick} size={19}/>
                                </div>
                                <div className="relative p-4 flex-auto">
                                    <p className="font-normal text-base text-[#333333]">Choose your preferred wallet.</p>
                                    <div className="rounded pt-2 pb-3 w-full">
                                        <button className="border border-solid border-[#CFD8DC] bg-[#F8F9FA] px-5 py-1 justify-between gap-44 rounded-xl flex flex-row">
                                            <div className="flex">
                                                <img src={metaMask} className="" alt=""/>
                                                <p className="text-lg font-semibold text-[#000000] m-2">Metamask</p>
                                            </div>
                                            <AiOutlineRight className="fill-[#959DA6] mt-4"/>
                                        </button>

                                        <button className="border border-solid border-[#CFD8DC] bg-[#F8F9FA] px-5 py-1 justify-between gap-36 rounded-xl flex flex-row mt-2">
                                            <div className="flex">
                                                <img src={walletConnect} className="" alt=""/>
                                                <p className="text-lg font-semibold text-[#000000] m-2">Wallet Connect</p>
                                            </div>
                                            <AiOutlineRight className="fill-[#959DA6] mt-4"/>
                                        </button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
                ) : null}
            </>
        </div>
    );
}
 
export default Navbar;