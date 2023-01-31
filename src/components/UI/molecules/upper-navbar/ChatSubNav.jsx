import React from "react";
import IconAndName from "../../atoms/side-navbar/IconAndName";
import Icon from "../../atoms/global/Icon";
// import { useSelector } from "react-redux";

const ChatSubNav = (props) => {
  // const isTicketOpen = useSelector((state) => state.toggleReducer.isTicketOpen);

  return (
    <div className="d-flex">
      <div className="d-flex justify-content-between sub-nav-area">
        <div className="d-flex align-center">
        <IconAndName
            name="Favorities"
            src="star.svg"
            height="20px"
            mr="20px"
            class="font-14"
            color='#434343'
          />
           <IconAndName
            name="Add a bookmark"
            src="bookmark.svg"
            height="20px"
            mr="20px"
            class="font-14"
            color='#434343'
          />
        </div>
        <div className="d-flex">
            <Icon name="video-call.svg" height="20px" pr="28px" />
            <Icon name="call.svg" height="20px" pr="28px" />
            <Icon name="stack.svg" height="20px" />
        </div>
      </div>
    </div>
  );
};

export default ChatSubNav;
