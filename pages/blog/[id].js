import React from "react";
import { client } from "../../lib/client";

import Logo from "../../components/Logo";
import { HomeSectionTitle } from "../../components/HomeSectionTitle";
export default function BlogId({ blog }) {
  console.log(blog);
  return (
    <>
      <Logo></Logo>
      <HomeSectionTitle mode={"works"} sectionColor={"blue"} section={"works"}></HomeSectionTitle>
      <div className="c-works-blog container">
        <div className="c-works-blog__content">
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
