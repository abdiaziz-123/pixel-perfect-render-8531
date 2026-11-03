import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pages, pageHead } from "@/lib/ncco-content";
export const Route = createFileRoute("/about")({
  head: () => pageHead("About NCCO", pages["about"].intro),
  component: () => <ContentPage pageKey="about" />,
});
