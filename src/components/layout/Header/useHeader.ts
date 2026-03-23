import { useState } from "react"

export default function useHeader(){
    
    const [
        headerMode, setHeaderMode
    ] = useState<'desktop'|'mobile'>('desktop')

    const [
        headerContent, setHeaderContent
    ] = useState<{
        
    }[]>([])

    return{
        headerMode
    }
}