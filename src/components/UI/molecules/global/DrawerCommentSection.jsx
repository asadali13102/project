import React from "react";

const DrawerCommentSection = (props) => {

  function replaceWithBr(val) {
    return val.replace(/\n/g, "<br />");
  }
  return (
    <div className="mt-15" style={{ marginTop: props.mt }}>
      <div className="d-flex">
        <div className="profile">
          <img
            src={`/images/icons/${props.src}`}
            style={{ height: props.height }}
            alt="icon"
          />
        </div>
        <div>
          <div className="d-flex align-center">
            <div className={props.nameClass}>{props.name}</div>
            <div style={{ color: "#ADADAD", marginLeft: "20px" }}>
              {props.hours}
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: replaceWithBr(props.comment) }}
            style={{
              marginTop: props.commentPadding,
              width: props.containerWidth,
              textAlign: "inherit",
            }}
            className={props.commentClass}
          />
          
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default DrawerCommentSection;
