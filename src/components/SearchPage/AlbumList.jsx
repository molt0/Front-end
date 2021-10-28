import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import Album from "./Album"

const AlbumList = ({ albums, isVertHoriz, isContentSort, genre,}) => {
  const [re, setRenewal] = useState(albums)
  var aList = albums


  // 순서 정렬
  function contentSort() {
    switch (isContentSort) {
      case "인기":
        aList.sort((a, b) => {
          return b.like - a.like
        })
        break
      case "최신":
        aList.sort((a, b) => {
          return b.date.getTime() - a.date.getTime()
        })
        break
    }
  }

  //장르 필터
  function strainer() {
    if (genre != "") {
      aList = aList.filter((element) => {
        if (element.type == genre) return true
    })}
  }

  useEffect(() => {
    aList = albums
    contentSort()   // 정렬
    strainer()  // 필터
    setRenewal(aList)
  }, [albums, isVertHoriz, isContentSort, genre])

  return (
    re.map((album, index) => (
      <Link to={`/specific/view/${album.name}:${album.artist}`}>
        <Album album={album} isVertHoriz={isVertHoriz} key={index} />
      </Link>
    ))
  )
}

export default AlbumList