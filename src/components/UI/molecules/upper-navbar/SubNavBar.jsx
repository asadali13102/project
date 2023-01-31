import React from "react";
import IconAndName from "../../atoms/side-navbar/IconAndName";
import { useSelector } from "react-redux";

const SubNavBar = (props) => {
  const isTicketOpen = useSelector((state) => state.toggleReducer.isTicketOpen);

  return (
    <div className="d-flex">
      <div className="d-flex justify-content-between sub-nav-area">
        <div>Last task completed on sept 20 2022</div>
        {!isTicketOpen ? (
          <div className="d-flex">
            <IconAndName
              name="All tasks"
              src="task.svg"
              height="16px"
              mr="24px"
              class="subnavlinks"
            />
            <IconAndName
              name="Filter"
              src="filter.svg"
              height="16px"
              mr="24px"
              class="subnavlinks"
            />
            <IconAndName
              name="Sort"
              src="sort.svg"
              height="16px"
              mr="24px"
              class="subnavlinks"
            />
            <IconAndName
              name="Group by: Status"
              src="groupstack.svg"
              height="16px"
              mr="24px"
              class="subnavlinks"
            />
            <IconAndName
              name="Show"
              src="show.svg"
              height="16px"
              class="subnavlinks"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SubNavBar;
