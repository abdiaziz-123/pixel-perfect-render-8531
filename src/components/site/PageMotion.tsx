import { useEffect, useRef } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";

/** One shared motion boundary keeps every public page consistent. */
export function PageMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <AnimatedPage key={pathname} />;
}

function AnimatedPage() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = container.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    let observer: IntersectionObserver | undefined;

    // Wait until the page has fully loaded so React has finished attaching to
    // the server-rendered markup before any attribute is written onto it.
    const setup = () => {
      if (!container.current) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.setAttribute("data-revealed", "");
            observer?.unobserve(entry.target);
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
      );

      const targets = [
        ...root.querySelectorAll(
          [
            "main > section:not(:first-child) h2",
            "main > section:not(:first-child) h2 ~ p",
            "main > section:not(:first-child) .grid > a",
            "main > section:not(:first-child) .grid > div",
            "main > section:not(:first-child) img",
            "main > section:not(:first-child) ul",
            "main > div section",
            "main aside",
          ].join(", "),
        ),
        ...document.querySelectorAll("footer"),
      ];

      for (const target of targets) {
        // Already-visible content never waits for scrolling or hydration.
        if (target.getBoundingClientRect().top < window.innerHeight - 24) continue;
        target.setAttribute("data-reveal", "");
        observer.observe(target);
      }
    };

    if (document.readyState === "complete") setup();
    else window.addEventListener("load", setup, { once: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("load", setup);
    };
  }, []);

  return (
    <div ref={container} className="page-transition">
      <Outlet />
    </div>
  );
}
