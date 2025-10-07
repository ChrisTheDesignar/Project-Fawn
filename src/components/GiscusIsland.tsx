// src/components/GiscusIsland.tsx
import { useEffect, useRef } from "react";

type Props = {
  term: string; // e.g. "2025-01-09::Interfaceable 4D Gaussian Splatting"
};

export default function GiscusIsland({ term }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // avoid duplicates on HMR / re-renders
    if (el.querySelector(".giscus-frame")) return;

    const s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.async = true;

    s.setAttribute("data-repo", "ChrisTheDesignar/Project-Fawn");
    s.setAttribute("data-repo-id", "R_kgDOPFJPMg");
    s.setAttribute("data-category", "Research Card Comments");
    s.setAttribute("data-category-id", "DIC_kwDOPFJPMs4Cv22B");
    s.setAttribute("data-mapping", "specific");
    s.setAttribute("data-term", term);
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "bottom");
    s.setAttribute("data-theme", "preferred_color_scheme");
    s.setAttribute("crossorigin", "anonymous");

    el.appendChild(s);

    // cleanup for hot reloads
    return () => {
      el.querySelectorAll("script, .giscus, .giscus-frame").forEach(n => n.remove());
    };
  }, [term]);

  return <div ref={ref} className="cwrap" data-term={term} />;
}
