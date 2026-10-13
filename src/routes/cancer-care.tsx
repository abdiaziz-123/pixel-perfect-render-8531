import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pages, pageHead } from "@/lib/ncco-content";
export const Route = createFileRoute("/cancer-care")({
  head: () => pageHead("Cancer care & information", pages["cancer-care"].intro),
  component: () => <ContentPage pageKey="cancer-care" />,
});
