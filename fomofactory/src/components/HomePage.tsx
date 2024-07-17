'use client'

import React, { useState } from 'react'
import styles from './HomePage.module.css'
import PriceList from './PriceList'

const HomePage = () => {

    const CoinList = ['Bitcoin','Ethereum','Tether','BNB','Solana']

    const [coin,setCoin] = useState("Bitcoin")

    const handleClick = (item:string)=>{
        setCoin(()=>item);
        console.log(coin)
    }

  return (
    <div>
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>{coin}</button>
                <div className={styles.dropdownContent}>
                    {
                    CoinList.map((item)=>{
                        return <button key={item} onClick={()=>handleClick(item)} value={item}>{ item }</button>
                    })
                }
            </div>
        </div>
        <PriceList coin={coin}></PriceList>
    </div>
  )
}

export default HomePage