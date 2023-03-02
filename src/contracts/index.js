import { images } from '../constants';
import abi from './abi';

const Tokenomics = {
    totalUSDCStaked: null
}


const Tokens = {
    BUSD: {
        Symbol: "BUSD",
        Title: "BUSD",
        Name: "Binance USD",
        Decimals: 18
    },
    IBR: {
        Symbol: "IBR",
        Title: "IBR",
        Name: "Ironberg",
        Decimals: 18
    },
    BNB: {
        Symbol: "BNB",
        Title: "BNB",
        Name: "Binance Coin",
        Decimals: 18
    }
    
}


const Contracts = {
    "97": {
        STAKING: {address: "0xfCf33FdFc8bE85810d318e0945b7D72Bf11FE4d7", abi: abi.STAKING},
        VAULT: {address: "0xae065D44264C19c1f6B9727927C05489C3CBdc2B", abi: abi.VAULT},
        ROUTER: {address: "0xD99D1c33F9fC3444f8101754aBC46c52416550D1", abi: abi.ROUTER},
        BUSD: {address: "0xDabEFEc8c8ef5e14D45469A0375889fcDDEd4ADA", abi: abi.BUSD},
        IBR: {address: "0x35cd9441D17Dc50cf34eab088631cB0C0785448C", abi: abi.DUC},
        WBNB: {address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd", abi: abi.BUSD},
        BNB: {address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd", abi: abi.BUSD},
        SALES: {address: "0x9B4000aA9e463979C3d3fe844Ac340818f71E58B", abi: abi.SALES},
        TOOLS: {address: "0x361DdDDd96035Ca30748FE08202A7baf83237De3", abi: abi.TOOLS},
        SIGNER: {address: "0xcD8b2c35935f496ED30D5209f1A1Da4713F38D4B", abi: null},
        PAIR_IBR_BNB: {address: "0x810B24811b570E83366AC0d49Cf7181096D3249E", abi: abi.PAIR},
        PAIR_IBR_BUSD: {address: "0x60E0B36302f5ea6Da6E896B728Eb92a5D98A100B", abi: abi.PAIR},
    },
    
}

const ADMIN = {address: "0x5665C8147E9255Ad9BdD9077A43aA89367A24405"}

const TEAM = [
    "0x5665C8147E9255Ad9BdD9077A43aA89367A24405",
    "0x8e31C377DAF0B3148cE32F5e386E81350CE7f5d5"
];

export { Tokens, Contracts, Tokenomics, ADMIN, TEAM };