import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Logo = ({ setLogoHeight }) => {
  const logo = useRef(null);
  useEffect(() => {
    setLogoHeight(logo.current.getBoundingClientRect().height);
  }, [logo]);
  return (
    <div className="c-logo" ref={logo}>
      <Link href={"/"} className="text-decoration-none u-header-font">
        <h1 className="ps-4 pt-2 m-0">ShuntaToda</h1>
      </Link>
    </div>
  );
};

export default Logo;
