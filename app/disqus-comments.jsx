"use client";

import { useEffect, useMemo, useState } from "react";

export default function DisqusComments({ shortname }) {
  const [isOpen, setIsOpen] = useState(false);

  const pageConfig = useMemo(
    () => ({
      url:
        typeof window === "undefined"
          ? "https://ghgfhfg2.github.io/NoSpoiler-Highlights/"
          : window.location.origin + window.location.pathname,
      identifier: "nospoiler-highlights-home",
      title: "노스포 하이라이트",
    }),
    [],
  );

  useEffect(() => {
    if (!isOpen || !shortname) return;

    window.disqus_config = function disqusConfig() {
      this.page.url = pageConfig.url;
      this.page.identifier = pageConfig.identifier;
      this.page.title = pageConfig.title;
    };

    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config() {
          this.page.url = pageConfig.url;
          this.page.identifier = pageConfig.identifier;
          this.page.title = pageConfig.title;
        },
      });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://${shortname}.disqus.com/embed.js`;
    script.dataset.timestamp = String(Date.now());
    script.async = true;
    document.body.appendChild(script);
  }, [isOpen, pageConfig.identifier, pageConfig.title, pageConfig.url, shortname]);

  if (!shortname) {
    return null;
  }

  return (
    <section className="comments-section" aria-labelledby="commentsTitle">
      <div className="comments-head">
        <h2 id="commentsTitle">댓글</h2>
        <button type="button" onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? "댓글 닫기" : "댓글 보기"}
        </button>
      </div>
      {isOpen ? <div id="disqus_thread" /> : null}
    </section>
  );
}
