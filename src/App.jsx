import { ToastContainer } from 'react-toastify';
import React, {useEffect, useState, useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { ethers, utils } from "ethers";
import { FaHeadphonesAlt } from 'react-icons/fa';
import { getProvider } from './providers/Providers.jsx';
import { toHex } from './lib/';
import { Networks } from './networks/Networks';
import { Contracts } from './contracts/';
// import {} from './callbacks/Callbacks';
import { Home } from './components/';
import { MainChain } from './context/MainChain';
import { images } from './constants';

import { GET_STATE } from './redux/user'

function App() {
  const { MainProvider, SignContract } = useContext(MainChain);

  const [Loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const [chainId, setChainId] = useState(5665);
  const [userAddress, setUserAddress] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const [isLogged, setIsLogged] = useState({status: null, message: null});
  const [LoadingUser, setLoadingUser] = useState(false);

  const dispatch = useDispatch();
  
  
  const USER = {
    address: GET_STATE('user', 'address'),
    chainId: GET_STATE('user', 'chainId'),
    isTeam: GET_STATE('user', 'isTeam')
  }
  const isLoading = GET_STATE('user', 'isLoading');

  useEffect(() => {
    async function isLogged(){
      setUserAddress(USER.address)
      setChainId(USER.chainId)
    }
    isLogged();
  }, [userAddress])


  const SwitchNetwork = async () => {
    try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: toHex("97") }]
    });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [Networks[toHex("97")]]
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  }

  const AddNetwork = async () => {
    const data = [{
      chainId: `0x${Number(Networks["97"].chainId).toString(16)}`,
      chainName: Networks["97"].chainName,
      nativeCurrency: {
        name: 'Binance Testnet',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: [Networks["97"].rpcUrls],
      blockExplorerUrls: [Networks["97"].blockExplorerUrls],
    }]
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: data
          });
          SwitchNetwork();
          location.reload();
        } catch (error) {
          console.log(error);
        }
  }

  const Loading = () => {
    return(
<div className={`w-screen h-modal inset-0 m-auto fixed flex z-[10000] justify-center items-center overflow-x-hidden overflow-y-auto ${!isLoading && 'hidden'}`}>
  <div className=" bg-hero opacity-75 w-screen h-modal inset-0 m-auto fixed flex z-[10] justify-center items-center overflow-x-hidden overflow-y-auto"></div>
  <div className="flex flex-col gap-5 justify-center items-center h-full">
    <img className="h-16 w-16" src={images.GIFLoading} alt="" />
    <div className="flex items-start justify-start">
      <h2 className="">Loading, please wait ...</h2>
    </div>
  </div>
</div>
    )
  }

    
    const WrongNetwork = () => {
    return(
     
      <div className="dQdmym w-3/5 mx-auto my-10">
          <div className="dnJGkr box1 ">
          <div className="kEiMDz flex justify-between w-full">
                  <div className="title-text  flex-grow-1 bd-highlight">Erro na rede</div>
                  <img className="w-[25px]" src={images.UNACTIVE} alt="Unactive" />
                  </div>
          <hr className="sc-bqyKOL gSuxaX"></hr>
              <div className="grid grid-cols-12 items-center justify-center">
                
                <div className="col-span-12 grid grid-cols-12 gap-3 items-center justify-center">
                  <h2 className="col-span-12 w-full mt-5 text-center font-bold">Você precisa mudar para a rede da Binance</h2>
                  {/* <p className="col-span-12 w-full text-sm mb-5 text-center">Ducoin is running on a private blockchain. </p> */}
                  <div className="col-span-12 grid grid-cols-2 items-center justify-center gap-3 my-10">
                    <p>Chain Name: </p><p className="text-right font-bold">{Networks["97"].chainName}</p>
                    <p>Chain ID: </p><p className="text-right font-bold">{Networks["97"].chainId}</p>
                    <p>Native Token Name: </p><p className="text-right font-bold">{Networks["97"].nativeCurrency.name}</p>
                    <p>Native Token Symbol: </p><p className="text-right font-bold">{Networks["97"].nativeCurrency.symbol}</p>
                    <p>Native Token Decimals: </p><p className="text-right font-bold">{Networks["97"].nativeCurrency.decimals}</p>
                    <p>RPC: </p><p className="text-right font-bold">{Networks["97"].rpcUrls}</p>
                    <p>Block Explorer: </p><p className="text-right font-bold">{Networks["97"].blockExplorerUrls}</p>
                  </div>
                  <button type="button" className="btn-blue col-span-12" onClick={AddNetwork}>Clique aqui para mudar automaticamente</button>
                </div>
              </div>
          </div>
      </div>

      );
    }


  return (
    <div className="w-full">
    <Home />
    </div>
  );
}

export default App;
