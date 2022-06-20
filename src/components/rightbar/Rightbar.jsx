import React from 'react'
import './rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"> <b>Masum</b> and <b>3 other friends</b> birthday today..</span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">
          Online Friends
        </h4>
        <ul className="rightbarFriendList">
          <li className="rightBarFriend">
            <div className="righbarProfileImgContainer">
              <img src="/assets/person/1.jpg" alt="" className="righbarProfileImg" />
              <span className="rightbarOnline">

              </span>
            </div>
            <span className="righbarUsername">MNR</span>
          </li>
          <li className="rightBarFriend">
            <div className="righbarProfileImgContainer">
              <img src="/assets/person/1.jpg" alt="" className="righbarProfileImg" />
              <span className="rightbarOnline">

              </span>
            </div>
            <span className="righbarUsername">MNR</span>
          </li>
          <li className="rightBarFriend">
            <div className="righbarProfileImgContainer">
              <img src="/assets/person/1.jpg" alt="" className="righbarProfileImg" />
              <span className="rightbarOnline">

              </span>
            </div>
            <span className="righbarUsername">MNR</span>
          </li>
          <li className="rightBarFriend">
            <div className="righbarProfileImgContainer">
              <img src="/assets/person/1.jpg" alt="" className="righbarProfileImg" />
              <span className="rightbarOnline">

              </span>
            </div>
            <span className="righbarUsername">MNR</span>
          </li>
          <li className="rightBarFriend">
            <div className="righbarProfileImgContainer">
              <img src="/assets/person/1.jpg" alt="" className="righbarProfileImg" />
              <span className="rightbarOnline">

              </span>
            </div>
            <span className="righbarUsername">MNR</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
