import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listItem.scss"

export default function ListItem({index}) {
  const[isHovered,setIsHovered]=useState(false)
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="listItem" style={{left:isHovered && index*225-50 + index*2.5}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <img src="https://c4.wallpaperflare.com/wallpaper/791/55/776/optimus-prime-4k-transformers-the-last-knight-wallpaper-preview.jpg" alt=""/>
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hr 40 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
            An struggle between two Cybertronian races, the Autobots and the Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  )
}
