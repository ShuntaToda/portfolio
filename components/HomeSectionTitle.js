import React, { useEffect, useRef, useState } from "react";

export const HomeSectionTitle = ({ mode, sectionColor, setTitleHeight, section }) => {
  const title = useRef(null);
  let page = "PAGE1";
  if (mode == "works") {
    page = "PAGE2";
  } else if (mode == "skills") {
    page = "PAGE3";
  }

  useEffect(() => {
    if (setTitleHeight) {
      setTitleHeight(title.current.getBoundingClientRect().height);
    }
  }, [title]);
  return (
    <>
      <div ref={title}>
        <div className="c-home-section__title">
          <span className="c-home-section__title-left">{page}</span>
          <span
            className={`c-home-section__title-bar ${sectionColor} ${
              mode == section ? "active" : ""
            }`}
          ></span>
          <h2 className="">{mode}</h2>
        </div>
      </div>
    </>
  );
};
