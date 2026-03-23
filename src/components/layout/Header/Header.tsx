'use client'

import HeaderDesktop from "./HeaderDesktop"
import HeaderMobile from "./HeaderMobile"
import useHeader from "./useHeader"

import siteLogo from '@/assets/img/icons/site-logo.png'

export default function Header(){
    
    const {
        headerMode
    } = useHeader()

    return(
        <header
            className="p-5 bg-sky-400"
        >
            <img
                src={siteLogo}
                alt="Site logo"
            />

            {
                headerMode == 'desktop'
                ? <HeaderDesktop/>
                : <HeaderMobile/>
            }
            
        </header>
    )
}