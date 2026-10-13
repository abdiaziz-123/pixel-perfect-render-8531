import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pages, pageHead } from "@/lib/ncco-content";
export const Route = createFileRoute("/cancerconnect")({
  head: () => pageHead("CancerConnect — planned", pages["cancerconnect"].intro),
  component: () => <ContentPage pageKey="cancerconnect" />,
});
