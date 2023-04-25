import React from "react";
import {
  RightbarHolder,TopNavHolder

} from "../../assets/styles/RightSideBarStyle";
import NavRightBar from "./NavRightBar";

import {
  CommunityContentHolder,
  CreatePostAndMessageHolder,
  EventsHolder,
  CreatePostHolder,
  PostMessagesHolder,MessageContentHolder,
  LikeCommentShareHolder,
  DetailsOfTheMessage,
  UserdetailsForMessage,InnerEventHolder
 
} from "../../assets/styles/CommunityRightBarStyles";

import { TiLocationArrow } from "react-icons/ti";
import {BsChatTextFill, BsFillCameraReelsFill} from "react-icons/bs";
import {FaImage, FaHeart,FaComment,FaShareAlt,FaBusinessTime} from "react-icons/fa";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {IoLocationSharp} from "react-icons/io5";
import UserImage from '../../assets/images/user-dashboard-image.jpg';

const CommunityRightBar = () => {
  return (
    <RightbarHolder>
        {/* nav started from here */}
        <TopNavHolder>
        <NavRightBar />
        </TopNavHolder>
       
        {/* nav ends here */}

        {/* content started from here */}
        <CommunityContentHolder>
        <CreatePostAndMessageHolder>
        <CreatePostHolder>
              <div className="createPostHolderHeader pb-2 pt-2">
                <span>Create post</span>
              </div>
<div className="postFormHolder">

              <form action="">
                <div className="textFieldHolder">
                <BsChatTextFill className="postTextIcon" color="#979797" size="38px" />
                    <textarea name="" id="" cols="80" rows="6" placeholder="What's up, Daniel"></textarea>
                    
                </div>

                <div className="submitButAndVideoImgIcons">
                  <div className="videoImgIconHolder">
                      <div className="image">
                        <FaImage color="#92E3A9" size="15px"/>
                        <span>Image</span>
                      </div>
                      <div className="video">
                        <BsFillCameraReelsFill color="#92E3A9" size="15px"/>
                        <span>Video</span>
                      </div>
                  </div>
                <div className="submitButtonHolder">
                  <button>Publish <TiLocationArrow className="arrowIconForButton" color="#FFFFFF" size="22px" />
</button>
                </div>
                </div>
              </form>
              </div>

            </CreatePostHolder>

            <PostMessagesHolder className="mt-5 mb-5">
              <MessageContentHolder>
                <UserdetailsForMessage>
                    <div className="userNameAndImage">
                          <div className="image">
                            <img src={UserImage} alt='userImg' />
                          </div>

                          <div className="nameAndTime">
                              <span className="name">Mahlodi Letsie</span>
                              <span className="time">5 mins ago. Public</span>
                          </div>
                    </div>

                    <div className="icon">
                        <BiDotsVerticalRounded className="dotIcon" />
                    </div>
                </UserdetailsForMessage>

                <DetailsOfTheMessage className="mt-3">
                    <p>
                      Hello,i am a new bare minder, hoping to meet great people on this platorm,
                       maybe we can meet up to have a coffee?
                       </p>
                </DetailsOfTheMessage>

                <LikeCommentShareHolder>
                <div className="likes">
                        <FaHeart color="#979797" size="15px"/>
                        <span>187 Likes</span>
                      </div>
                      <div className="comments">
                        <FaComment color="#979797" size="15px"/>
                        <span>24 Comments</span>
                      </div>
                      <div className="shares">
                        <FaShareAlt color="#979797" size="15px"/>
                        <span>3 Shares</span>
                      </div>
                </LikeCommentShareHolder>

              </MessageContentHolder>

            </PostMessagesHolder>


            <PostMessagesHolder className="mt-5">
              <MessageContentHolder>
                <UserdetailsForMessage>
                    <div className="userNameAndImage">
                          <div className="image">
                            <img src={UserImage} alt='userImg' />
                          </div>

                          <div className="nameAndTime">
                              <span className="name">Mahlodi Letsie</span>
                              <span className="time">5 mins ago. Public</span>
                          </div>
                    </div>

                    <div className="icon">
                        <BiDotsVerticalRounded className="dotIcon" />
                    </div>
                </UserdetailsForMessage>

                <DetailsOfTheMessage className="mt-3">
                    <p>
                      Hello,i am a new bare minder, hoping to meet great people on this platorm,
                       maybe we can meet up to have a coffee?
                       </p>
                </DetailsOfTheMessage>

                <LikeCommentShareHolder>
                <div className="likes">
                        <FaHeart color="#979797" size="15px"/>
                        <span>187 Likes</span>
                      </div>
                      <div className="comments">
                        <FaComment color="#979797" size="15px"/>
                        <span>24 Comments</span>
                      </div>
                      <div className="shares">
                        <FaShareAlt color="#979797" size="15px"/>
                        <span>3 Shares</span>
                      </div>
                </LikeCommentShareHolder>

              </MessageContentHolder>

            </PostMessagesHolder>
        </CreatePostAndMessageHolder>


        <EventsHolder>
        <h2>Event</h2>

<InnerEventHolder>
  <div className="upComingTextAndDotIcon">
      <span className="upcomingtext">Upcoming event</span>
      <BiDotsVerticalRounded className="dots"/>
  </div>

  <div className="eventDetailsHolder">
    <div className="detailsOfTheEvent">
        <span>Instructor Meet-up</span>
        <p>
          You can meet up
           with your favorite instructors 
            and a chat
            </p>
    </div>

    <div className="dayOfEvent">
    <span>13</span>
        <p>
        MON
            </p>
    </div>

  </div>

  <div className="venueDateTime">
      <span className="details">Details</span>
      <span className="dateTime"><FaBusinessTime color="#979797"/> Date:  12:00pm -  12/03/2021</span>
      <span className="address"><IoLocationSharp color="#979797"/> Venue:  No 2, Multipurpose Hall, SA</span>
  </div>

  <div className="bookButton">
        <button>Book</button>
  </div>
  </InnerEventHolder>

  <InnerEventHolder>
  <div className="upComingTextAndDotIcon">
      <span className="upcomingtext">Upcoming event</span>
      <BiDotsVerticalRounded className="dots"/>
  </div>

  <div className="eventDetailsHolder">
    <div className="detailsOfTheEvent">
        <span>Instructor Meet-up</span>
        <p>
          You can meet up
           with your favorite instructors 
            and a chat
            </p>
    </div>

    <div className="dayOfEvent">
    <span>13</span>
        <p>
        MON
            </p>
    </div>

  </div>

  <div className="venueDateTime">
      <span className="details">Details</span>
      <span className="dateTime"><FaBusinessTime color="#979797"/> Date:  12:00pm -  12/03/2021</span>
      <span className="address"><IoLocationSharp color="#979797"/> Venue:  No 2, Multipurpose Hall, SA</span>
  </div>

  <div className="bookButton">
        <button>Book</button>
  </div>
  </InnerEventHolder>
        </EventsHolder>


          {/* <CreatePostAndMessageHolder>
            <CreatePostHolder>
              <div className="createPostHolderHeader pb-2 pt-2">
                <span>Create post</span>
              </div>
<div className="postFormHolder">

              <form action="">
                <div className="textFieldHolder">
                <BsChatTextFill className="postTextIcon" color="#979797" size="38px" />
                    <textarea name="" id="" cols="80" rows="6" placeholder="What's up, Daniel"></textarea>
                    
                </div>

                <div className="submitButAndVideoImgIcons">
                  <div className="videoImgIconHolder">
                      <div className="image">
                        <FaImage color="#92E3A9" size="15px"/>
                        <span>Image</span>
                      </div>
                      <div className="video">
                        <BsFillCameraReelsFill color="#92E3A9" size="15px"/>
                        <span>Video</span>
                      </div>
                  </div>
                <div className="submitButtonHolder">
                  <button>Publish <TiLocationArrow className="arrowIconForButton" color="#FFFFFF" size="22px" />
</button>
                </div>
                </div>
              </form>
              </div>

            </CreatePostHolder>

            <PostMessagesHolder className="mt-5 mb-5">
              <MessageContentHolder>
                <UserdetailsForMessage>
                    <div className="userNameAndImage">
                          <div className="image">
                            <img src={UserImage} alt='userImg' />
                          </div>

                          <div className="nameAndTime">
                              <span className="name">Mahlodi Letsie</span>
                              <span className="time">5 mins ago. Public</span>
                          </div>
                    </div>

                    <div className="icon">
                        <BiDotsVerticalRounded className="dotIcon" />
                    </div>
                </UserdetailsForMessage>

                <DetailsOfTheMessage className="mt-3">
                    <p>
                      Hello,i am a new bare minder, hoping to meet great people on this platorm,
                       maybe we can meet up to have a coffee?
                       </p>
                </DetailsOfTheMessage>

                <LikeCommentShareHolder>
                <div className="likes">
                        <FaHeart color="#979797" size="15px"/>
                        <span>187 Likes</span>
                      </div>
                      <div className="comments">
                        <FaComment color="#979797" size="15px"/>
                        <span>24 Comments</span>
                      </div>
                      <div className="shares">
                        <FaShareAlt color="#979797" size="15px"/>
                        <span>3 Shares</span>
                      </div>
                </LikeCommentShareHolder>

              </MessageContentHolder>

            </PostMessagesHolder>


            <PostMessagesHolder className="mt-5">
              <MessageContentHolder>
                <UserdetailsForMessage>
                    <div className="userNameAndImage">
                          <div className="image">
                            <img src={UserImage} alt='userImg' />
                          </div>

                          <div className="nameAndTime">
                              <span className="name">Mahlodi Letsie</span>
                              <span className="time">5 mins ago. Public</span>
                          </div>
                    </div>

                    <div className="icon">
                        <BiDotsVerticalRounded className="dotIcon" />
                    </div>
                </UserdetailsForMessage>

                <DetailsOfTheMessage className="mt-3">
                    <p>
                      Hello,i am a new bare minder, hoping to meet great people on this platorm,
                       maybe we can meet up to have a coffee?
                       </p>
                </DetailsOfTheMessage>

                <LikeCommentShareHolder>
                <div className="likes">
                        <FaHeart color="#979797" size="15px"/>
                        <span>187 Likes</span>
                      </div>
                      <div className="comments">
                        <FaComment color="#979797" size="15px"/>
                        <span>24 Comments</span>
                      </div>
                      <div className="shares">
                        <FaShareAlt color="#979797" size="15px"/>
                        <span>3 Shares</span>
                      </div>
                </LikeCommentShareHolder>

              </MessageContentHolder>

            </PostMessagesHolder>
          </CreatePostAndMessageHolder>

          <EventsHolder>
          <h2>Event</h2>

            <InnerEventHolder>
              <div className="upComingTextAndDotIcon">
                  <span className="upcomingtext">Upcoming event</span>
                  <BiDotsVerticalRounded className="dots"/>
              </div>

              <div className="eventDetailsHolder">
                <div className="detailsOfTheEvent">
                    <span>Instructor Meet-up</span>
                    <p>
                      You can meet up
                       with your favorite instructors 
                        and a chat
                        </p>
                </div>

                <div className="dayOfEvent">
                <span>13</span>
                    <p>
                    MON
                        </p>
                </div>

              </div>

              <div className="venueDateTime">
                  <span className="details">Details</span>
                  <span className="dateTime"><FaBusinessTime color="#979797"/> Date:  12:00pm -  12/03/2021</span>
                  <span className="address"><IoLocationSharp color="#979797"/> Venue:  No 2, Multipurpose Hall, SA</span>
              </div>

              <div className="bookButton">
                    <button>Book</button>
              </div>
              </InnerEventHolder>

              <InnerEventHolder>
              <div className="upComingTextAndDotIcon">
                  <span className="upcomingtext">Upcoming event</span>
                  <BiDotsVerticalRounded className="dots"/>
              </div>

              <div className="eventDetailsHolder">
                <div className="detailsOfTheEvent">
                    <span>Instructor Meet-up</span>
                    <p>
                      You can meet up
                       with your favorite instructors 
                        and a chat
                        </p>
                </div>

                <div className="dayOfEvent">
                <span>13</span>
                    <p>
                    MON
                        </p>
                </div>

              </div>

              <div className="venueDateTime">
                  <span className="details">Details</span>
                  <span className="dateTime"><FaBusinessTime color="#979797"/> Date:  12:00pm -  12/03/2021</span>
                  <span className="address"><IoLocationSharp color="#979797"/> Venue:  No 2, Multipurpose Hall, SA</span>
              </div>

              <div className="bookButton">
                    <button>Book</button>
              </div>
              </InnerEventHolder>
          </EventsHolder> */}
        </CommunityContentHolder>

        {/* content ends here */}
    </RightbarHolder>
  );
};

export default CommunityRightBar;
