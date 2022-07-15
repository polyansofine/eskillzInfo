
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import Cues from '../../components/Cues';
import Cards from '../../components/Card';
import styles from './style';
import { useEffect, useState } from "react";
import { ethers, providers } from "ethers";
import Web3Modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";
// import { SpaOutlined } from '@material-ui/icons';
// import Link from 'next/link';
import { useRouter } from 'next/router';
const NFTcontractABI = require('../../NFT.json');
const CardNFTcontractABI = require('../../NFT_CARD.json');
const NFTcontractAddress = "0xd7694bf6715dc2672c3c42558f09114e7a9fe6c3";
const CardNFTcontractAddress = "0x4daf37319a02ae027b3165fd625fd5cf22ea622d";
const sportTokenAddress = "0x8B65efE0E27D090F6E46E0dFE93E73d3574E5d99";
const Web3 = require("web3");

let web3 = new Web3(
    new Web3.providers.WebsocketProvider("wss://polygon-mumbai.g.alchemy.com/v2/4mg4dqqHfJ7nfo4sELW9PcnPiHXTDD93")
    // new Web3.providers.HttpProvider("https://polygon-mumbai.infura.io/v3/4ee04b874a1b4ceeb448e8c8df37cdff")
);

// const provider = new WalletConnectProvider({
//   rpc: {
//     80001: "https://matic-mumbai.chainstacklabs.com",
//   },
//   chainId: 80001,
// });
//  Create WalletConnect Provider

var minABI = [
  // balanceOf
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  },
  // decimals
  {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"","type":"uint8"}],
    "type":"function"
  }
];

const useStyles = makeStyles(styles);

function HomePage() {
  const classes = useStyles();
  
  const [selected, setSelected] = React.useState(0);
  const [sortValue, setSortValue] = React.useState(0);
  const [byAndSellSelected, setByAndSellSelected] = React.useState(0);
  const [presaleSelected, setPresaleSelected] = React.useState(0);
  const [stakingSelected, setStakingSelected] = React.useState(0);
  const router = useRouter();
  const images = [    
    "hall.png",
    "cues.png",
    "lifes.png",
    "connectWallet.png",
  ];

  const titles = [
    "CARDS",
    "CUES",
    "TOKENS",
    "Connect Wallet",
  ];
  const [balance, setBalance] = useState("");
  const [sportBalance, setSportBalance] = useState("");
  const [address, setAdress] = useState("");
  const [chainID, setChainID] = useState("");
  const [netName, setNetName] = useState("");

  const [loaded, setLoaded] = useState(0);
  const [web3Modal, setWeb3Modal] = useState(null);
  var TokenContract = new web3.eth.Contract(NFTcontractABI,NFTcontractAddress);
  var CardTokenContract = new web3.eth.Contract(CardNFTcontractABI,CardNFTcontractAddress);
  var sportContract = new web3.eth.Contract(minABI, sportTokenAddress);
  if(loaded == 0){
    setLoaded(1);
    TokenContract.events.Transfer((err, events)=>{
      eventListened();      
    });
    CardTokenContract.events.Transfer((err, events)=>{
      eventListened();      
    });
  }
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  async function eventListened() {
    await sleep(15000);
    try {
      if (window.ethereum) {
        
          const addressArray = await window.ethereum.request({
            method: "eth_accounts",
          });
          var web3Window = new Web3(window.ethereum);
          const chainIDBuffer = await web3Window.eth.net.getId();
          if(addressArray.length > 0){
            if(chainIDBuffer == 80001){
              web3Window.eth.getBalance(addressArray[0], (err, balanceOf) => {
                let balETH = ethers.utils.formatUnits(balanceOf, 'ether');        
                setBalance(String(balETH).substring(0, 6) + " MATIC");
              });
              sportContract.methods.balanceOf(addressArray[0]).call(function (err, res) {
                if(res.length>7){
                  setSportBalance(String(parseInt(String(res).substring(0,res.length-7))/100) + " SPORT");
                }
                else{
                  setSportBalance("0.00 SPORT");
                }              
              });
                
            }          
          }           
      } 
      else{
        // const provider = new WalletConnectProvider({
        //   rpc: {
        //     80001: "https://matic-mumbai.chainstacklabs.com",
        //   },
        //   chainId: 80001,
        // });
        // var web3Window = new Web3(provider);
        // if(addressArray.length > 0){
        //   if(Number(provider.chainId) == 80001){
        //     web3Window.eth.getBalance(addressArray[0], (err, balanceOf) => {
        //       let balETH = ethers.utils.formatUnits(balanceOf, 'ether');        
        //       setBalance(String(balETH).substring(0, 6) + " MATIC");
        //     });
        //     sportContract.methods.balanceOf(addressArray[0]).call(function (err, res) {
        //       if(res.length>7){
        //         setSportBalance(String(parseInt(String(res).substring(0,res.length-7))/100) + " SPORT");
        //       }
        //       else{
        //         setSportBalance("0.00 SPORT");
        //       }              
        //     });
              
        //   }          
        // }       
      }
      
    } catch (err) {
      return {
        address: ""        
      };
    }
  }

  useEffect(() => {
    try{
      if(window.ethereum) {
        window.ethereum.on('chainChanged', () => {
          router.reload();
        })
        window.ethereum.on('accountsChanged', () => {
          router.reload();
        })
        getCurrentWalletConnected(); ;
      }
      else{
        const providerOptions = {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: '4ee04b874a1b4ceeb448e8c8df37cdff',
            }
          },
        };
    
        const newWeb3Modal = new Web3Modal({
          cacheProvider: true, // very important
          network: "mainnet",
          providerOptions,
        });
    
        setWeb3Modal(newWeb3Modal)
    
        if (web3Modal.cachedProvider) {
              connect_Wallet()
        }
        // const provider = new WalletConnectProvider({
        //   rpc: {
        //     80001: "https://matic-mumbai.chainstacklabs.com",
        //   },
        //   chainId: 80001,
        // });
        // await provider.enable();
        // provider.on('chainChanged', () => {
        //   router.reload();
        // })
        // provider.on('accountsChanged', () => {
        //   router.reload();
        // })
      }
      
    }
    catch{
      return;
    }
    
    
  }, [])
  useEffect(() => {
    // connect automatically and without a popup if user is already connected
    if(web3Modal && web3Modal.cachedProvider){
      connect_Wallet()
    }
  }, [web3Modal])
 
  async function getCurrentWalletConnected() {
    try {
      if (window.ethereum) {
        
          const addressArray = await window.ethereum.request({
            method: "eth_accounts",
          });        
          var web3Window = new Web3(window.ethereum);
          const chainIDBuffer = await web3Window.eth.net.getId();        
          if(addressArray.length > 0){
            setAdress(addressArray[0]);
            if(chainIDBuffer == 80001){
              setNetName("");
              web3Window.eth.getBalance(addressArray[0], (err, balanceOf) => {
                let balETH = ethers.utils.formatUnits(balanceOf, 'ether');        
                setBalance(String(balETH).substring(0, 6) + " MATIC");
              });            
              sportContract.methods.balanceOf(addressArray[0]).call(function (err, res) {
                if(res.length>7){
                  setSportBalance(String(parseInt(String(res).substring(0,res.length-7))/100) + " SPORT");
                }
                else{
                  setSportBalance("0.00 SPORT");
                }         
              });
            }
            else{  
              setNetName("Wrong NET(DisConnect)");  
            }
          }         
        
      } 
      else{
        // const provider = new WalletConnectProvider({
        //   rpc: {
        //     80001: "https://matic-mumbai.chainstacklabs.com",
        //   },
        //   chainId: 80001,
        // });
        // const addressArray = await provider.enable();
        
        // var web3Window = new Web3(provider);
        // const addressArray = await web3Window.eth.getAccounts();
        // //const chainIDBuffer = await web3Window.eth.net.getId();        
        // if(addressArray.length > 0){
        //   setAdress(addressArray[0]);
        //   if(Number(provider.chainId) == 80001){
        //     setNetName("");
        //     web3Window.eth.getBalance(addressArray[0], (err, balanceOf) => {
        //       let balETH = ethers.utils.formatUnits(balanceOf, 'ether');        
        //       setBalance(String(balETH).substring(0, 6) + " MATIC");
        //     });            
        //     sportContract.methods.balanceOf(addressArray[0]).call(function (err, res) {
        //       if(res.length>7){
        //         setSportBalance(String(parseInt(String(res).substring(0,res.length-7))/100) + " SPORT");
        //       }
        //       else{
        //         setSportBalance("0.00 SPORT");
        //       }         
        //     });
        //   }
        //   else{  
        //     setNetName("Wrong NET(DisConnect)");  
        //   }
        // }         

      }
    } catch (err) {
      return {
        address: ""        
      };
    }
  };

  const connect_Wallet = async () => {
    const chainId = 80001;
    // try{
      if (window.ethereum) {
        var web3Window = new Web3(window.ethereum);     
        if (window.ethereum.networkVersion != chainId) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              //params: [{ chainId: web3.utils.toHex(chainId) }],
              params: [{ chainId: "0x"+chainId.toString(16) }],
            });
            if(address== ""){
              await window.ethereum.request({
                method: "wallet_requestPermissions",
                params: [{
                    eth_accounts: {}
                }]
              });
              const addressArray = await window.ethereum.request({method: "eth_accounts",});
              if(addressArray.length > 0){
                setAdress(addressArray[0]);
                setNetName("");
                web3Window.eth.getBalance(addressArray[0], (err, balanceOf) => {
                  let balETH = ethers.utils.formatUnits(balanceOf, 'ether');        
                  setBalance(String(balETH).substring(0, 6) + " MATIC");
                }); 
                sportContract.methods.balanceOf(addressArray[0]).call(function (err, res) {
                  if(res.length>7){
                    setSportBalance(String(parseInt(String(res).substring(0,res.length-7))/100) + " SPORT");
                  }
                  else{
                    setSportBalance("0.00 SPORT");
                  }         
                });               
              }
            }
            else{
              setAdress("");
              setNetName("");
              setBalance("");
              setSportBalance("");  
            }
          } catch (err) {
              // This error code indicates that the chain has not been added to MetaMask.
            if (err.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainName: 'Polygon Mumbai',
                    chainId: web3.utils.toHex(chainId),
                    nativeCurrency: { name: 'Matic', decimals: 18, symbol: 'Matic' },
                    rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
                  },
                ],
              });
            }
          }
        }
        else{
          if(address== ""){
            await window.ethereum.request({
              method: "wallet_requestPermissions",
              params: [{
                  eth_accounts: {}
              }]
            });
            const addressArray = await window.ethereum.request({method: "eth_accounts",});
            if(addressArray.length > 0){
              setAdress(addressArray[0]);
              setNetName("");
              web3Window.eth.getBalance(addressArray[0], (err, balanceOf) => {
                let balETH = ethers.utils.formatUnits(balanceOf, 'ether');        
                setBalance(String(balETH).substring(0, 6) + " MATIC");
              }); 
              sportContract.methods.balanceOf(addressArray[0]).call(function (err, res) {
                if(res.length>7){
                  setSportBalance(String(parseInt(String(res).substring(0,res.length-7))/100) + " SPORT");
                }
                else{
                  setSportBalance("0.00 SPORT");
                }         
              });               
            }
          }          
          else{
            setAdress("");
            setNetName("");
            setBalance("");
            setSportBalance("");  
          }
        }     
        
      }  
      else{  
        const provider = await web3Modal.connect();
    
      //addListeners(provider);

      const ethersProvider = new providers.Web3Provider(provider)
      const userAddress = await ethersProvider.getSigner().getAddress()
      setAdress(userAddress)
        // const provider = new WalletConnectProvider({
        //   rpc: {
        //     1: "https://mainnet.mycustomnode.com",
        //     3: "https://ropsten.mycustomnode.com",
        //     80001: "https://matic-mumbai.chainstacklabs.com",
        //   },
        // });
        
        // //  Enable session (triggers QR Code modal)
        // const ethersProvider = new ethers.providers.Web3Provider(provider);
        // setAdress(33);
        // await provider.enable();
        // provider.on('accountsChanged', (accounts) => {
        // // you can access the accounts here
        // console.log(accounts);
        // });
        // provider.on('disconnect', (code, reason) => {
        // //fired when disconnecting WalletConnect
        // console.log(code, reason);
        // });
        // const provid = new WalletConnectProvider({
        //   rpc: {
        //     80001: "https://matic-mumbai.chainstacklabs.com",
        //   },
        //   chainId: 80001,
        // });  
        // const provid = new WalletConnectProvider({
        //   infuraId: "4ee04b874a1b4ceeb448e8c8df37cdff",
        //   qrcodeModalOptions: {
        //     mobileLinks: ["metamask"],
        //   },
        // });
        // const addressMobile = await provid.enable();
        // const web3Provider = new providers.Web3Provider(provider);
        //const web3Provider = new Web3(provid);
        // setAdress(22);
        // const accounts = await ethersProvider.eth.getAccounts();
        // const provider = new WalletConnectProvider({
        //   rpc: {
        //     137: 'https://polygon-rpc.com',
        //     1337: 'http://localhost:8545',
        //     80001: 'https://matic-mumbai.chainstacklabs.com',
        //   },
        //   chainId: 80001
        // });
          // const prov = new WalletConnectProvider({
          //   rpc: {
          //     80001: "https://matic-mumbai.chainstacklabs.com",
          //   },
          //   chainId: 80001,
          // });
          // setAdress(accounts[0]);
            try {           
              if(address== ""){                
                // provid.enable();
                // setAdress("13");
                // const ethersProvider = new ethers.providers.Web3Provider(provid);
                // const addressMobile = await ethersProvider.listAccounts();
                // setAdress(addressMobile[0]);
              // if (!(Number(provid.chainId) === Number(chainId))) {
              //   await provid.request({
              //     method: 'wallet_switchEthereumChain',
              //     //params: [{ chainId: web3.utils.toHex(chainId) }],
              //     params: [{ chainId: "0x"+chainId.toString(16) }],
              //   });                
              // }
              // if(addressMobile.length > 0){
              //   setAdress(addressMobile[0]);
              //   setNetName("");
              //   provid.getBalance(addressMobile[0]).then((balanceOf) => {
              //     // convert a currency unit from wei to ether                  
              //     let balETH = ethers.utils.formatUnits(balanceOf, 'ether');        
              //     setBalance(String(balETH).substring(0, 6) + " MATIC");
              //    })
                
              //   let readContractInstance = new ethers.Contract(sportTokenAddress, minABI, ethersProvider);
              //   readContractInstance.balanceOf(addressMobile[0]).then((err, res) =>{
              //     if(res.length>7){
              //       setSportBalance(String(parseInt(String(res).substring(0,res.length-7))/100) + " SPORT");
              //     }
              //     else{
              //       setSportBalance("0.00 SPORT");
              //     }         
              //   });               
              // }
            }
            else{

              setAdress("");
              setNetName("");
              setBalance("");
              setSportBalance("");  
             // await provider.disconnect()
              //await provider.disconnect();
            }
            setAdress("2");
          } catch (err) {
            setAdress("3");
              // This error code indicates that the chain has not been added to MetaMask.        
            
          }
          setBalance("4");      
      }
      setSportBalance("5");   
    // }
    // catch{
    //   return;
    // }
      
  };

  return (
    <>
      <div className={classes.buttons} style={{justifyContent:"center", marginTop:"24px"}}>
          <Button style={{position: 'relative', width : '100px'}} className={`${classes.btn} ${presaleSelected === 1 ? classes.selected_btn : ''}`} onClick={() => {setPresaleSelected(1);router.push('/presale');}}>              
            {"Presale"}
          </Button>
          {/* <Button style={{position: 'relative', width : '100px', left: '20px'}} className={`${classes.btn} ${stakingSelected === 1 ? classes.selected_btn : ''}`} onClick={() => {setStakingSelected(1);router.push('/stake');}}>              
            {"Staking"}
          </Button> */}
          <div className="seperator" style={{width:"32px",flexShrink:"0%"}}></div>
          <Button className={`${classes.btn} ${byAndSellSelected === 0 ? classes.selected_btn : ''}`} onClick={() => {setByAndSellSelected(0);}}>              
            {"BUY"}
          </Button>
          <div className="seperator" style={{width:"32px",flexShrink:"0%"}}></div>
          <Button className={`${classes.btn} ${byAndSellSelected === 1 ? classes.selected_btn : ''}`} onClick={() => {setByAndSellSelected(1);}}>              
            {"SELL"}
          </Button>
          <div className="last-div" style = {{flexDirection : 'column', display : 'flex'}}>
            <span style={{color : 'white'}}>
              &nbsp;
              &nbsp;
              ADDRESS :
              &nbsp;
            {address.length> 0 ? (String(address).substring(0, 8) + "..." + String(address).substring(36)) : ("")}
            </span>
            <span style={{color : '#06f506'}}>
              &nbsp;
              &nbsp;
              MATIC BALANCE :
              &nbsp;
              {address.length> 0 ? balance : ""}            
            </span>
            <span style={{color : '#00edff'}}>
              &nbsp;
              &nbsp;
              SPORT BALANCE :
              &nbsp;
              {address.length> 0 ? sportBalance : ""}            
            </span>
          </div>
          {/* <Link href="/mint">
            <Button className={classes.circle_btn} style={{position: 'relative', marginLeft : '20px'}}>
                {'>'}
            </Button>
          </Link> */}
          {/* <Button className={classes.circle_btn} style={{position: 'relative', marginLeft : '20px'}} onClick={() => router.push('/mint')}>
              {'>'}
          </Button>           */}
      </div>
      <div className={classes.hero}>        
          <Button className={classes.circle_btn} onClick={() => {setSortValue(1 - sortValue);}}>
            { sortValue < 1 ? '↑' : '↓'}
          </Button>          
          <div className={classes.buttons}>
            {images.map((img, index) => (
              <Button key={index} className={`${classes.btn} ${selected === index ? classes.selected_btn : ''}`} onClick={() => {
                  if(index === 3){
                    connect_Wallet();
                  }
                  else if(index == 2){
                    router.push('/token')
                  }
                  else{
                    setSelected(index);
                  }
                }
              }>
                <img src={"/images/" + img} alt="" />
                { index === 3 ? (netName == "" ? (balance.length == 0 ? titles[index] : "DisConnect") : netName ) : titles[index]}
              </Button>
            ))}
            </div>
            { selected === 0 && byAndSellSelected === 1 && sortValue ==1 && address == ""&& <Cards check = {1} sortVal = {1} connected = {0} />}
            { selected === 0 && byAndSellSelected === 1 && sortValue ==0 && address == ""&& <Cards check = {1} sortVal = {0} connected = {0} />}
            { selected === 0 && byAndSellSelected === 0 && sortValue ==1 && address == ""&& <Cards check = {0} sortVal = {1} connected = {0} />}
            { selected === 0 && byAndSellSelected === 0 && sortValue ==0 && address == ""&& <Cards check = {0} sortVal = {0} connected = {0} />}
            { selected === 0 && byAndSellSelected === 1 && sortValue ==1 && address != ""&& <Cards check = {1} sortVal = {1} connected = {1} />}
            { selected === 0 && byAndSellSelected === 1 && sortValue ==0 && address != ""&& <Cards check = {1} sortVal = {0} connected = {1} />}
            { selected === 0 && byAndSellSelected === 0 && sortValue ==1 && address != ""&& <Cards check = {0} sortVal = {1} connected = {1} />}
            { selected === 0 && byAndSellSelected === 0 && sortValue ==0 && address != ""&& <Cards check = {0} sortVal = {0} connected = {1} />}
            { selected === 1 && byAndSellSelected === 1 && sortValue ==1 && address == ""&& <Cues check = {1} sortVal = {1} connected = {0} /> }
            { selected === 1 && byAndSellSelected === 1 && sortValue ==0 && address == ""&& <Cues check = {1} sortVal = {0} connected = {0} /> }
            { selected === 1 && byAndSellSelected === 0 && sortValue ==1 && address == ""&& <Cues check = {0} sortVal = {1} connected = {0} /> }
            { selected === 1 && byAndSellSelected === 0 && sortValue ==0 && address == ""&& <Cues check = {0} sortVal = {0} connected = {0} /> }
            { selected === 1 && byAndSellSelected === 1 && sortValue ==1 && address != ""&& <Cues check = {1} sortVal = {1} connected = {1} /> }
            { selected === 1 && byAndSellSelected === 1 && sortValue ==0 && address != ""&& <Cues check = {1} sortVal = {0} connected = {1} /> }
            { selected === 1 && byAndSellSelected === 0 && sortValue ==1 && address != ""&& <Cues check = {0} sortVal = {1} connected = {1} /> }
            { selected === 1 && byAndSellSelected === 0 && sortValue ==0 && address != ""&& <Cues check = {0} sortVal = {0} connected = {1} /> }  
            {/* { selected === 2 && <LifesAndTokens /> } */}
          </div> 
        
    </>
  );
}

export default HomePage;