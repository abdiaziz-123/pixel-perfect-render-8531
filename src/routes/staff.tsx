import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Staff sign in · NCCO" },
      { name: "description", content: "Restricted sign in for NCCO staff to read website enquiries." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Staff sign in · NCCO" },
      { property: "og:description", content: "Restricted NCCO staff area." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: StaffLogin,
});

function StaffLogin() {
  const nav = useNavigate();
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: String(f.get("email")),
      password: String(f.get("password")),
    });
    setBusy(false);
    if (error) return setErr("Sign in failed. Check your email and password.");
    nav({ to: "/enquiries" });
  }
  const field = "mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm";
  return (
    <main className="site-container max-w-md py-20">
      <h1 className="text-3xl font-bold">Staff sign in</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        For authorised NCCO staff only. Accounts are created by the site administrator.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4 text-sm">
        <label className="block font-medium">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block font-medium">
          Password
          <input name="password" type="password" required autoComplete="current-password" className={field} />
        </label>
        {err && <p role="alert" className="text-xs text-destructive">{err}</p>}
        <Button type="submit" disabled={busy} className="w-full">Sign in</Button>
      </form>
    </main>
  );
}
