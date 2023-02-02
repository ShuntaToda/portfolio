import React from "react";

export const HomeSectionButton = ({ mode, section, setSection }) => {
  const changeSection = () => {
    setSection(mode);
  };
  return (
    <>
      <div
        className={`c-home-section__button ${mode} ${mode == section ? "none" : ""}`}
        onClick={changeSection}
      >
        <span>{mode}</span>
      </div>
    </>
  );
};
