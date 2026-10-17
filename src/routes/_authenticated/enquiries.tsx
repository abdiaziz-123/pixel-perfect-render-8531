import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/enquiries")({
  head: () => ({
    meta: [
      { title: "Enquiries inbox · NCCO staff" },
      { name: "description", content: "Restricted inbox of website enquiries for NCCO staff." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Enquiries inbox · NCCO staff" },
      { property: "og:description", content: "Restricted NCCO staff area." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Inbox,
});

function Inbox() {
  const qc = useQueryClient();
  const nav = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["enquiries"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });
  async function toggle(id: string, handled: boolean) {
    await supabase.from("enquiries").update({ handled }).eq("id", id);
    qc.invalidateQueries({ queryKey: ["enquiries"] });
  }
  return (
    <main className="site-container py-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Website enquiries</h1>
        <Button
          variant="outline"
          onClick={async () => {
            await supabase.auth.signOut();
            nav({ to: "/staff" });
          }}
        >
          Sign out
        </Button>
      </div>
      {isLoading && <p className="mt-8 text-sm text-muted-foreground">Loading…</p>}
      {error && <p className="mt-8 text-sm text-destructive">Could not load enquiries.</p>}
      {data?.length === 0 && <p className="mt-8 text-sm text-muted-foreground">No enquiries yet.</p>}
      <div className="mt-8 space-y-4">
        {data?.map((e) => (
          <article key={e.id} className={`rounded-md border p-5 ${e.handled ? "opacity-60" : ""}`}>
            <div className="flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
              <span className="font-semibold text-rose-ink">{e.topic}</span>
              <time>{new Date(e.created_at).toLocaleString()}</time>
            </div>
            <p className="mt-2 font-semibold">
              {e.name}
              {e.organisation ? ` · ${e.organisation}` : ""}
            </p>
            <a href={`mailto:${e.email}`} className="text-sm underline">{e.email}</a>
            <p className="mt-3 whitespace-pre-wrap text-sm leading-7">{e.message}</p>
            <Button size="sm" variant="outline" className="mt-4" onClick={() => toggle(e.id, !e.handled)}>
              {e.handled ? "Mark as open" : "Mark as handled"}
            </Button>
          </article>
        ))}
      </div>
    </main>
  );
}
