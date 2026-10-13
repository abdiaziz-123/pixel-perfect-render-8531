import { Outlet, useRouterState } from "@tanstack/react-router";

/**
 * One shared motion boundary keeps every public page consistent.
 * Scroll reveals live in CSS (see src/styles.css) so nothing is written onto
 * server-rendered markup after React has attached to it.
 */
export function PageMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div key={pathname} className="page-transition">
      <Outlet />
    </div>
  );
}
