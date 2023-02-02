import React, { useEffect, useRef, useState } from "react";

export const HomeSectionContent = ({ logoHeight, titleHeight, mode, section }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // 画面の高さ - ロゴの高さ - タイトルの高さ = contentの高さ
    setWindowHeight(window.innerHeight - logoHeight - titleHeight);
  }, [logoHeight, titleHeight]);

  return (
    <>
      <div className="c-home-section__content" style={{ height: windowHeight }}>
        <div className="c-home-section__content-inner">
          {mode == "profile" ? (
            <div className="c-home-section__content-other">←other page→</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
