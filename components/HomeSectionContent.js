import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const HomeSectionContent = ({ logoHeight, titleHeight, mode, section, blogs }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const selectedBlogs = blogs.filter((blog) => blog.category.name == mode);
  useEffect(() => {
    // 画面の高さ - ロゴの高さ - タイトルの高さ = contentの高さ
    setWindowHeight(window.innerHeight - logoHeight - titleHeight);
  }, [logoHeight, titleHeight]);

  return (
    <>
      <div className="c-home-section__content" style={{ height: windowHeight }}>
        <div className="c-home-section__content-inner">
          <div className="c-section-content">
            {mode == "works" ? (
              <div className="c-works">
                {selectedBlogs.map((blog) => (
                  <Link key={blog.id} href={`blog/${blog.id}`} className={"text-decoration-none"}>
                    <div className="c-works__content shadow">
                      <div className="c-works__content-image">
                        {blog.eyecatch ? (
                          <Image
                            src={blog.eyecatch.url}
                            width={blog.eyecatch.width / 3}
                            height={blog.eyecatch.height / 3}
                            alt={"blog-eyecatch"}
                          ></Image>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="c-works__content-title">{blog.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <>
                {selectedBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    dangerouslySetInnerHTML={{
                      __html: `${blog.content}`,
                    }}
                  ></div>
                ))}
              </>
            )}
          </div>
          <div className="c-section-content__blur top"></div>
          <div className="c-section-content__blur bottom"></div>
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
