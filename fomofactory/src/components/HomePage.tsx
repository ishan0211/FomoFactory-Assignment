'use client'

import React, { useState } from 'react'
import styles from './HomePage.module.css'
import PriceList from './PriceList'
import styless from './Navbar.module.css'

const HomePage = () => {

    const CoinList = ['Bitcoin','Ethereum','Tether','BNB','Solana']

    const [coin,setCoin] = useState("Bitcoin")

    const handleClick = (item:string)=>{
        setCoin(()=>item);
    }

  return (
    <div>
        <div className={styless.navbar}>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li className={styles.dropdown}>
                <a className={styles.dropbtn}>{coin}</a>
                <div className={styles.dropdownContent}>
                        {CoinList.map((item)=>{
                                    return <button key={item} onClick={()=>handleClick(item)} value={item}>{ item }</button>
                                })}
                </div>
            </li>
        </ul>
    </div>
    <PriceList coin={coin}></PriceList>
    </div>
  )
}

export default HomePage