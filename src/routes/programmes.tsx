import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/site/ContentPage';
import { pages, pageHead } from '@/lib/ncco-content';
export const Route = createFileRoute('/programmes')({
 head: () => pageHead('Community programmes', pages['programmes'].intro),
 component: () => <ContentPage pageKey="programmes" />,
});
