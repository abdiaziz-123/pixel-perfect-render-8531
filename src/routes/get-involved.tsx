import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pages, pageHead } from "@/lib/ncco-content";
export const Route = createFileRoute("/get-involved")({
  head: () => pageHead("Get involved", pages["get-involved"].intro),
  component: () => <ContentPage pageKey="get-involved" />,
});
