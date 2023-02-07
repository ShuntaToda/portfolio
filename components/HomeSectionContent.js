import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const HomeSectionContent = ({ logoHeight, titleHeight, mode, section, blogs }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const selectedBlogs = blogs.filter((blog) => blog.category.name == mode);
  const [openGroup, setOpenGroup] = useState("");
  useEffect(() => {
    // 画面の高さ - ロゴの高さ - タイトルの高さ = contentの高さ
    setWindowHeight(window.innerHeight - logoHeight - titleHeight);
  }, [logoHeight, titleHeight]);

  const openGroupHandle = (blog) => {
    console.log(blog, openGroup);
    if (openGroup == "") {
      setOpenGroup(blog.group);
    } else {
      setOpenGroup("");
    }
  };

  return (
    <>
      <div className="c-home-section__content" style={{ height: windowHeight }}>
        <div className="c-home-section__content-inner">
          <div className="c-section-content">
            {mode == "works" ? (
              <div className="c-works">
                {selectedBlogs.map((blog) => (
                  <>
                    {blog.group == "" ? (
                      <Link
                        key={blog.id}
                        href={`blog/${blog.id}`}
                        className={"text-decoration-none"}
                      >
                        <div className="c-works__content shadow">
                          {blog.badge ? (
                            <div
                              className={`c-works__content-badge badge 
                          ${blog.badge == "作品" ? "work" : ""} 
                          ${blog.badge == "大会" ? "compe" : ""}
                          ${blog.badge == "イベント" ? "event" : ""}`}
                            >
                              {blog.badge}
                            </div>
                          ) : (
                            <></>
                          )}
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
                    ) : (
                      <>
                        {blog.group_leader ? (
                          <div
                            onClick={() => openGroupHandle(blog)}
                            className={`c-works__group ${blog.group == openGroup ? "open" : ""}`}
                          >
                            <div
                              className={`c-works__content shadow ${
                                blog.group == openGroup ? "open" : ""
                              }`}
                            >
                              <div
                                className={`c-works__toggle ${
                                  blog.group == openGroup ? "open" : ""
                                }`}
                              ></div>
                              {blog.badge ? (
                                <div
                                  className={`c-works__content-badge badge ${
                                    blog.badge == "作品" ? "work" : ""
                                  } ${blog.badge == "大会" ? "compe" : ""} ${
                                    blog.badge == "イベント" ? "event" : ""
                                  }`}
                                >
                                  {blog.badge}
                                </div>
                              ) : (
                                <></>
                              )}
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
                              {openGroup ? (
                                <>
                                  {blogs.map((childBlog) => (
                                    <>
                                      {childBlog.group[0] == blog.group[0] &&
                                      !childBlog.group_leader ? (
                                        <Link
                                          key={childBlog.id}
                                          href={`blog/${childBlog.id}`}
                                          className={"text-decoration-none"}
                                        >
                                          {console.log(childBlog)}
                                          <div className="c-works__content child shadow">
                                            {childBlog.badge ? (
                                              <div
                                                className={`c-works__content-badge badge 
                          ${childBlog.badge == "作品" ? "work" : ""} 
                          ${childBlog.badge == "大会" ? "compe" : ""}
                          ${childBlog.badge == "イベント" ? "event" : ""}`}
                                              >
                                                {childBlog.badge}
                                              </div>
                                            ) : (
                                              <></>
                                            )}
                                            <div className="c-works__content-image">
                                              {childBlog.eyecatch ? (
                                                <Image
                                                  src={childBlog.eyecatch.url}
                                                  width={childBlog.eyecatch.width / 3}
                                                  height={childBlog.eyecatch.height / 3}
                                                  alt={"blog-eyecatch"}
                                                ></Image>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div className="c-works__content-title">
                                              {childBlog.title}
                                            </div>
                                          </div>
                                        </Link>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  ))}
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </>
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
