import React from 'react'
import { useRef, useEffect } from 'react';
import ScrollToTop from './ScrollToTop';
import { FiTwitter } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';
import { FiInstagram } from 'react-icons/fi';
import { FaBtc } from 'react-icons/fa';
import { GiSuitcase } from 'react-icons/gi';
import { TbCurrencyEthereum } from 'react-icons/tb'
import { AiOutlineStar } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineStorefront } from 'react-icons/md';
import { BsLaptop } from 'react-icons/bs';
import Toggle from './toggle';
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
                <img src={require('../images/logo.svg').default} height={37} width={37} className="md:block sm:hidden mx-2 lg:mx-3 lg:animate-bounce cursor-pointer"/>
                <div className="flex ">
                    <ul className="hidden sm:flex sm:visible gap-2 lg:gap-3 mt-2 mx-3">

                    <li onClick={() => scrollToSection(howItWorks)} className=" cursor-pointer text-black dark:text-grey hover:text-blue dark:hover:text-white">How</li>
                    <li onClick={() => scrollToSection(features)}  className="  cursor-pointer text-black dark:text-grey hover:text-blue dark:hover:text-white">Features</li>
                    <li onClick={() => scrollToSection(tokenomics)} className=" cursor-pointer text-black dark:text-grey hover:text-blue dark:hover:text-white">Tokenomics</li>
                    <li onClick={() => scrollToSection(roadmaps)} className="   cursor-pointer text-black dark:text-grey hover:text-blue dark:hover:text-white">Roadmaps</li>

                </ul>  
                </div>
                
                </div>


                <div className="flex mt-3 mx-2">
             
                    <div className="mx-3 mt-2">
                        <Toggle className=" dark:text-gray"/>
                    </div>
                    
                    <div className="grid grid-cols-2 mt-2 lg:mt-0">
                        <a href="#">
                            <button className="bg-blue rounded  px-1 py-1 text-white font-semibold hover:text-black ">Lightpaper</button>
                        </a>   
                        <a href="#">
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
                    <div className="m-10 hover:shadow-lg">
                           <img src={require('../images/lightimg.jpg')} className="rounded-lg"/>
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
                   <a target="_blank" href="#"><button className="dark:hover:text-light border-2 rounded-lg px-2 py-1 text-gray">Join our Telegram</button></a></div>
                
                  <div className="grid lg:grid-cols-3 mt-8 pt-6 gap-10 m-10 lg:m-20">
                    <div>
                       <small class="tag mb-2 block relative">
                            <div class="text-4xl font-semibold absolute left-0 bottom-0 transform -translate-x-1/2 text-grey dark:text-rare dark:text-opacity-10">
                             01
                            </div> 
                            <p className="text-red mx-2 text-sm relative">CONNECT</p>
                        </small> 
                        <h3 className="dark:text-white">Connect your wallet</h3>
                        <p className="dark:text-grey text-sm mt-2">Using Metamask, you will have the ability to see your coins appear in your Cointools Portfolio automatically.</p>
                        <div className="bg-light dark:bg-black rounded-lg mt-3 mb-3 lg:w-100 lg:h-46">
                        <img src={require('../images/img1.png').default}/>
                        </div>
                        
                    </div>
                    <div>
                         <small class="tag mb-2 block relative">
                            <div class="text-4xl font-semibold absolute left-0 bottom-0 transform -translate-x-1/2 text-grey dark:text-rare dark:text-opacity-10">
                             02
                            </div> 
                            <p className="text-red mx-1 text-sm relative">PORTFOLIO</p>
                        </small> 
                        <h3 className="dark:text-white">Manage your portfolio</h3>
                        <p className="dark:text-grey text-sm mt-2">Add tokens and keep track of your profit & loss. Your information sits on your machine.</p>
                        <div className="bg-light dark:bg-black rounded-lg mt-3 mb-3 lg:w-100 lg:h-46">
                        <img src={require('../images/img2.png').default}/>
                        </div>

                    </div>
                    
                   
                     <div>
                        <small class="tag mb-2 block relative">
                            <div class="text-4xl font-semibold absolute left-0 bottom-0 transform -translate-x-1/2 text-grey dark:text-rare dark:text-opacity-10">
                             03
                            </div> 
                            <p className="text-red mx-1 text-sm relative">DISCOVER</p>
                        </small> 
                        <h3 className="dark:text-white">Find opportunities</h3>
                        <p className="dark:text-grey mt-2 text-sm">Find upcoming events and project better what your stocks will do. Make better decisions.</p>
                        <div className="bg-light dark:bg-black rounded-lg mt-3 mb-3 lg:w-100 lg:h-46">
                        <img src={require('../images/img3.png').default}/>
                        </div>
                    </div>
                  </div>
            </div>

            <div ref={features} className="m-5 overflow-hidden relative">
                <div className="rounded-lg bg-light relative  container-lg dark:bg-middle">
                   <img src={require('../images/btc.svg').default} className="w-full h-full object-cover absolute rounded-lg imp hidden md:flex md:visible"/>
                <div className="">
                    <div className="relative lg:m-24 lg:pt-8 ">
                        <div className="grid lg:grid-cols-2 ">
                        <div className="m-10 pt-5">
                        <h1 className="text-2xl text-black mb-3 dark:text-white">Stay on-top of all crypto assets, in one place</h1>
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
                             <BsLaptop className="mt-2 dark:text-white"/>
                             <h3 className="text-black mx-2 mt-1 dark:text-white">Trading View</h3>   
                            </div>
                            
                            <p className="text-gray mb-2 mt-2 text-sm">Use the familiar TradingView to get the best experience for your Technical Analysis. Alternatively switch to a different view.</p>
                        </div>
                        <div className="m-3">
                            <div className="flex mt-4">
                                <MdOutlineStorefront className="mt-2 dark:text-white"/>
                               <h3 className="text-black mx-2 mt-1 dark:text-white">Customisable market page</h3>  
                            </div>                      
                            <p className="text-gray mt-2 text-sm"> Customisable market page Two column? Three? Four? You decide how you want to experience our market page and which modules to show.</p>
                        </div>
                        <div className="m-3">
                            <div className="flex mt-4">
                              <BiUserCircle className="mt-2 dark:text-white"/>
                               <h3 className="text-black mx-2 mt-1 dark:text-white">No account required</h3> 
                            </div>
                            
                            <p className="text-gray mt-2 mb-10 text-sm">Start using the application free of charge and without an account, call it decentralized. *Better experience when you do have an account</p>
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
                        <h1 className="text-2xl text-black mb-3 dark:text-white">Tracking your coins comfortably on multiple networks</h1>
                        <h3 className="text-xl text-gray-500 dark:text-gray">Switching your Metamask wallet from BSC to ETH and back again isn’t fun. We’re putting the puzzle pieces in place to solve switching back and forth so much.</h3>
                         </div>
                      
                        </div>

                        <div className="grid lg:grid-cols-3 gap-5 mx-3 ">
                        
                        <div className="lg:p-10 m-3 ">
                            <div className="flex mt-4">
                             <BsLaptop className="mt-2 dark:text-white"/>
                             <h3 className="text-black mx-2 mt-1 dark:text-white">Track and follow coins</h3>   
                            </div>
                            <p className="text-gray text-sm mb-2 mt-2">Adding coins to your portfolio manually, you can decide how much information you enter without worrying about trading pairs.</p>
                        </div>
                        <div className="lg:p-10 m-3">
                            <div className="flex mt-4">
                                <MdOutlineStorefront className="mt-2 dark:text-white"/>
                               <h3 className="text-black mx-2 mt-1 dark:text-white"> Full-screen tracker</h3>  
                            </div>     
                            <p className="text-gray text-sm mt-2">A detailed solution built to let you track many coins at once on a single screen experience with unique interactions.</p>
                        </div>
                        <div className="lg:p-10 m-3">
                            <div className="flex mt-4">
                              <BiUserCircle className="mt-2 dark:text-white"/>
                               <h3 className="text-black mx-2 mt-1 dark:text-white">Multiple networks</h3> 
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
                            <h1 className="text-2xl text-black mb-3 dark:text-white">Stay connected, earn and learn about crypto</h1>
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
                                <BsLaptop className="mt-2 dark:text-white"/>
                                <h3 className="text-black mx-2 mt-1 dark:text-white"> Learn from professionals</h3>   
                                </div>
                                
                                <p className="text-gray-500 mb-2 mt-2 text-sm text-gray">Insights by industry professionals and a more technical aspect of how you can start creating your own project.</p>
                            </div>
                            <div className="m-3">
                                <div className="flex mt-4">
                                    <MdOutlineStorefront className="mt-2 dark:text-white"/>
                                <h3 className="text-black mx-2 mt-1 dark:text-white">Share via Twitter</h3>  
                                </div>
                            
                                <p className="text-gray-500 mt-2 text-sm text-gray">An easy & graphical way to share your crypto wins in a customistable, discrete way! Show-off by not showing the numbers off. <br/> If you get what we mean...</p>
                            </div>
                            <div className="m-3">
                                <div className="flex mt-4">
                                <BiUserCircle className="mt-2 dark:text-white"/>
                                <h3 className="text-black mx-2 mt-1 dark:text-white">Learning Hub</h3> 
                                </div>
                                
                                <p className="text-gray-500  mt-2 mb-10 text-sm text-gray">Start or keep learning about how crypto-currency works. Introduce family and friends. <br/> *Not financial advive</p>
                            </div>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-5 mx-3">
                            <div className="m-3">
                                <div className="flex">
                                <BsLaptop className="mt-2 dark:text-white"/>
                                <h3 className="text-black dark:text-white mx-2 mt-1"> Earn while you learn</h3>   
                                </div>
                                <p className="text-gray text-sm mb-2 mt-2 ">Our platform has a buy-back system that will use a large portion of our ad-revenue to buy-back stock, increasing its value. <br/> *You must hold our coin to earn.</p>
                            </div>
                            <div className="m-3 lg:mb-12 ">
                            <div class="w-full h-full bg-blue hover:text-black text-center cursor-pointer rounded flex items-center justify-center text-white">
                                <a target="_blank" href="#" class="text-lg text-center py-5">
                                <div class="block">Join us on Telegram</div>
                                </a>
                            </div>
                            </div>
                            <div className="m-3 lg:mb-12">
                            <div class="w-full h-full bg-blue hover:text-black text-center cursor-pointer rounded flex items-center justify-center text-white">
                                <a target="_blank" href="#" class="text-lg text-center py-5">
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
                 <a href="#"><button className="rounded-lg py-2 px-2 border-2 text-gray dark:hover:text-white hover:text-black">Read the lightpaper</button></a> 
                 <hr className="border-0 my-2 md:hidden"/>
                 <a href="#"><button className="bg-blue rounded-lg px-2 py-2  hover:text-black text-white hover:border-2 mx-3">Follow us on Twitter</button></a>
            </div>


            <div ref={tokenomics} className="m-5 overflow-hidden relative">
              <div className="rounded-lg bg-light dark:bg-middle relative  container-lg">
                <div className="lg:m-24">
                    <div className="m-3">
                        <h1 className="mx-2 text-2xl lg:text-3xl text-black pt-5 lg:text-center lg:pt-10 dark:text-light">Tokenomics</h1>
                        <p className="text-gray-500 mx-2 mt-2 lg:mt-4 mb-3 lg:text-center dark:text-gray">Within the sale period, there is no tax implementation. This will start only after an AMM listing. All unsold tokens will be burned.</p>
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
                        <h1 className="text-2xl text-black mb-3 pt-8 dark:text-white">Roadmap</h1>
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
                <div className="p-8 lg:p-18 md:p-12">
                <h3 className="text-white text-center text-xl">You're early, want to find out how to get access in the sale?</h3>
                <div className="flex text-center justify-center">
                    <a href="#"><button className="bg-white  text-blue rounded-lg py-2 px-5 mt-4 mb-6 mx-2">Ask in telegram</button></a> 
                    <a href="#"><button className="bg-white  text-blue rounded-lg py-2 px-5 mt-4 mb-6 mx-2">Direct email</button></a>
                </div> 
             
                <div className="flex text-center justify-center">
                <a href="#!" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
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

                <a href="#!" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
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

                <a href="#!" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <svg aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    class="w-3 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    >
                    <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                    </svg>
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