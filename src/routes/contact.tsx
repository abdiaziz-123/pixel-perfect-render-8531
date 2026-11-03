import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pages, pageHead } from "@/lib/ncco-content";
export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact NCCO", pages["contact"].intro),
  component: () => <ContentPage pageKey="contact" />,
});
