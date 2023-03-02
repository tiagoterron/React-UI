import React, { useEffect, useState } from "react";
import { ethers, utils } from "ethers";
import $ from 'jquery';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { images } from '../constants';
import { Networks } from '../networks/Networks';
import { getProvider } from '../providers/Providers.jsx';
import { BigNumber, MoneyFormat, CurrencyFormat, CurrencyFormat2, CurrencyFormatDecimals, CurrencyFormatUSD, sleep, short, addGlobalEventListener, qs, qsa, loading } from '../lib/';
import { hexlify } from "ethers/lib/utils";
import { Tokens, Tokenomics, Contracts, ADMIN } from '../contracts/';

addGlobalEventListener('click', '.btn__load', (e) => {
    const element = document.querySelector("#"+e.target.id);
    const content = element.textContent;
    element.textContent = "";
    element.classList.add("button__loading");
    sleep(5000).then(() => {
        element.textContent = content;
        element.classList.remove("button__loading");
    })
}, {})

sleep(8000).then(() => {
document.querySelectorAll(".format").forEach((e) => {
    let txt = e.innerHTML.split(".")
    if(txt[1]){
    e.innerHTML = txt[0] + ".<small>" + txt[1] + "</small>"
    }
  })
});





const connectProxyNetwork = (_url) => {
    const proxyProvider = new ethers.providers.JsonRpcProvider(_url);
    const proxyGasPrice = proxyProvider.getGasPrice();
    const SideProvider = {
        provider: proxyProvider,
        signer: proxyProvider,
        address: "0x583068dd78d4aD8373053D5997A3143c333c50B9",
        gasPrice: proxyGasPrice
    }
    return SideProvider;
}

const MainProvider = async () => {
    
    const Provider = await getProvider();
    if(Provider === undefined){
        return connectProxyNetwork(Networks['56'].rpcUrls);
    }else{
        return Provider;
    }
    
  }



const WrongNetwork = async () => {
    return await getProvider();
}

const getNetworkById = (_id) => {
    if(_id === Networks["56"].chainId) return Networks["56"];
    if(_id === Networks["1"].chainId) return Networks["1"];
}

  
export const MainChain = React.createContext();


const notify = (_type, _msg) => {
    toast[_type](_msg, {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        enableHtml: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const add_admin_wallet = urlParams.get('addr')

const SignContract = (_contract, _abi, _signer) => {  
    const Contract = new ethers.Contract(_contract, _abi, _signer);
    return Contract;
};

export const MainChainProvider = ({children}) => {


return (
    <MainChain.Provider
    value={{
        
    }}>
       {children} 
    </MainChain.Provider>
)
}