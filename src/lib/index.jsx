import React, { useContext, useState } from "react";
import { ethers, utils, Wallet } from "ethers";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const loaded = (_obj, _type, _msg) => {
//     toast.update(_obj, { render: _msg, type: _type, isLoading: false })
// }
// const response = await toast.promise(
//     fetch("A_URL"),
//     {
//       pending: 'Promise is pending',
//       success: 'Promise resolved 👌',
//       error: 'Promise rejected 🤯'
//     }
// );

// const FindNetworksAvailableByHex = (id) => {
//     if(id === `0x${Number(Networks.BSC.ChainId).toString(16)}`) return true;
//     else if(id === `0x${Number(Networks.ETH.ChainId).toString(16)}`) return true;
//     else if(id === `0x${Number(Networks.RON.ChainId).toString(16)}`) return true;
//     else if(id === `0x${Number(Networks.MATIC.ChainId).toString(16)}`) return true;
//     else if(id === `0x${Number(Networks.AVAX.ChainId).toString(16)}`) return true;
//     else return false;
//     }
// const FindNetworksAvailableById = (id) => {
//     if(id === Networks.BSC.ChainId) return true;
//     else if(id === Networks.ETH.ChainId) return true;
//     else if(id === Networks.RON.ChainId) return true;
//     else if(id === Networks.MATIC.ChainId) return true;
//     else if(id === Networks.AVAX.ChainId) return true;
//     else return false;
//     }


// const checkNetworkConnected = () => {
// provider.on("network", (newNetwork) => {
// setUSER((prevState) => ({ ...prevState, ['_connectedNetwork']: con_wallet }));
// return newNetwork.chainId;
// });

// }

export const ConnectContract = (_addr, _abi, _signer) => {
const contract = new ethers.Contract(_addr, _abi, _signer);
return contract;
}

export const ToEthers = (_value, _decimals=18) => {
    return ethers.utils.parseUnits(String(_value), _decimals);
}
export const FromEthers = (_value, _decimals=18) => {
    return ethers.utils.formatUnits(String(_value), _decimals);
}

export const shortStr = (_url) => {
  if(_url == undefined) return;
  return _url.slice(0, 5)+"..."+_url.slice(_url.length-4);
}

// const getBalanceOf = (_token, _addr) => {
// connectContract(contracts[_token].address).then((res) => {
// res.balanceOf(_addr).then((res2) => {
//     return utils.parseEther(res2.toString());
// })
// })
// }

// const changeState = (_state, _structure, _block, _value) => {
// _state((previousState) => ({
// [_structure] : [_structure][_block] = _value
// }));
// }

// const getTransaction = async (blockHash) => {
// const getTx = provider.getTransaction(blockHash).then((res) => {
// const iface = new ethers.utils.Interface(['function transfer(address,uint256)']);
// const txData = iface.decodeFunctionData('transfer', res.data);
// return txData[0];
// })
// };

// const getTokenByAddress = (_addr, _network) => {
//     if(_addr === contracts[_network].RNB.address) return contracts[_network].RNB;
//     if(_addr === contracts[_network].SLP.address) return contracts[_network].SLP;
//     if(_addr === contracts[_network].AXS.address) return contracts[_network].AXS;
//     if(_addr === contracts[_network].WETH.address) return contracts[_network].WETH;
//     if(_addr === contracts[_network].USDC.address) return contracts[_network].USDC;
//     if(_addr === contracts[_network].RON.address) return contracts[_network].RON;
//     if(_addr === contracts[_network].MATIC.address) return contracts[_network].MATIC;
//     if(_addr === contracts[_network].AVAX.address) return contracts[_network].AVAX;
//     if(_addr === contracts[_network].BNB.address) return contracts[_network].BNB;
// }

// const listenTo = async () =>{
// SignContract(contracts['AVAX'].RNB.address, getABI(contracts['AVAX'].RNB.address, ['AVAX']), connectProxyNetwork(Networks['AVAX'].RpcUrls).signer).on("Transfers", (to, name, amount, network, hash) => {
// console.log("New TX: "+hash);
// notify("info", "New TX: "+hash);
// });
// }



const Number_Format = new Intl.NumberFormat('en-US');
const Number_Format_USD = new Intl.NumberFormat('en-US');
const Number_Format_Compact = new Intl.NumberFormat('en-US', { notation: "compact"});
export const CurrencyFormat = (amount) => {
  let value_final;
  let value = Number_Format.format(amount);
  // value = value.split(".")
  // if(value[1]){
  // value_final = value[0] +"."+ value[1].substring(0,2);
  // }else{
  // value_final = value;
  // }
  return value;
}
export const CurrencyFormat2 = (amount) => {
    let value_final;
    let value =  parseFloat(amount).toFixed(6).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    // value = value.split(".")
    // if(value[1]){
    //   value_final = value[0] +"."+ value[1].substring(0,2);
    //   }else{
    //   value_final = value;
    //   }
    return value;
}
export const CurrencyFormatDecimals = (amount, dec) => {
    return Number_Format_Compact.format(amount);
// return parseFloat(amount).toFixed(dec).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}
export const CurrencyFormatUSD = (amount, dec) => {
  let value_final;
  let value = Number_Format_USD.format(amount);
  // value = value.split(".")
  // if(value[1]){
  //   value_final = value[0] +"."+ value[1].substring(0,2);
  //   }else{
  //   value_final = value;
  //   }
  return value;
}

export function sleep(duration){
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

export const loading = (_msg) => {
  const onLoading = toast.loading(_msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
}

export function addGlobalEventListener(
    type,
    selector,
    callback,
    options,
    parent = document
  ) {
    parent.addEventListener(
      type,
      e => {
        if (e.target.matches(selector)) callback(e)
      },
      options
    )
  }
  
  export function qs(selector, parent = document) {
    return parent.querySelector(selector)
  }
  
  export function qsa(selector, parent = document) {
    return [...parent.querySelectorAll(selector)]
  }
  
  export function createElement(type, options = {}) {
    const element = document.createElement(type)
    Object.entries(options).forEach(([key, value]) => {
      if (key === "class") {
        element.classList.add(value)
        return
      }
  
      if (key === "dataset") {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue
        })
        return
      }
  
      if (key === "text") {
        element.textContent = value
        return
      }
  
      element.setAttribute(key, value)
    })
    return element
  }
export const short = (_url) => {
  if(_url == null) return "...";
  else return _url.slice(0, 5)+"..."+_url.slice(_url.length-4);
}

export const BigNumber = (amount, reverted, decimals) => {
    decimals = decimals ?? 18;
    if(reverted) return parseFloat(utils.formatUnits(amount, decimals)).toFixed(decimals/2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    else return utils.formatUnits(amount, decimals);
}

export const MoneyFormat = (labelValue) => { 
  
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+15

       ? parseFloat(Math.abs(Number(labelValue)) / 1.0e+15).toFixed(0) + "T"
       // Six Zeroes for Millions 
       : parseFloat(Math.abs(Number(labelValue)) >= 1.0e+9).toFixed(0)

       ? parseFloat(Math.abs(Number(labelValue)) / 1.0e+9).toFixed(6) + "B"
       // Six Zeroes for Millions 
       : parseFloat(Math.abs(Number(labelValue)) >= 1.0e+6).toFixed(6)

       ? parseFloat(Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
       // Three Zeroes for Thousands
       : parseFloat(Math.abs(Number(labelValue)) >= 1.0e+3).toFixed(2)

       ? parseFloat(Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

       : parseFloat(Math.abs(Number(labelValue))).toFixed(2);

   }

   export const notify = (_type, _msg) => {
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

export const Modal = ({Title, Text}) => {
  const [IsOpen, setIsOpen] = useState(true);
  const CloseModal = () => {
    setIsOpen(false);
  }

  return(
    <div className={`fixed z-[500000] w-screen h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center items-center ${!IsOpen && 'hidden'}`}>
    <div className="m-auto max-w-2xl">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {Title}
                </h3>
                <button onClick={CloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {Text}
                </p>

            </div>
        </div>
    </div>
</div>
  )
}

export const WindowModal = (Status, Head, Body) => {
  const [IsOpen, setIsOpen] = useState(Status);
  const CloseModal = () => {
    setIsOpen(false);
  }
  return(
    <div className={`w-screen h-modal inset-0 m-auto fixed flex z-[5000] justify-center items-center overflow-x-hidden overflow-y-auto ${(!Status) && 'hidden'}`}>
        <div className=" bg-hero opacity-75 w-screen h-modal inset-0 m-auto fixed flex z-[10] justify-center items-center overflow-x-hidden overflow-y-auto"></div>
              <div className="bg-color-box border-[1px] border-black text-pallete-9 w-full md:w-1/2 inset-0 rounded-lg z-[100] shadow-lg m-auto  p-8  animate-slide-up">
              
              <div className="flex items-start justify-between p-2 rounded-t">
                  <div className="kEiMDz flex flex-col lg:flex-row justify-between">
                      <div className="flex items-center  text-lg md:text-2xl">{Head}</div>
                  </div>
                      <button onClick={CloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          <span className="sr-only">Close modal</span>
                      </button>
                  </div>
                  <hr className="sc-bqyKOL gSuxaX"></hr>
                  {Body}
                </div>
            </div>
  );
}

export const ModalRaw = ({Title, Text}) => {
  return(
    <div className="fixed z-[500000] w-screen h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center items-center">
    <div className="m-auto max-w-2xl">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    E-mail Address Required
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>

            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
  )
}

export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const checkCookie = (cname) => {
  let cookie = getCookie(cname);
  if (cookie != "") {
    return true;
  } else {
    return false;
  }
}

export const generateUUID = () => {
  var d = new Date().getTime();
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;
      if(d > 0){
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

export const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

export const copy = (v) => {

  var textField = document.createElement('textarea')
  textField.innerText = v
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
  }