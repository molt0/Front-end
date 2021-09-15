import React, { useEffect, useState } from 'react'
import Album from "./Album"

const Renewal = ({albums, isVertHoriz, isContentSolt, gangr}) =>{
    const [re, setRenewal] = useState(albums)
    var aList = albums

    // 순서 정렬
    function contentSolt(){
        switch (isContentSolt){
            
            case "인기순":
                aList = aList.sort((a, b) => { 
                    return b.like - a.like 
                })
                break
            case "최신순":
                aList = aList.sort((a, b) => {
                    return b.date.getTime() - a.date.getTime() 
                })
                break
        }
    }

    //장르 필터
    function strainer(){
        if(gangr != ""){
            aList = albums.filter((element)=>{ 
                if(element.type == gangr) return true
            })
        } else{
            aList = albums
        }
    }

    useEffect(()=>{
        aList = albums
        strainer()  // 필터
        contentSolt()   // 정렬
        setRenewal(aList)
        
        console.log([albums, isVertHoriz, isContentSolt, gangr])
    }, [albums, isVertHoriz, isContentSolt, gangr])

    return(
        re.map((album, index) => (
            <Album album={album} isVertHoriz={isVertHoriz} key={index} />
        ))
    )
}

export default Renewal