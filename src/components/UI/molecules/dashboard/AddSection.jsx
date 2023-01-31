import React from "react";
import { connect } from "react-redux";

const AddSection = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.sectionHandler("addSection");
  };

  return (
    <form onSubmit={handleSubmit} onBlur={handleSubmit}>
      <div
        style={{ borderTop: `1px solid ${props.color}`, borderRadius: "6px" }}
      >
        <input
          autoFocus
          value={props.sectionTitle}
          onChange={(e) => props.setSectionTitle(e.target.value)}
          required
          className="heading-card font-18"
          type="text"
          style={{ outline: "none", border: "none", height: "50px" }}
        />
      </div>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    isDuplicateField: state.sectionReducer.isDuplicateField,
  };
};
export default connect(mapStateToProps)(AddSection);
