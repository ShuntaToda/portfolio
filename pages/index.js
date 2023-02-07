import Link from "next/link";
import { useEffect, useState } from "react";
import HomeSection from "../components/HomeSection";
import Loading from "../components/Loading";
import Logo from "../components/Logo";
import { client } from "../lib/client";

export default function Home({ blogs }) {
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
        blogs={blogs}
      ></HomeSection>
      <HomeSection
        mode="works"
        section={section}
        setSection={setSection}
        logoHeight={logoHeight}
        blogs={blogs}
      ></HomeSection>
      <HomeSection
        mode="skills"
        section={section}
        setSection={setSection}
        logoHeight={logoHeight}
        blogs={blogs}
      ></HomeSection>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs", queries: { limit: 200 } });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
