import {IoMdOptions }from "react-icons/io"
import {AiFillStar }from "react-icons/ai"
import {nfts} from "./local"

const Places = () => {
    return ( 
        <div className="places">
            <div className="p-2">
                <div className="navbar p-6 md:px-12">
                    <ul className="md:flex flex-row justify-between
                    grid grid-cols-3">
                        <li className="font-normal md:text-xl text-sm  text-[#434343] mb-1">Restaurant</li>
                        <li className="font-normal md:text-xl text-sm text-[#434343] mb-1">College</li>
                        <li className="font-normal md:text-xl text-sm text-[#434343] mb-1">Castle</li>
                        <li className="font-normal md:text-xl text-sm text-[#434343] mb-1">Fantastic city</li>
                        <li className="font-normal md:text-xl text-sm text-[#434343] mb-1">Beach</li>
                        <li className="font-normal md:text-xl text-sm text-[#434343] mb-1">Carbins</li>
                        <li className="font-normal md:text-xl text-sm text-[#434343] mb-1">Off grid</li>
                        <li className="font-normal md:text-xl text-sm text-[#434343] mb-1">Farm</li>
                        <button className="border border-solid border-[#B4B4B4] px-3 py-1 rounded-md flex justify-between gap-2">
                            <p className="text-[#333333] text-sm md:text-base font-normal ">Location</p>
                            <IoMdOptions className="mt-1"/>
                        </button>
                    </ul>
                </div>

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
        </div>
    );
}
 
export default Places;