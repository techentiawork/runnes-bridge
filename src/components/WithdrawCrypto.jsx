import { i1, i2, sidea, swap, swapt } from "../assets";
import Sidebar from "./Sidebar";

function WithdrawCrypto() {
    return (
        <div className="">
            <div className="lg:px-16 lg:py-7 py-4 md:px-8 px-4 w-full flex justify-between md:gap-10 gap-6 md:flex-row flex-col">
                <Sidebar />
                <div className="flex flex-col gap-8 w-full">
                    <div className="min-h-[238px] withdraw-bg p-8 rounded-2xl border border-[#d9d9d9] flex-col justify-start items-start gap-2.5 hidden md:inline-flex">
                        <div className="min-h-[174px] flex-col justify-start items-start gap-8 flex">
                            <div className="min-h-[94px] flex-col justify-start items-start gap-4 flex">
                                <div className="text-[#232323] text-[32px] font-bold font-bricolage leading-relaxed">IMPORTANT INFORMATION WITHDRAW CYPOTO </div>
                                <div className="text-[#444444] text-lg font-normal font-inter leading-relaxed">RunesBridge is at the forefront of blockchain interoperability, leveraging new technology, pioneering the creation of bridges connecting disparate networks (EVMs) to the Bitcoin network through the innovative Runes Protocol</div>
                            </div>
                            <div className="wallet-btn">Wallet</div>
                        </div>
                    </div>
                    <div className="min-h-[308px] w-full p-6 bg-[#f4f4f4] rounded-2xl border border-[#d9d9d9] flex-col justify-center items-start md:gap-8 gap-12 inline-flex">
                        <div className="justify-between items-center w-full flex xl:flex-row flex-col md:gap-5 gap-3">
                            <div className="xl:w-[351px] w-full max-w-full md:min-h-[122px] flex flex-col gap-4 md:gap-[13px]">
                                <div className=" text-black md:text-2xl text-[16px] font-semibold font-bricolage leading-tight flex gap-2 items-center">
                                    <div className="flex gap-2 items-center w-full">
                                        <img src={i1} alt="icon" className="md:hidden" />
                                        <span className="">From</span>
                                    </div>
                                    <div className=" w-full md:hidden">
                                        <span className="text-[#0088cc] text-sm font-medium font-inter leading-tight">Max. </span>
                                        <span className="text-[#5a585a] text-sm font-normal font-inter leading-tight">102.564 TON</span>
                                    </div>
                                </div>

                                <div className=" text-black text-sm font-medium font-inter md:block hidden leading-tight">Select your coin</div>
                                <div>
                                    <div className="xl:w-[351px] w-full max-w-full p-4 bg-white rounded-xl border border-[#bcbcbc] justify-between items-center inline-flex">
                                        <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                            <input className="placeholder:text-[#bcbcbc] border-none outline-none text-sm font-medium font-inter leading-tight" placeholder="TON" />
                                        </div>
                                        <img src={sidea} alt="Arrow" className="w-6 h-6 relative origin-top-left" />
                                    </div>
                                    <div className="text-[#5a585a] pt-1 md:hidden text-xs font-normal font-inter leading-tight">1 TON = 5.23569 USDT</div>
                                </div>


                            </div>
                            <div className="flex w-full lg:justify-center relative justify-end lg:h-auto">
                                <div className="w-full absolute lg:hidden h-[1px] bg-[#ccc] top-[50%] left-0"></div>
                                <img src={swap} alt="Swap" className="w-10 px-[8.32px] h-[42px] mr-4 relative py-[9.70px] bg-white rounded-[19.41px] flex-col justify-start items-start gap-[6.93px] inline-flex lg:rotate-90 rotate-0" />
                            </div>
                            <div className="xl:w-[351px] w-full max-w-full md:min-h-[122px] flex flex-col gap-4 md:gap-[13px]">
                                <div className=" text-black md:text-2xl text-[16px] font-semibold font-bricolage leading-tight flex gap-2 items-center">
                                    <div className="flex gap-2 items-center w-full">
                                        <img src={i2} alt="icon" className="md:hidden" />
                                        <span className="">To</span>
                                    </div>
                                </div>
                                <div className=" text-black text-sm font-medium font-inter md:block hidden leading-tight">Select your coin</div>
                                <div className="xl:w-[351px] w-full max-w-full p-4 bg-white rounded-xl border border-[#bcbcbc] justify-between items-center inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <input className="placeholder:text-[#bcbcbc] border-none outline-none text-sm font-medium font-inter leading-tight" placeholder="USDT" />
                                    </div>
                                    <img src={sidea} alt="Arrow" className="w-6 h-6 relative origin-top-left" />
                                </div>


                            </div>
                        </div>
                        <div className="justify-start hidden items-center gap-2 md:inline-flex">
                            <div className="text-[#444444] text-lg font-normal font-inter leading-relaxed">1 TON = 4.686 USDT</div>
                            <img src={swapt} alt="Swap Thin" className="w-6 h-6 relative" />
                        </div>
                        <div className="swap transition-all duration-200 md:w-fit w-full flex justify-center">Swap</div>
                    </div>
                    <div className="3xl:w-[1027px] max-w-full lg:pt-8 pt-2 flex-col justify-start items-start gap-4 lg:gap-6 inline-flex">
                        <div className="h-[0px] w-full border border-[#bcbcbc]"></div>
                        <div className="flex-col justify-start items-start gap-4 lg:gap-8 flex">
                            <div className="lg:text-xl md:text-[17px] text-[14px]">
                                <span className="text-[#444444] font-bold font-inter">Step 1:
                                </span>
                                <span className="text-[#444444] font-normal font-inter">Transfer Runes to Pool Bridge (Wallet address for transferring Runes must be owned by you - meaning you own the private key, do not transfer Runes from exchanges or other wallets that you do not own)
                                </span>
                            </div>
                            <div className="lg:text-xl md:text-[17px] text-[14px]">
                                <span className="text-[#444444] font-bold font-inter">Step 2:
                                </span>
                                <span className="text-[#444444] font-normal font-inter">After the transfer reaches 1-2 block confirmations, you need to connect to the Bitcoin wallet from which you just transferred Runes to the Pool Bridge. Check History and add Ethereum wallet address to Claim by signing an off-chain transaction on your Bitcoin wallet
                                </span>
                            </div>
                            <div className="lg:text-xl md:text-[17px] text-[14px]">
                                <span className="text-[#444444] font-bold font-inter">Step 3:
                                </span>
                                <span className="text-[#444444] font-normal font-inter">Connect to the Ethereum wallet you just provided in Step 2. Check the History and Claim your tokens to the Ethereum wallet
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="md:px-10 lg:pt-8 pt-2">
                        <div className="w-full max-w-full lg:min-h-[242px] flex-col justify-center items-center gap-4 lg:gap-8 inline-flex md:bg-transparent bg-[#F4F4F4] rounded-[16px] p-4">
                            <div className="lg:min-h-[138px] w-full flex-col justify-start items-center lg:gap-12 gap-3 flex">
                                <div className="text-center text-[#1f1f1f] md:text-[18px] text-[12px] lg:text-2xl  font-bold font-inter">HISTORY</div>
                                <div className="h-[0px] border border-[#d9d9d9] w-full lg:hidden"></div>
                                <div className="grid grid-cols-3 w-full gap-3">
                                    <div className="group hover:bg-[#232323] transition-all duration-200 lg:min-h-[61px] lg:px-8 py-2 lg:py-4 bg-white rounded-[8px] lg:rounded-2xl justify-center items-center gap-2.5 flex">
                                        <div className="text-[#5a585a] group-hover:text-white md:text-[18px] text-[12px] lg:text-2xl font-bold font-inter">Zetachain, ETH</div>
                                    </div>
                                    <div className="group hover:bg-[#fff] transition-all duration-200 lg:min-h-[61px] lg:px-8 py-2 lg:py-4 bg-[#232323] rounded-[8px] lg:rounded-2xl justify-center items-center gap-2.5 flex">
                                        <div className="text-white group-hover:text-[#5a585a] md:text-[18px] text-[12px] lg:text-2xl font-bold font-inter">Bitcoin</div>
                                    </div>
                                    <div className="group hover:bg-[#232323] transition-all duration-200 lg:min-h-[61px] lg:px-8 py-2 lg:py-4 bg-white rounded-[8px] lg:rounded-2xl justify-center items-center gap-2.5 flex">
                                        <div className="text-[#5a585a] group-hover:text-white md:text-[18px] text-[12px] lg:text-2xl font-bold font-inter">Ton chain</div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-72 w-fit max-w-full lg:px-20 px-7 lg:py-6 py-3 bg-white group hover:bg-[#1f1f1f] transition-all duration-200 rounded-[60px] shadow border border-[#1f1f1f] justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-[#1f1f1f] group-hover:text-white lg:text-xl  md:text-[18px] text-[12px]  font-semibold font-inter">Connect BTC</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default WithdrawCrypto;