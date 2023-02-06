import React from "react";
import { client } from "../../lib/client";

import Logo from "../../components/Logo";
import { HomeSectionTitle } from "../../components/HomeSectionTitle";
import Link from "next/link";
import dayjs from "dayjs";
export default function BlogId({ blog }) {
  console.log(blog);

  const day = dayjs(blog.createdAt);

  return (
    <>
      <Logo></Logo>
      <HomeSectionTitle
        mode={"work"}
        sectionColor={"blue"}
        section={"works"}
        isPage={false}
      ></HomeSectionTitle>
      <div className="c-works-blog">
        <div className="c-works-blog__content container">
          <div className="c-works-blog__title">
            <h1>{blog.title}</h1>
          </div>
          <div className="c-works-blog__createdAt">
            <span className="">{day.format("YYYY/MM/DD")}</span>
          </div>
          <div
            className="c-blog"
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          ></div>
        </div>
      </div>
      <div className="c-blog__homelink">
        <Link href={"/"} className={"btn btn-primary"}>
          ホームへ戻る
        </Link>
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
