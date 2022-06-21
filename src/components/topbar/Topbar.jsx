import React from 'react'
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import './topbar.css'

export default function Topbar() {
  return (
    <div className="tobarContainer">

      <div className="topbarLeft">
        <span className='logo'>MNR-social</span>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder='Search for friend,post or video' className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbariconBadge">
              1
            </span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbariconBadge">
              2
            </span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbariconBadge">
              15
            </span>
          </div>
        </div>

        <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
      </div>

    </div>
  )
}
