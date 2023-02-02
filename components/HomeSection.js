import React, { useState } from "react";
import { HomeSectionButton } from "./HomeSectionButton";
import { HomeSectionContent } from "./HomeSectionContent";
import { HomeSectionTitle } from "./HomeSectionTitle";

const HomeSection = ({ mode, section, setSection, logoHeight }) => {
  const [titleHeight, setTitleHeight] = useState(0);

  let sectionColor = "red";
  let top = 0;
  let left = 0;
  if (mode == "profile") {
  } else if (mode == "works") {
    sectionColor = "blue";
  } else if (mode == "skills") {
    sectionColor = "green";
  }

  if (section == "profile") {
    if (mode == "profile") {
      top = 0;
      left = 0;
    } else if (mode == "works") {
      top = 100;
      left = -100;
    } else if (mode == "skills") {
      top = 100;
      left = 100;
    }
  } else if (section == "works") {
    if (mode == "profile") {
      top = -100;
      left = 100;
    } else if (mode == "works") {
      top = 0;
      left = 0;
    } else if (mode == "skills") {
      top = 0;
      left = 200;
    }
  } else if (section == "skills") {
    if (mode == "profile") {
      top = -100;
      left = -100;
    } else if (mode == "works") {
      top = 0;
      left = -200;
    } else if (mode == "skills") {
      top = 0;
      left = 0;
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        top: `calc(${logoHeight}px + ${top}%)`,
        left: `${left}%`,
        width: "100vw",
        zIndex: `${mode == section ? "100" : "500"}`,
        transition: "2s",
      }}
    >
      <HomeSectionTitle
        mode={mode}
        section={section}
        sectionColor={sectionColor}
        setTitleHeight={setTitleHeight}
      ></HomeSectionTitle>
      <HomeSectionContent
        logoHeight={logoHeight}
        titleHeight={titleHeight}
        section={section}
        mode={mode}
      ></HomeSectionContent>
      <HomeSectionButton mode={mode} section={section} setSection={setSection}></HomeSectionButton>
    </div>
  );
};

export default HomeSection;
