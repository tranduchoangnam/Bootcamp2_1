import './App.css';
import React from 'react';
function App(){
  return (
  <>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <nav className="navbar">
    <div className="navmain">
      <img src={require('./image/Instagram.png')} className="brand" />
      <input type="text" className="input-search" placeholder="Search" />
      <div className="navicon">
        <img src={require('./image/home.png')} className="icon" />
        <img src={require('./image/message.png')} className="icon" />
        <img src={require('./image/post.png')} className="icon" />
        <img src={require('./image/explore.png')} className="icon" />
        <img src={require('./image/like.png')} className="icon" />
        <div className="icon profile" />
      </div>
    </div>
  </nav>
  <div className="base">
    <div className="main">
      <div className="bar-left">
        <div className="stories-bar">
          <div className="user-stories">
            <div className="avatar">
              {" "}
              <img src={require('./image/post/post1.png')} className="imgstr" />
            </div>
            <div className="user">
              <p>twyndn</p>
            </div>
          </div>
          <div className="user-stories">
            <div className="avatar">
              {" "}
              <img src={require('./image/post/post2.png')} className="imgstr" />
            </div>
            <div className="user">
              <p>fuurie_</p>
            </div>
          </div>
          <div className="user-stories">
            <div className="avatar">
              {" "}
              <img src={require('./image/post/avasontung.png')} className="imgstr" />
            </div>
            <div className="user">
              <p>sontungmtp</p>
            </div>
          </div>
          <div className="user-stories">
            <div className="avatar">
              {" "}
              <img src={require('./image/post/post3.png')} className="imgstr" />
            </div>
            <div className="user">
              <p>tgiangya</p>
            </div>
          </div>
          <div className="user-stories">
            <div className="avatar">
              {" "}
              <img src={require('./image/profile.jpg')} className="imgstr" />
            </div>
            <div className="user">
              <p>h.viviha</p>
            </div>
          </div>
          <div className="user-stories">
            <div className="avatar">
              {" "}
              <img src={require('./image/post/post4.png')} className="imgstr" />
            </div>
            <div className="user">
              <p>trangdee_</p>
            </div>
          </div>
          <div className="user-stories">
            <div className="avatar">
              {" "}
              <img src={require('./image/profile.jpg')} className="imgstr" />
            </div>
            <div className="user">
              <p>user_name</p>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="box">
            <div className="avatar">
              <img src={require('./image/post/avasontung.png')} className="imgstr" />
            </div>
            <p className="user">sontungmtp</p>
            <img src={require('./image/3dots.png')} className="icon" />
          </div>
          <img src={require('./image/post/post4.png')} className="pic" />
          <div className="react">
            <div>
              <img src={require('./image/react/likes.png')} className="icon" />
              <img src={require('./image/react/comments.png')} className="icon" />
              <img src={require('./image/react/share.png')} className="icon" />
            </div>
            <img src={require('./image/react/save.png')} className="icon right" />
          </div>
          <p className="name">91,570 likes</p>
          <p className="name">
            sontungmtp{" "}
            <span className="caption">
              chưa chắc đã giống đâu hâhhahha hhhhh hhhhhh hhhhhh hhhhh hhhh
              hhhshshsh{" "}
            </span>
          </p>
          <p className="name view">View all 1,136 comments</p>
          <div className="day">
            <p className="left">7 DAYS AGO</p>
          </div>
          <div className="comment">
            <div className="comment-left">
              <img src={require('./image/react/emoji.png')} className="icon left" />
              <input
                type="text"
                className="input-comment"
                placeholder="Add a comment..."
              />
            </div>
            <p className="right post-button">Post</p>
          </div>
        </div>
        <div className="post">
          <div className="box">
            <div className="avatar">
              <img src={require('./image/post/post3.png')} className="imgstr" />
            </div>
            <p className="user">tgiangya</p>
            <img src={require('./image/3dots.png')} className="icon" />
          </div>
          <img src={require('./image/post/post3.png')} className="pic" />
          <div className="react">
            <div>
              <img src={require('./image/react/likes.png')} className="icon" />
              <img src={require('./image/react/comments.png')} className="icon" />
              <img src={require('./image/react/share.png')} className="icon" />
            </div>
            <img src={require('./image/react/save.png')} className="icon right" />
          </div>
          <p className="name">1,927 likes</p>
          <p className="name">
            tgiangya{" "}
            <span className="caption">
              chưa chắc đã giống đâu hâhhahha hhhhh hhhhhh hhhhhh hhhhh hhhh
              hhhshshsh{" "}
            </span>
          </p>
          <p className="name view">View all 231 comments</p>
          <div className="day">
            <p className="left">5 DAYS AGO</p>
          </div>
          <div className="comment">
            <div className="comment-left">
              <img src={require('./image/react/emoji.png')} className="icon left" />
              <input
                type="text"
                className="input-comment"
                placeholder="Add a comment..."
              />
            </div>
            <p className="right post-button">Post</p>
          </div>
        </div>
        <div className="post">
          <div className="box">
            <div className="avatar">
              <img src={require('./image/post/avasontung.png')} className="imgstr" />
            </div>
            <p className="user">sontungmtp</p>
            <img src={require('./image/3dots.png')} className="icon" />
          </div>
          <img src={require('./image/post/post2.png')} className="pic" />
          <div className="react">
            <div>
              <img src={require('./image/react/likes.png')} className="icon" />
              <img src={require('./image/react/comments.png')} className="icon" />
              <img src={require('./image/react/share.png')} className="icon" />
            </div>
            <img src={require('./image/react/save.png')} className="icon right" />
          </div>
          <p className="name">91,570 likes</p>
          <p className="name">
            sontungmtp{" "}
            <span className="caption">
              chưa chắc đã giống đâu hâhhahha hhhhh hhhhhh hhhhhh hhhhh hhhh
              hhhshshsh{" "}
            </span>
          </p>
          <p className="name view">View all 1,136 comments</p>
          <div className="day">
            <p className="left">7 DAYS AGO</p>
          </div>
          <div className="comment">
            <div className="comment-left">
              <img src={require('./image/react/emoji.png')} className="icon left" />
              <input
                type="text"
                className="input-comment"
                placeholder="Add a comment..."
              />
            </div>
            <p className="right post-button">Post</p>
          </div>
        </div>
        <div className="post">
          <div className="box">
            <div className="avatar">
              <img src={require('./image/post/avasontung.png')} className="imgstr" />
            </div>
            <p className="user">sontungmtp</p>
            <img src={require('./image/3dots.png')} className="icon" />
          </div>
          <img src={require('./image/post/post1.png')} className="pic" />
          <div className="react">
            <div>
              <img src={require('./image/react/likes.png')} className="icon" />
              <img src={require('./image/react/comments.png')} className="icon" />
              <img src={require('./image/react/share.png')} className="icon" />
            </div>
            <img src={require('./image/react/save.png')} className="icon right" />
          </div>
          <p className="name">91,570 likes</p>
          <p className="name">
            sontungmtp{" "}
            <span className="caption">
              chưa chắc đã giống đâu hâhhahha hhhhh hhhhhh hhhhhh hhhhh hhhh
              hhhshshsh{" "}
            </span>
          </p>
          <p className="name view">View all 1,136 comments</p>
          <div className="day">
            <p className="left">7 DAYS AGO</p>
          </div>
          <div className="comment">
            <div className="comment-left">
              <img src={require('./image/react/emoji.png')} className="icon left" />
              <input
                type="text"
                className="input-comment"
                placeholder="Add a comment..."
              />
            </div>
            <p className="right post-button">Post</p>
          </div>
        </div>
      </div>
      <div className="bar-right">
        <div className="sug-bar">
          <div className="box">
            <div className="info">
              <img src={require('./image/profile.jpg')} className="imgstr" />
              <p className="name">
                psychonion
                <br />
                <stan className="caption" style={{ color: "grey" }}>
                  Hoàng Nam
                </stan>
              </p>
            </div>
            <p
              className="post-button"
              style={{ fontSize: 13, fontFamily: '"Roboto"' }}
            >
              Switch
            </p>
          </div>
          <div className="box">
            <p
              className="name"
              style={{ fontSize: 14, marginLeft: 0, color: "rgb(142,142,142)" }}
            >
              Suggestions for you
            </p>
            <p
              style={{
                fontSize: 13,
                fontFamily: '"Roboto"',
                cursor: "pointer"
              }}
            >
              See All
            </p>
          </div>
          <div className="box">
            <div className="info">
              <img
                src={require('./image/post/post2.png')}
                className="imgstr"
                style={{ height: 40, width: 40 }}
              />
              <p className="name" style={{ marginLeft: 5 }}>
                user_name
                <br />
                <stan
                  className="caption"
                  style={{ color: "rgb(142,142,142)", fontSize: 12 }}
                >
                  Suggested for you
                </stan>
              </p>
            </div>
            <p
              className="post-button right"
              style={{ fontSize: 13, fontFamily: '"Roboto"' }}
            >
              Follow
            </p>
          </div>
          <div className="box">
            <div className="info">
              <img
                src={require('./image/post/post2.png')}
                className="imgstr"
                style={{ height: 40, width: 40 }}
              />
              <p className="name" style={{ marginLeft: 5 }}>
                user_name
                <br />
                <stan
                  className="caption"
                  style={{ color: "rgb(142,142,142)", fontSize: 12 }}
                >
                  Suggested for you
                </stan>
              </p>
            </div>
            <p
              className="post-button right"
              style={{ fontSize: 13, fontFamily: '"Roboto"' }}
            >
              Follow
            </p>
          </div>
          <div className="box">
            <div className="info">
              <img
                src={require('./image/post/post2.png')}
                className="imgstr"
                style={{ height: 40, width: 40 }}
              />
              <p className="name" style={{ marginLeft: 5 }}>
                user_name
                <br />
                <stan
                  className="caption"
                  style={{ color: "rgb(142,142,142)", fontSize: 12 }}
                >
                  Suggested for you
                </stan>
              </p>
            </div>
            <p
              className="post-button right"
              style={{ fontSize: 13, fontFamily: '"Roboto"' }}
            >
              Follow
            </p>
          </div>
          <div className="box">
            <div className="info">
              <img
                src={require('./image/post/post2.png')}
                className="imgstr"
                style={{ height: 40, width: 40 }}
              />
              <p className="name" style={{ marginLeft: 5 }}>
                user_name
                <br />
                <stan
                  className="caption"
                  style={{ color: "rgb(142,142,142)", fontSize: 12 }}
                >
                  Suggested for you
                </stan>
              </p>
            </div>
            <p
              className="post-button right"
              style={{ fontSize: 13, fontFamily: '"Roboto"' }}
            >
              Follow
            </p>
          </div>
          <div className="box">
            <div className="info">
              <img
                src={require('./image/post/post2.png')}
                className="imgstr"
                style={{ height: 40, width: 40 }}
              />
              <p className="name" style={{ marginLeft: 5 }}>
                user_name
                <br />
                <stan
                  className="caption"
                  style={{ color: "rgb(142,142,142)", fontSize: 12 }}
                >
                  Suggested for you
                </stan>
              </p>
            </div>
            <p
              className="post-button right"
              style={{ fontSize: 13, fontFamily: '"Roboto"' }}
            >
              Follow
            </p>
          </div>
          <div className="info ">
            <p
              className="caption"
              style={{
                marginRight: 30,
                color: "rgb(207,207,207)",
                fontSize: 12
              }}
            >
              <br />
              About Help Press API Jobs Privacy Terms Locations Language{" "}
            </p>
          </div>
          <div className="info">
            <p
              className="caption"
              style={{ color: "rgb(207,207,207)", fontSize: 12 }}
            >
              © 2022 INSTAGRAM FROM HOANG NAM:))))
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )

}
export default App;