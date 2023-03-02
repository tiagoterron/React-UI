import { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'


const initialState = {
  user_uuid: null,
  address: null,
  email: null,
  chainId: null,
  isTeam: null,
  shopModal: false,
  walletModal: false,
  supportModal: false,
  withdrawModal: false,
  comingModal: false,
  transferModal: false,
  announcementsModal: false,
  isLoading: false,
  modalWallet: false,
}



export const counterSlice = createSlice(
  {
  name: 'user',
  initialState,
  reducers: {
      setAddress: (state, action) => {
        state.address = action.payload
      },
      setChainId: (state, action) => {
        state.chainId = action.payload
      },
      setIsTeam: (state, action) => {
        state.isTeam = action.payload
      },
      setUserUuid: (state, action) => {
        state.user_uuid = action.payload
      },
      setEmail: (state, action) => {
        state.email = action.payload
      },
      setShopModal: (state, action) => {
        state.shopModal = action.payload
      },
      setTransferModal: (state, action) => {
        state.transferModal = action.payload
      },
      setWithdrawModal: (state, action) => {
        state.withdrawModal = action.payload
      },
      setLoading: (state, action) => {
        state.isLoading = action.payload
      },
      setWalletModal: (state, action) => {
        state.walletModal = action.payload
      },
      setComingModal: (state, action) => {
        state.comingModal = action.payload
      },
      setSupportModal: (state, action) => {
        state.supportModal = action.payload
      },
      setAnnouncementsModal: (state, action) => {
        state.announcementsModal = action.payload
      },
      setModalWallet: (state, action) => {
        state.modalWallet = action.payload
      },
    }
}
)
export const GET_STATE = (key, value) => {
  const user = useSelector((state) => state[key][value])
  return user
}

// Action creators are generated for each case reducer function
export const { 
  setAddress, 
  setEmail, 
  setUserUuid, 
  setChainId, 
  setWalletModal, 
  setSupportModal, 
  setComingModal, 
  setAnnouncementsModal, 
  setIsTeam, 
  setShopModal, 
  setLoading, 
  setWithdrawModal, 
  setModalWallet,
  setTransferModal } = counterSlice.actions

export default counterSlice.reducer