import {AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai"
import blackMeta from "../assets/black_meta.svg"
import {FaFacebookF} from "react-icons/fa"

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="bg-[#1D1D1E]">
                <div className="md:flex justify-between px-20 py-10">
                    <div>
                        <img src={blackMeta} alt="" className=""/>
                        <div className="md:mt-20 mt-8">
                            <ul className="flex gap-4">
                                <li><FaFacebookF className="fill-white"/></li>
                                <li><AiOutlineInstagram className="fill-white"/></li>
                                <li><AiOutlineTwitter className="fill-white"/></li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <p className="text-white font-normal text-sm "> &copy; 2022 Metabnb</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <ul className="flex flex-col gap-1.5">
                            <li className="font-bold text-white text-lg mb-4">Community</li>
                            <li className="text-sm font-normal text-white">NFT</li>
                            <li className="text-sm font-normal text-white">Tokens</li>
                            <li className="text-sm font-normal text-white">Lanlords</li>
                            <li className="text-sm font-normal text-white">Discord</li>
                        </ul>
                    </div>

                    <div className="mt-2">
                        <ul className="flex flex-col gap-1.5">
                            <li className="font-bold text-white text-lg mb-4">Places</li>
                            <li className="text-sm font-normal text-white">Castle</li>
                            <li className="text-sm font-normal text-white">Farms</li>
                            <li className="text-sm font-normal text-white">Beach</li>
                            <li className="text-sm font-normal text-white">Learn more</li>
                        </ul>
                    </div>

                    <div className="mt-2">
                        <ul className="flex flex-col gap-1.5">
                            <li className="font-bold text-white text-lg mb-4">About us</li>
                            <li className="text-sm font-normal text-white">Road map</li>
                            <li className="text-sm font-normal text-white">Creators</li>
                            <li className="text-sm font-normal text-white">Career</li>
                            <li className="text-sm font-normal text-white">Contact us</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Footer;