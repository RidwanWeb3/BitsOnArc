import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: { widgets: { load: (el?: HTMLElement | null) => void } };
  }
}

export default function XEmbed({ url, label }: { url: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = "twitter-wjs";
    const render = () => window.twttr?.widgets.load(ref.current);
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.async = true;
      s.charset = "utf-8";
      s.src = "https://platform.twitter.com/widgets.js";
      s.onload = render;
      document.body.appendChild(s);
    } else {
      render();
    }
  }, [url]);

  return (
    <div ref={ref} className="panel overflow-hidden p-3 [&_.twitter-tweet]:!my-0 [&_iframe]:!w-full">
      <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true">
        <a href={url}>{label}</a>
      </blockquote>
    </div>
  );
}
