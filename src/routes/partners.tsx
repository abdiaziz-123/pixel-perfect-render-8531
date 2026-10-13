import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pages, pageHead } from "@/lib/ncco-content";
export const Route = createFileRoute("/partners")({
  head: () => pageHead("Partners & collaboration", pages["partners"].intro),
  component: () => <ContentPage pageKey="partners" />,
});
