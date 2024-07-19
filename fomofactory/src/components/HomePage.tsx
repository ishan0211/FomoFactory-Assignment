'use client'

import React, { useEffect, useState } from 'react'
import styles from './HomePage.module.css'
import PriceList from './PriceList'
import { setCoin } from '@/store/features/auth-slice'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/store/store'

const HomePage = () => {

    const CoinList = ['Bitcoin','Ethereum','Tether','BNB','Solana']

    const dispatch = useDispatch<AppDispatch>();

    const coin = useAppSelector((state)=> state.authReducer.value.coin)

    // const [coin,setCoin] = useState("Bitcoin")

    const handleClick = (item:string)=>{
        dispatch(setCoin(item));
        localStorage.setItem('coin', item);
        // setCoin(()=>item);
    }

    useEffect(() => {
        console.log("lund"+coin)
      return () => {
      }
    }, [coin])

  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
        <ul>
            {CoinList.map((item)=>{
                    return <li key={item} className={coin===item?styles.active:styles.inactive} onClick={()=>handleClick(item)} value={item}><a>{ item }</a></li>
                })}
        </ul>
    </div>
    <PriceList coin={coin}></PriceList>
    </div>
  )
}

export default HomePage