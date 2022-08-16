import React from 'react'
import { useRef, useEffect } from 'react';
import ScrollToTop from './ScrollToTop';
import { FaBtc } from 'react-icons/fa';
import { GiSuitcase } from 'react-icons/gi';
import { TbCurrencyEthereum } from 'react-icons/tb'
import { AiOutlineStar } from 'react-icons/ai';
import { BsPatchCheckFill } from 'react-icons/bs';
import Toggle from './toggle';
import Carouseltag from './Carouseltag';
import Aos from 'aos';
import "aos/dist/aos.css";


 

function Navbar() {
    const howItWorks = useRef(null);
    const features = useRef(null);
    const tokenomics = useRef(null);
    const roadmaps = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

  return (
    <div className="font-nunito dark:bg-body overflow-hidden">
        <ScrollToTop/>

                         {/* Navbar */}

            
            <div className="flex justify-between items-center max-w[1240]  px-6">
                <div className="flex mt-3">
                <img src={require('../images/logo2.png')} height={100} width={100} className="md:block sm:hidden mx-2 lg:mx-3 cursor-pointer"/>
                <div className="flex ">
                    <ul className="hidden sm:flex sm:visible gap-2 lg:gap-3 lg:mt-8  mx-3">

                    <li onClick={() => scrollToSection(howItWorks)} className=" cursor-pointer text-black dark:text-grey hover:text-blue dark:hover:text-white">How</li>
                    <li onClick={() => scrollToSection(features)}  className="  cursor-pointer text-black dark:text-grey hover:text-blue dark:hover:text-white">Features</li>
                    <li onClick={() => scrollToSection(tokenomics)} className=" cursor-pointer text-black dark:text-grey hover:text-blue dark:hover:text-white">Tokenomics</li>
                    <li onClick={() => scrollToSection(roadmaps)} className="   cursor-pointer text-black dark:text-grey hover:text-blue dark:hover:text-white">Roadmaps</li>

                </ul>  
                </div>
                
                </div>


                <div className="flex mt-2">
             
                    <div className="mx-3 mt-2 lg:mt-0">
                        <Toggle className=" dark:text-gray"/>
                    </div>
                    
                    <div className="grid grid-cols-2 mt-2 lg:mt-0">
                        <a href="http://lincolnsale.com/">
                            <button className="bg-blue rounded  px-1 py-1 text-white font-semibold hover:text-black ">Lightpaper</button>
                        </a>   
                        <a href="https://t.me/lincolnsale">
                            <button className="rounded mx-2 lg:mx-2 md:mx-3 px-1 py-1 dark:hover:text-white hover:text-black font-semibold border-2 text-gray">Telegram</button>
                        </a>   

                    </div>
                </div>
            </div>
            <div className="m-5 relative overflow-hidden ">

                <div className="container-lg text-center relative rounded-lg bg-light dark:bg-middle ">
                    <div className="pt-5">
                    <p className="text-black dark:text-gray mt-6">Find, store and share your crypto in one place</p>
                    <h1 className="text-3xl mt-4 font-semibold dark:text-white">The <div class="text-blue inline text-4xl font-semibold">fully customisable</div> crypto trade and research tool</h1>
                    <p className="text-red mt-8">You won't need 5 tabs any longer</p>
                    <div className="m-10 grid place-items-center">
                           <img src={require('../images/dash.jpg')} className="rounded-lg shadow"/>
                    </div>

                    
                    </div>
                </div>  

            </div> 

                            {/* Navbar ends */}
                            
            <div ref={howItWorks} className="m-5 relative  overflow-hidden ">
            <div class="max-w-[517px] mx-auto text-center">
                <small class="tag text-red tracking-wider dark:text-red">APPLICATION</small> 
                <h1 className="text-2xl text-black dark:text-white mt-2">We're giving you the power <br/> to decide... </h1>
                <p class="mb-3 text-gray mt-2 lg:text-xl m-4 lg:m-8">Cointools keeps the application design easy to learn with features that keep it simple. Browse
                  through thousands of crypto opportunities and keep your eye on the ball with our intuitive app.</p>
                   <a target="_blank" href="t.me/lincolnsale"><button className="dark:hover:text-light border-2 rounded-lg px-2 py-1 text-gray">Join our Telegram</button></a></div>

                    <Carouseltag/>

                        {/* Types of token */}

                    <div className="rounded-lg bg-light dark:bg-middle relative  container-lg mt-20 lg:m-24">
                        <div className="lg:m-24">
                            <div className="m-3">
                                <h1 className="mx-2 text-2xl lg:text-3xl text-black pt-5 lg:text-center lg:pt-10 dark:text-light font-serif mb-3">Types Of Token</h1> 
                                <div class="grid lg:grid-cols-2 gap-5 pt-5">
                                    <div class="bg-white dark:bg-body dark:text-white rounded p-5 text-lg lg:mb-5"data-aos="fade-up">
                                        <div className="flex">
                                        <BsPatchCheckFill className="mx-2 mt-1 text-xl"/>
                                            <h6 className="mb-3">Standard Token</h6>
                                        </div>
                                        
                                        <p class="mb-0 text-sm dark:text-gray"> We’ll help you deploy your token instantly on the eth, bsc, polygon, and fantom network at a cheap rate compared to other platforms.</p>
                                    </div> 
                                        
                                    <div class="bg-white dark:bg-body dark:text-white rounded p-5 text-lg mb-5"data-aos="fade-up">
                                        <div className="flex">
                                        <BsPatchCheckFill className="mx-2 mt-1 text-xl"/>
                                            <h6 className="mb-3">Deflationary Token</h6>    
                                        </div>
                                        <p class="mb-0 text-sm dark:text-gray">We’ll help you generate and deploy with your custom tokenomics and relevant functions to give you control over your token.</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                   
                                {/* How to get started as project owner */}
                   <div className="mt-8 pt-6 m-10 lg:m-20">
                       <h1 className="text-start text-2xl font-serif dark:text-white mb-8">How to get started as project owner</h1>
                 
                        <div className="grid lg:grid-cols-3 gap-10 ">
                            <div className="mt-2">
                            <small class="tag mb-2 block relative">
                                    <div class="text-4xl font-semibold absolute left-0 bottom-0 transform -translate-x-1/2 text-grey  dark:text-opacity-10">
                                    01
                                    </div> 
                                    <p className="text-red mx-3 text-sm relative">CONNECT</p>
                                </small> 
                                <h3 className="dark:text-white">Connect your wallet</h3>
                                <p className="dark:text-grey text-sm mt-2">Using Metamask, you will have the ability to see your connected address appear in our dashboard automatically.</p>
                                <div className="bg-light dark:bg-black rounded-lg mt-3 mb-3 lg:w-100 lg:h-46">
                                <img src={require('../images/img1.png').default}/>
                                </div>
                                
                            </div>
                            <div className="mt-2">
                                <small class="tag mb-2 block relative">
                                    <div class="text-4xl font-semibold absolute left-0 bottom-0 transform -translate-x-1/2 text-grey  dark:text-opacity-10">
                                    02
                                    </div> 
                                    <p className="text-red mx-3 text-sm relative">CREATE A TOKEN</p>
                                </small> 
                                <h3 className="dark:text-white">Click on token creation</h3>
                                <p className="dark:text-grey text-sm mt-2">Fill all required fields in the information box that will be shown to you and click on proceed to automatically create your custom token..</p>
                                <div className="bg-light dark:bg-black rounded-lg mt-3 mb-3 lg:w-100 lg:h-46">
                                <img src={require('../images/img2.png').default}/>
                                </div>

                            </div>
                            
                        
                            <div className="mt-2">
                                <small class="tag mb-2 block relative">
                                    <div class="text-4xl font-semibold absolute left-0 bottom-0 transform -translate-x-1/2 text-grey dark:text-opacity-10">
                                    03
                                    </div> 
                                    <p className="text-red mx-3 text-sm relative">CREATE TOKEN PRESALE</p>
                                </small> 
                                <h3 className="dark:text-white">Raise fund for your project liquidity </h3>
                                <p className="dark:text-grey mt-2 text-sm">click create token presale and fill information about your presale type. Then click on proceed to list your token for presale.</p>
                                <div className="bg-light dark:bg-black rounded-lg mt-3 mb-3 lg:w-100 lg:h-46">
                                <img src={require('../images/img3.png').default}/>
                                </div>
                            </div>
                        </div>
                   </div>
                                {/* How to get started as investors */}
                   <div className="mt-8 pt-6 m-10 lg:m-20">
                       <h1 className="text-start text-2xl font-serif dark:text-white mb-8">How to get started as an Investor</h1>
                 
                        <div className="grid lg:grid-cols-3 gap-10 ">
                            <div className="mt-2">
                            <small class="tag mb-2 block relative">
                                    <div class="text-4xl font-semibold absolute left-0 bottom-0 transform -translate-x-1/2 text-grey  dark:text-opacity-10">
                                    01
                                    </div> 
                                    <p className="text-red mx-3 text-sm relative">CONNECT</p>
                                </small> 
                                <h3 className="dark:text-white">Connect your wallet</h3>
                                <p className="dark:text-grey text-sm mt-2">Using Metamask, you will have the ability to see your coins appear in your Cointools Portfolio automatically.</p>
                                <div className="bg-light dark:bg-black rounded-lg mt-3 mb-3 lg:w-100 lg:h-46">
                                <img src={require('../images/img1.png').default}/>
                                </div>
                                
                            </div>
                            <div className="mt-2">
                                <small class="tag mb-2 block relative">
                                    <div class="text-4xl font-semibold absolute left-0 bottom-0 transform -translate-x-1/2 text-grey  dark:text-opacity-10">
                                    02
                                    </div> 
                                    <p className="text-red mx-3 text-sm relative">CREATE A TOKEN</p>
                                </small> 
                                <h3 className="dark:text-white">Click on launchpad lists</h3>
                                <p className="dark:text-grey text-sm mt-2">Click on any of the listed projects to invest on, read the token details and visit their social handles and website to verify the authenticity of the project.</p>
                                <div className="bg-light dark:bg-black rounded-lg mt-3 mb-3 lg:w-100 lg:h-46">
                                <img src={require('../images/img2.png').default}/>
                                </div>

                            </div>
                            
                        
                            <div className="mt-2">
                                <small class="tag mb-2 block relative">
                                    <div class="text-4xl font-semibold absolute left-0 bottom-0 transform -translate-x-1/2 text-grey dark:text-opacity-10">
                                    03
                                    </div> 
                                    <p className="text-red mx-3 text-sm relative">INVEST YOUR FUND </p>
                                </small> 
                                <h3 className="dark:text-white">Buy the token</h3>
                                <p className="dark:text-grey mt-2 text-sm">Fill the amount of token you want to buy and click on buy button, then the amount of the token you buys will be send to your wallet automatically with any obstruction if your transaction is successful.</p>
                                <div className="bg-light dark:bg-black rounded-lg mt-3 mb-3 lg:w-100 lg:h-46">
                                <img src={require('../images/img3.png').default}/>
                                </div>
                            </div>
                        </div>
                   </div>

           
            </div>
                                        {/* Features section */}

            <div ref={features} className="m-5 overflow-hidden relative">
                <div className="rounded-lg bg-light relative  container-lg dark:bg-middle">
                   <img src={require('../images/btc.svg').default} className="w-full h-full object-cover absolute rounded-lg imp hidden md:flex md:visible"/>
                <div className="">
                    <div className="relative lg:m-24 lg:pt-8 ">
                        <div className="grid lg:grid-cols-2 ">
                        <div className="m-10 pt-5">
                        <h1 className="text-2xl text-black mb-3 dark:text-white font-serif">Stay on-top of all crypto assets, in one place</h1>
                        <h3 className="text-xl text-gray">Get started with your Technical Analysis and Market Research immediately without first needing to register your account.</h3>
                       </div>

                       <div>
                        <div className="flex gap-5  lg:p-8 m-10  mx-auto px-4 justify-between">
                            <div className="rounded-lg bg-white  dark:bg-body shadow-lg w-full mb-5 lg:w-screen">
                               <div className="flex mx-3 mt-3 place-content-between">
                                 <div className="flex ">
                                    <FaBtc className="h-8 w-8 bg-orange rounded-full"/>
                                    <h1 className="mx-2 text-xl text-black dark:text-white">BTC</h1>        
                                 </div>
                                  <div className="flex">
                                        <GiSuitcase className="dark:text-white"/>
                                        <AiOutlineStar className="hover:text-yellow dark:hover:text-yellow cursor-pointer dark:text-white "/>
                                    </div>
                               </div>

                               <div className="flex pt-8 mx-3 place-content-between">
                                <p className="text-sm text-gray dark:text-white">Price</p>
                                <p className="text-xs text-red dark:text-green">-8.17%</p>
                               </div>
                               <div className="flex mx-3 place-content-between">
                                <img src={require('../images/snake.png')}/>
                                <h3 className="text-black text-sm dark:text-white">$21458</h3>
                                </div>
                                
                               <hr className="mt-6"/>
                               <div className="place-content-end mt-4 mx-3">
                                <p className="text-xs text-gray text-right">Market cap.</p>
                                <h3 className="text-black text-sm text-right dark:text-white">$409529330539</h3>
                                <p className="text-xs text-gray text-right mt-3">Volume</p>
                                <h3 className="text-black text-sm text-right mb-4 dark:text-white">$44436430834</h3>
                               </div>
                               
                            </div>

                            <div className="rounded-lg bg-white dark:bg-body shadow-lg w-full mb-5 lg:w-screen">
                               <div className="flex mx-3 mt-3 place-content-between">
                                 <div className="flex">
                                 <img src={require('../images/bnb.png')} height={30} width={30}/>
               
                                    <h1 className="mx-2 text-xl text-black dark:text-white">BNB</h1>        
                                 </div>
                                  <div className="flex">
                                        <GiSuitcase className="dark:text-white"/>
                                        <AiOutlineStar className="hover:text-yellow dark:hover:text-yellow cursor-pointer dark:text-white "/>
                                    </div>
                               </div>

                               <div className="flex pt-8 mx-3 place-content-between">
                                <p className="text-sm text-gray dark:text-white">Price</p>
                                <p className="text-xs text-red dark:text-green">-3.16%</p>
                               </div>
                               <div className="flex mx-3 place-content-between">
                                <img src={require('../images/snake.png')}/>
                                <h3 className="text-black text-sm dark:text-white">$259.91</h3>
                                </div>
                                
                               <hr className="mt-6"/>
                               <div className="place-content-end mt-4 mx-3">
                                <p className="text-xs text-gray text-right">Market cap.</p>
                                <h3 className="text-black text-sm text-right dark:text-white">$42229768839</h3>
                                <p className="text-xs text-gray text-right mt-3">Volume</p>
                                <h3 className="text-black text-sm text-right mb-4 dark:text-white">$87319725</h3>
                               </div>
                               
                            </div>

                            <div className="rounded-lg bg-white dark:bg-body shadow-lg w-full mb-5 lg:w-screen">
                               <div className="flex mx-3 mt-3 place-content-between">
                                 <div className="flex ">
                                    <TbCurrencyEthereum className="h-8 w-8 bg-blue rounded-full"/>
                                    <h1 className="mx-2 text-xl text-black dark:text-white">ETH</h1>        
                                 </div>
                                  <div className="flex">
                                        <GiSuitcase className="dark:text-white"/>
                                        <AiOutlineStar className="hover:text-yellow dark:hover:text-yellow cursor-pointer dark:text-white "/>
                                    </div>
                               </div>

                               <div className="flex pt-8 mx-3 place-content-between">
                                <p className="text-sm text-gray">Price</p>
                                <p className="text-xs text-red dark:text-green">-3.42%</p>
                               </div>
                               <div className="flex mx-3 place-content-between">
                                <img src={require('../images/snake.png')}/>
                                <h3 className="text-black text-sm dark:text-white">$1489.9</h3>
                                </div>
                                
                               <hr className="mt-6"/>
                               <div className="place-content-end mt-4 mx-3">
                                <p className="text-xs text-gray text-right">Market cap.</p>
                                <h3 className="text-black text-sm text-right dark:text-white">$178465092518</h3>
                                <p className="text-xs text-gray text-right mt-3">Volume</p>
                                <h3 className="text-black text-sm text-right mb-4 dark:text-white">$159249233564</h3>
                               </div>
                               
                            </div>

                          
                           
                        </div>

                        
                       </div>   
                        </div>

                        <div className="grid lg:grid-cols-3 gap-5 mx-3 ">
                        <div className="m-3">
                            <div className="flex">
                             <h3 className="text-black mt-1 dark:text-white">Token creation</h3>   
                            </div>
                            
                            <p className="text-gray mb-2 mt-2 text-sm"> Create your custom token of your choice network instantly without any prior code or smart contract knowledge.</p>
                        </div>
                        <div className="m-3">
                            <div className="flex">
                               <h3 className="text-black mt-1 dark:text-white">Token sale</h3>  
                            </div>                      
                            <p className="text-gray mt-2 text-sm"> Create a launchpad where you can raise fund to add liquidity to your token project.</p>
                        </div>
                        <div className="m-3">
                            <div className="flex">
                               <h3 className="text-black  mt-1 dark:text-white">VIP</h3>  
                            </div>                      
                            <p className="text-gray mt-2 text-sm">investors who like to be getting update on legit token listed for presales can be whitelist on our platform.</p>
                        </div>   
                        <div className="m-3">
                            <div className="flex">
                               <h3 className="text-black mt-1 dark:text-white">Affiliate Marketing</h3>  
                            </div>                      
                            <p className="text-gray mt-2 text-sm"> Everyone who is interested to earn by helping project owner get more sales for their projects can apply for this.</p>
                        </div>
                        <div className="m-3">
                            <div className="flex">
                               <h3 className="text-black  mt-1 dark:text-white">Marketing</h3> 
                            </div>
                            
                            <p className="text-gray mt-2  text-sm">We are the only IDO platform that doesn’t neglect project owners in their token presales. We got professional and experienced marketers to help you get investors for your token sale. The strategies to this is affiliate marketing.</p>
                        </div>
                        <div className="m-3">
                            <div className="flex">
                               <h3 className="text-black mt-1 dark:text-white">Multisender</h3> 
                            </div>
                            
                            <p className="text-gray mt-2  text-sm">We provide you tool  to multisend your token to any valid wallet if your choice at low rate. Management- we give opportunities for project owner to manage their token presale with your platform KYC- with our KYC project owners can be verified and make investors have trust in their projects since they can be traceable should in case of project rug pull. </p>
                        </div>
                        <div className="m-3">
                            <div className="flex">
                               <h3 className="text-black mt-1 dark:text-white">Community</h3>  
                            </div>                      
                            <p className="text-gray mt-2 text-sm mb-10"> we have a large community where details about earn crypto projects listed on our platform will be discussed and project owner can subscribe to do AMM on their project.</p>
                        </div>
                        </div>
               
                    </div>
                </div>                        
               </div>

               <div className="rounded-lg bg-light dark:bg-middle relative  container-lg">
                   <img src={require('../images/btc.svg').default} className="w-full h-full object-cover absolute rounded-lg hidden md:flex md:visible"/>
                <div className="mt-6">
                    <div className="relative lg:m-24 lg:p-10">
                        <div className="grid lg:grid-cols-2 lg:px-5 lg:mt-10">
                        <div className="flex gap-10 m-5  px-4 place-content-between">
                            <img src={require('../images/network.png')}/>
                           
                        </div>
                   
                         <div className="m-5 lg:p-6 lg:pt-8 pt-3 lg:mx-auto">
                        <h1 className="text-2xl text-black mb-3 dark:text-white font-serif">Tracking your coins comfortably on multiple networks</h1>
                        <h3 className="text-l text-gray-500 dark:text-gray">Switching your Metamask wallet from BSC to ETH and back again isn’t fun. We’re putting the puzzle pieces in place to solve switching back and forth so much.</h3>
                         </div>
                      
                        </div>

                        <div className="grid lg:grid-cols-3 gap-5 mx-3 ">
                        
                        <div className="lg:p-10 m-3 ">
                            <div className="flex mt-4">
                             <h3 className="text-black mt-1 dark:text-white">Track and follow coins</h3>   
                            </div>
                            <p className="text-gray text-sm mb-2 mt-2">Adding coins to your portfolio manually, you can decide how much information you enter without worrying about trading pairs.</p>
                        </div>
                        <div className="lg:p-10 m-3">
                            <div className="flex mt-4">
                               <h3 className="text-black  mt-1 dark:text-white"> Full-screen tracker</h3>  
                            </div>     
                            <p className="text-gray text-sm mt-2">A detailed solution built to let you track many coins at once on a single screen experience with unique interactions.</p>
                        </div>
                        <div className="lg:p-10 m-3">
                            <div className="flex mt-4">
                               <h3 className="text-black mt-1 dark:text-white">Multiple networks</h3> 
                            </div>         
                            <p className="text-gray text-sm mt-2 mb-10 ">We will remember some of your unstored coin information, to allow for switching back and forth on networks. <br/> *This information is remembered on your machine</p>
                        </div>
                        </div>
               
                    </div>

                </div>                        
               </div>

               <div className="rounded-lg bg-light dark:bg-middle relative container-lg ">
                   <img src={require('../images/btc.svg').default} className="w-full h-full object-cover absolute rounded-lg imp hidden md:flex md:visible"/>
                    <div className="mb-5 mt-6">
                        <div className="relative lg:m-24 lg:pt-8">
                            <div className="grid lg:grid-cols-2">
                            <div className="m-10 pt-5">
                            <h1 className="text-2xl text-black mb-3 dark:text-white font-serif">Stay connected, earn and learn about crypto</h1>
                            <h3 className="text-l text-gray">Share with your friends, recommend crypto to your family, read about crypto currency and earn by holding our coin while doing it.</h3>
                        </div>

                            <div>
                                <div className="flex gap-5  lg:p-8 m-10  mx-auto px-4 justify-between">
                                <img src={require('../images/community.png').default}/>   
                                </div>                              
                            </div>   
                            </div>

                            <div className="grid lg:grid-cols-3 gap-5 mx-3 ">
                            <div className="m-3">
                                <div className="flex">
                                <h3 className="text-black mt-1 dark:text-white"> Learn from professionals</h3>   
                                </div>
                                
                                <p className="text-gray-500 mb-2 mt-2 text-sm text-gray">You can hire blockchain developers, smart contract auditor digital marketers, shillers and other professionals on our platform. You can partner with them to help you get your project done and advertise your project.</p>
                            </div>
                            <div className="m-3">
                                <div className="flex mt-4">
                                <h3 className="text-black mt-1 dark:text-white">Share via Twitter</h3>  
                                </div>
                            
                                <p className="text-gray-500 mt-2 text-sm text-gray">An easy & graphical way to share your crypto wins in a customistable, discrete way! Show-off by not showing the numbers off.<br/> If you get what we mean...</p>
                            </div>
                            <div className="m-3">
                                <div className="flex mt-4">
                                <h3 className="text-black mt-1 dark:text-white">Launchpad Channel</h3> 
                                </div>
                                
                                <p className="text-gray-500  mt-2 mb-10 text-sm text-gray">Start or keep updated on every new projects listed for presale and make a cool earning with it. We share new project release both private sale and public sale.  <br/> *Not financial advive</p>
                            </div>
                            </div>
                            <div className="grid lg:grid-cols-3 gap-5 mx-3">
                            <div className="m-3">
                                <div className="flex">
                                <h3 className="text-black dark:text-white mt-1"> Earn with our Token</h3>   
                                </div>
                                <p className="text-gray text-sm mb-2 mt-2 ">Our platform has it own token, which is a profit-generating and usable token that introduces an element profit-sharing through airdrop fee to the holders and staking APY. <br/> *You must hold our token to earn.</p>
                            </div>
                            <div className="m-3 lg:mb-12 ">
                            <div class="w-full h-full bg-blue hover:text-black text-center cursor-pointer rounded flex items-center justify-center text-white">
                                <a target="_blank" href="https://t.me/lincolnsale" class="text-lg text-center py-5">
                                <div class="block">Join us on Telegram</div>
                                </a>
                            </div>
                            </div>
                            <div className="m-3 lg:mb-12">
                            <div class="w-full h-full bg-blue hover:text-black text-center cursor-pointer rounded flex items-center justify-center text-white">
                                <a target="_blank" href="https://Twitter.com/lincolnsale" class="text-lg text-center py-5">
                                <div class="block">Share on twitter</div>
                                </a>
                            </div>  
                            </div>
                        
                            </div>
                
                        </div>
                    </div>                        
               </div>
            </div>

            <div className="mx-auto md:w-2/3 text-center">
                <h3 className="mb-8 text-xl lg:text-2xl m-5  dark:text-white">Interested in Cointools? We're launching our coin soon and would love to have you as an early adopter.</h3> 
                 <a href="http://lincolnsale.com/"><button className="rounded-lg py-2 px-2 border-2 text-gray dark:hover:text-white hover:text-black">Read the lightpaper</button></a> 
                 <hr className="border-0 my-2 md:hidden"/>
                 <a href="https://Twitter.com/lincolnsale"><button className="bg-blue rounded-lg px-2 py-2  hover:text-black text-white hover:border-2 mx-3">Follow us on Twitter</button></a>
            </div>


            <div ref={tokenomics} className="m-5 overflow-hidden relative">
              <div className="rounded-lg bg-light dark:bg-middle relative  container-lg">
                <div className="lg:m-24">
                    <div className="m-3">
                        <h1 className="mx-2 text-2xl lg:text-3xl text-black pt-5 lg:text-center lg:pt-10 dark:text-light font-serif">Tokenomics</h1>
                        <p className="text-gray-500 mx-2 mt-2 lg:mt-4 mb-3 lg:text-center text-l dark:text-gray">Within the sale period, there is no tax implementation. This will start only after an AMM listing. All unsold tokens will be burned.</p>
                        <div class="grid lg:grid-cols-3 gap-5 pt-5">
                            <div class="bg-white dark:bg-body dark:text-white rounded p-5 text-lg lg:mb-5"data-aos="fade-up">
                                <h6>0.5% Burn</h6>
                                <p class="mb-0 text-sm dark:text-gray">For every transaction, 0.5% will be burned to increase the value of your tokens. Burning will stop at 21M tokens.</p>
                            </div> 
                                <div class="bg-white dark:bg-body dark:text-white rounded p-5 text-lg lg:mb-5"data-aos="fade-up">
                                    <h6>0.5% Eco-vault</h6> 
                                    <p class="mb-0 text-sm dark:text-gray">0.5% of every transaction goes into our eco-vault that we will use for rewards.</p>
                                </div> 
                                    <div class="bg-white dark:bg-body dark:text-white rounded p-5 text-lg mb-5"data-aos="fade-up">
                                        <h6>80% Ad-Revenue Buyback</h6> 
                                        <p class="mb-0 text-sm dark:text-gray">We are allocating 80% of ad-revenue profits back into the Cointools coin.</p>
                                    </div>
                        </div>
                    </div>

                    
                </div>
              </div>
             </div>

             <div ref={roadmaps} className="m-5 overflow-hidden">
               <div className="rounded-lg dark:bg-middle relative  container-lg bg-light">
                    <div className="lg:m-24">
                    
                        <div className="text-center p-5">
                        <h1 className="text-2xl text-black mb-3 pt-8 dark:text-white font-serif">Roadmap</h1>
                        <p className="text-gray-500 dark:text-white">Project features and marketing roadmap for the year 2021</p>
                        </div>

                        <div className="flex m-4 mt-4">
                         <p className="text-xl text-blue-500 dark:text-white"><i class="fa-solid fa-signs-post"></i></p>
                        <h1 className="text-blue-500 text-xl mx-3 dark:text-white">Q1 - 2021</h1> 
                        </div>
                        <div class="grid md:grid-cols-3 gap-4">
                        
                            <div class="shadow text-left bg-white dark:bg-body rounded p-5 flex items-center m-3 "data-aos="fade-up">
                            <div>
                                <h4 class="mb-0 dark:text-white">New website</h4>
                                <p class="mb-0 mt-2 text-gray text-sm">Launch branding for product</p>
                            </div>
                            </div>
                            <div class="shadow text-left bg-white dark:text-white dark:bg-body rounded p-5 flex items-center m-3"data-aos="fade-up">
                                <div>
                                    <h4 class="mb-0">Token Sale</h4> 
                                    <p class="mb-0 mt-2 text-sm text-gray">Seed &amp; Public Sales, see tokenomics</p>
                                </div>
                            </div>
                            <div class="dark:bg-body shadow text-left bg-white  dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                                <div>
                                    <h4 class="mb-0">Basic demo</h4> 
                                    <p class="mb-0 mt-2 text-sm text-gray">Provide a public demo so you can test Cointools</p>
                                </div>
                            </div>
                            <div class="dark:bg-body shadow text-left bg-white dark:text-white rounded p-5 flex items-center m-3" data-aos="fade-up">
                                <div>
                                    <h4 class="mb-0">Closed beta group</h4> 
                                    <p class="mb-0 mt-2 text-sm text-gray">Early testers for the app</p>
                                </div>
                            </div>
                            <div class="dark:bg-body shadow text-left bg-white dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                                    <div>
                                        <h4 class="mb-0">PancakeSwap Listing</h4> 
                                        <p class="mb-0 mt-2 text-sm text-gray">12% of total supply will be added as liquidity</p>
                                        </div>
                            </div>
                            <div class="dark:bg-body shadow text-left bg-white dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                                        <div>
                                            <h4 class="mb-0">Listing on Coingecko</h4> 
                                        </div>
                            </div>
                            <div class="dark:bg-body shadow text-left bg-white dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                                                <div>
                                                    <h4 class="mb-0">Listing on Coinmarketcap</h4>
                                                </div>
                            </div>
                            <div class="dark:bg-body shadow text-left bg-white dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                            <div>
                                <h4 class="mb-0">Marketing campaign</h4> 
                                <p class="mb-0 mt-2 text-sm text-gray">We will start our marketing listing</p>
                            </div>
                            </div>
                        <div class="dark:bg-body shadow text-left bg-white dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                        <div>
                            <h4 class="mb-0">Contract Audit</h4>
                            <p class="mb-0 mt-2 text-sm text-gray">Our contract will get audited by TBD</p>
                        </div>
                        </div>
                        </div>

                        <div className="flex m-4 mt-4">
                            <p className="text-xl text-blue-500 dark:text-white"><i class="fa-solid fa-signs-post"></i></p>
                        <h1 className="text-blue-500 text-xl mx-3 dark:text-white">Q2 - 2021</h1> 
                        </div>
                        <div class="grid md:grid-cols-3 gap-4">
                        <div class="shadow-lg text-left bg-white dark:bg-body dark:text-white rounded p-5 flex items-center m-3">
                            <div>
                                <h4 class="mb-0">Release 0.1</h4> 
                                <p class="mb-0 mt-2 text-sm text-gray">The BETA version of our app goes public</p>
                            </div>
                        </div>
                        <div class="shadow-lg text-left bg-white dark:bg-body dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                        <div>
                            <h4 class="mb-0">Submit your own coin</h4>
                                <p class="mb-0 mt-2 text-sm text-gray">New coin submission</p>
                        </div>
                        </div>
                        <div class="shadow-lg text-left bg-white dark:bg-body dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                            <div>
                                <h4 class="mb-0">All core concept features</h4> 
                                <p class="mb-0 mt-2 text-sm text-gray">Cointools proof of concept</p>
                            </div>
                        </div>
                        <div class="shadow-lg text-left bg-white dark:bg-body dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                            <div>
                                <h4 class="mb-0">Multi-network profiles</h4>
                                <p class="mb-0 mt-2 text-sm text-gray">Track on ETH &amp; BSC Networks</p>
                            </div>
                        </div>
                        <div class="shadow-lg text-left bg-white dark:bg-body dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                            <div>
                                <h4 class="mb-0">Buyback integration</h4>
                                <p class="mb-0 mt-2 text-sm text-gray">Start seeing your rewards from holding our coin</p>
                            </div>
                        </div>
                        <div class="shadow-lg text-left bg-white dark:bg-body dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                            <div>
                                <h4 class="mb-0">Learning Pad</h4>
                                <p class="mb-0 mt-2 text-sm text-gray">Community learning centre for crypto currencies and tokens</p>
                            </div>
                        </div>
                        <div class="shadow-lg text-left bg-white dark:bg-body dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                            <div>
                                <h4 class="mb-0">Accounts</h4> 
                                <p class="mb-0 mt-2 text-sm text-gray">Start customising your experience even more with accounts</p>
                            </div>
                        </div>
                        <div class="shadow-lg text-left bg-white dark:bg-body dark:text-white rounded p-5 flex items-center m-3"data-aos="fade-up">
                            <div>
                                <h4 class="mb-0">UX/UI Review</h4> 
                                <p class="mb-0 mt-2 text-sm text-gray">Refinement of user experience</p>
                            </div>
                        </div>
                        </div>

                        <div className="flex m-4 mt-4 dark:text-white">
                            <p className="text-xl text-blue-500"><i class="fa-solid fa-signs-post"></i></p>
                        <h1 className="text-blue-500 text-xl mx-3">Q3 - 2021</h1> 
                        </div>

                        <div class="grid md:grid-cols-3 gap-4 dark:text-white">
                        <div class="shadow-lg text-left bg-white dark:bg-body rounded p-5 flex items-center m-3 lg:mb-10"data-aos="fade-up">
                            <div>
                                <h4 class="mb-0">Omnichain Support</h4> 
                                <p class="mb-0 mt-2 text-sm text-gray">Added support for all blockchains (TBD)</p>
                            </div>
                        </div>
                        <div class="shadow-lg text-left bg-white dark:bg-body rounded p-5 flex items-center m-3 lg:mb-10"data-aos="fade-up">
                            <div>
                                <h4 class="mb-0">Learning Enhancements</h4>
                                <p class="mb-0 mt-2 text-sm text-gray">Partnerships to promote</p>
                            </div>
                        </div>
                        <div class="shadow-lg text-left bg-white dark:bg-body rounded p-5 flex items-center m-3 lg:mb-10"data-aos="fade-up">
                            <div>
                                <h4 class="mb-0">Price Alerts</h4>
                                <p class="mb-0 mt-2 text-sm text-gray">Get alerts on events for your tracked coins</p>
                            </div>
                        </div>
                    </div>
                    </div>                    
               </div>
            </div>    

            <div  className="container-lg text-center bg-blue m-6 rounded-lg lg:h-64 h-80">
                <div className="p-12 lg:p-18 ">
                <h3 className="text-white text-center text-xl">You're early, want to find out how to get access in the sale?</h3>
                <div className="flex text-center justify-center">
                    <a href="https://t.me/lincolnsale"><button className="bg-white  text-blue rounded-lg py-2 px-2 mt-4 mb-6 mx-2">Ask in telegram</button></a> 
                    <a href="mailto:http://lincolnsale.com/"><button className="bg-white  text-blue rounded-lg py-2 px-3 mt-4 mb-6 mx-2">Direct email</button></a>
                </div> 
             
                <div className="flex text-center justify-center">
                <a href="https://Facebook.com/lincolnsale" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <svg aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    class="w-2 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    >
                    <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                    </svg>
                </a>

                <a href="https://Twitter.com/lincolnsale" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <svg aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    class="w-3 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    >
                    <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                    </svg>
                </a>

                <a href="https://medium.com/lincolnsale" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                <div className="items-center mt-1">
                     <i class="fa-brands fa-medium"></i>
                </div>  
                </a>
                </div>

                <div className="text-center text-gray-700 p-3">
                © 2022 Copyright
                <a className="text-gray-800"></a>
                </div>
                </div>
            

            </div> 

    </div>
  )
}

export default Navbar