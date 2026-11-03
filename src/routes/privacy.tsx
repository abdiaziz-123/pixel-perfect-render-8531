import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pages, pageHead } from "@/lib/ncco-content";
export const Route = createFileRoute("/privacy")({
  head: () => pageHead("Privacy & patient information", pages["privacy"].intro),
  component: () => <ContentPage pageKey="privacy" />,
});
