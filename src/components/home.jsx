import imgThree from "../assets/img_three.png"
import imgFour from "../assets/img_four.png"
import imgFive from "../assets/img_five.png"
import imgSix from "../assets/img_six.png"
import groupOne from "../assets/group_one.svg"
import groupTwo from "../assets/group_two.svg"
import groupThree from "../assets/group_three.svg"
import {AiFillStar} from "react-icons/ai"
import { nfts } from "./data.js"
import frame from "../assets/frame.svg"


const Home = () => {

    return ( 
        <div className="home w-full">
            <div className="md:mt-24 mt-10 grid lg:grid-cols-2 grid-rows-2 md:gap-32 md:px-10 px-4 overflow-x-hidden">
                <div className="mt-4">
                    <p className="text-5xl md:text-6xl font-normal text-[#434343] leading-tight">Rent a <span className="font-bold text-[#A02279]">Place</span> away from <br/>
                    <span className="font-bold text-[#A02279]">Home</span> in the <span className="font-bold text-[#A02279]">Metaverse</span></p>

                    <p className="hidden md:flex mt-10 text-2xl text-[#434343] font-normal">we provide you access to luxury and affordable houses<br/>in the metaverse, get a chance to turn your<br/>imagination to reality at your comfort zone</p>
                    

                    <div className="md:flex mt-10 input-group flex-wrap max-w-[80%] hidden">
                        <input type="search" className="form-control flex-auto block px-3.5 py-1.5 placeholder:text-sm font-normal border border-solid border-[#A3A3A3] text-[#B8B8B8] rounded-l-lg focus:outline-none p-2" placeholder="Search for location" aria-label="Search"/>
                        <button className="inline-block px-14 py-2.5 bg-[#A02279] text-white font-medium text-sm rounded-r-lg" type="button">Search</button>
                    </div>
                </div>

                <div className="flex gap-4 justify-center">
                    <div className="lg:mt-20 mt-10">
                        <img className="mb-2" src={imgFour} alt="Token One"/>
                        <img className="" src={imgSix} alt="Token Two"/>
                    </div>

                    <div className="">
                        <img className="mb-2" src={imgThree} alt="Token Three"/>
                        <img className="" src={imgFive} alt="Token Four"/>
                    </div>
                </div>
            </div>

            {/* Responsve Mobile View */}
            <div className="md:hidden p-2">
                <p className="mt-12 text-xl text-[#434343] font-normal">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className="flex mt-10 input-group flex-wrap flex-row">
                    <input type="search" className="form-control flex-auto px-3 py-1.5 placeholder:text-sm font-normal border border-solid border-[#A3A3A3] text-[#B8B8B8] rounded-l-lg focus:outline-none p-2" placeholder="Search for location" aria-label="Search"/>
                    <button className="inline-block px-10 py-2.5 bg-[#A02279] text-white font-medium text-sm rounded-r-lg" type="button">Search</button>
                </div>
            </div>

            <div className="bg-[#A02279] md:flex justify-between mt-16 p-2 px-8 hidden">
                <img className="" src={groupOne} alt="Group Token One"/>
                <img className="" src={groupTwo} alt="Group Token Two"/>
                <img className="" src={groupThree} alt="Group Token Three"/>
            </div>

            <div className="bg-[#A02279] flex justify-between mt-16 p-2 px-2 md:hidden">
                <img className="" src={groupOne} alt="Group Token One" width="100px"/>
                <img className="" src={groupTwo} alt="Group Token Two" width="100px"/>
                <img className="" src={groupThree} alt="Group Token Three" width="100px"/>
            </div>

            {/* NFT Section*/}
            <div className="mt-10 p-2">
                <h1 className="md:text-5xl text-2xl text-black font-bold m-auto justify-center flex text-center">Inspiration for your next adventure</h1>
                <div className="mt-6 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4">
                    {nfts.map((nft) => {
                        return(
                            <div className="flex p-1 m-auto justify-center">
                                <div className="p-4 max-w-sm rounded-2xl border border-[#D7D7D7]">
                                    <img className="" alt="" key={nft.id} src={nft.src}/> 
                        
                                
                                    <div className="">
                                        <div className="justify-between flex mt-1">
                                            <p className="text-[#434343] font-normal text-xs">{nft.title}</p>
                                            <p className="text-[#434343] font-bold text-xs">{nft.use}</p>
                                        </div>
                                        <div className="justify-between flex mt-1">
                                            <p className="text-[#434343] font-normal text-xs">{nft.distance}</p>
                                            <p className="text-[#434343] font-normal text-xs">{nft.duration}</p>
                                        </div>
                                        <div className="flex mt-1 gap-1">
                                            <AiFillStar className="fill-[#A02279]" size={14}/>
                                            <AiFillStar className="fill-[#A02279]" size={14}/>
                                            <AiFillStar className="fill-[#A02279]" size={14}/>
                                            <AiFillStar className="fill-[#A02279]" size={14}/>
                                            <AiFillStar className="fill-[#A02279]" size={14}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                        )       
                            
                    })} 

                </div>
                    
                
            </div>

            <div className="bg-[#A02279]">
                <div className="m-auto p-10 md:flex md:justify-between justify-center">
                    <div className="py-24 px-4">
                        <p className="font-bold text-white text-5xl mb-10">Metabnb NFTs</p>
                        <p className="font-normal text-lg text-white mb-12">Discover our NFT gift cards collection. Loyal <br/>
                        customers get amazing gift cards which are <br/>
                        traded as NFTs. These NFTs gives our customer<br/>
                        access to loads of our exclusive services.
                        </p>
                        <button className="bg-white text-[#A02279] px-6 py-2 rounded-lg text-center text-base">Learn more</button>
                    </div>
                    <div>
                        <img className="mb-4" src={frame} alt="Pack Collection" />
                    </div>
                </div>
                
            </div>

            
        </div>
     );
}
 
export default Home;