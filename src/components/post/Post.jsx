import React from 'react'

import './post.css'

import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                    <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
                    <span className='postUsername'>Md Naimur Rahman</span>
                    <span className='postDate'>5min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    Its my first post!! :) 😊
                    <img className="postImg" src="/assets/post/1.jpg" alt="" />
                </span>
            </div>
            <post className="Bottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt="" />
                <img className="likeIcon" src="/assets/heart.png" alt="" />
                <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </post>
        </div>
    </div>
  )
}
