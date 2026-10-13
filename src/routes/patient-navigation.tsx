import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/site/ContentPage';
import { pages, pageHead } from '@/lib/ncco-content';
export const Route = createFileRoute('/patient-navigation')({
 head: () => pageHead('Patient navigation', pages['patient-navigation'].intro),
 component: () => <ContentPage pageKey="patient-navigation" />,
});
