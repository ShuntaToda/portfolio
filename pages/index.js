import { useEffect, useState } from "react";
import HomeSection from "../components/HomeSection";
import Loading from "../components/Loading";
import Logo from "../components/Logo";

export default function Home() {
  const [section, setSection] = useState("profile");
  const [logoHeight, setLogoHeight] = useState(0);
  return (
    <div>
      {/* <Loading></Loading> */}
      <Logo setLogoHeight={setLogoHeight}></Logo>
      <HomeSection
        mode="profile"
        section={section}
        setSection={setSection}
        logoHeight={logoHeight}
      ></HomeSection>
      <HomeSection
        mode="works"
        section={section}
        setSection={setSection}
        logoHeight={logoHeight}
      ></HomeSection>
      <HomeSection
        mode="skills"
        section={section}
        setSection={setSection}
        logoHeight={logoHeight}
      ></HomeSection>
    </div>
  );
}
