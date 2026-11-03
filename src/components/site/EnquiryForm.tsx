import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { enquirySchema, submitEnquiry } from "@/lib/enquiry.functions";

type Topic = "General" | "Partnership" | "Volunteering" | "Research" | "Correction";
const topics: Topic[] = ["General", "Partnership", "Volunteering", "Research", "Correction"];

const field =
  "mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function EnquiryForm({ defaultTopic = "General" }: { defaultTopic?: Topic }) {
  const send = useServerFn(submitEnquiry);
  const [openedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = enquirySchema.safeParse({ ...fd, openedAt });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] ??= i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const r = await send({ data: parsed.data });
      setStatus(r.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done")
    return (
      <div role="status" className="mt-6 rounded-md border bg-teal-soft p-5 text-sm leading-7">
        <CheckCircle2 className="mb-2" />
        Thank you — your message has been received. The NCCO team will reply by email.
      </div>
    );

  return (
    <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4 text-sm">
      <label className="block font-medium">
        Topic
        <select name="topic" defaultValue={defaultTopic} className={field}>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t === "Correction" ? "Report incorrect information" : t}
            </option>
          ))}
        </select>
      </label>
      {(
        [
          ["name", "Your name", "text", "name"],
          ["email", "Email", "email", "email"],
          ["organisation", "Organisation (optional)", "text", "organization"],
        ] as const
      ).map(([n, l, t, ac]) => (
        <label key={n} className="block font-medium">
          {l}
          <input name={n} type={t} autoComplete={ac} maxLength={255} className={field} />
          {errors[n] && <span className="mt-1 block text-xs text-destructive">{errors[n]}</span>}
        </label>
      ))}
      <label className="block font-medium">
        Message
        <textarea name="message" rows={5} maxLength={2000} className={field} />
        {errors["message"] && (
          <span className="mt-1 block text-xs text-destructive">{errors["message"]}</span>
        )}
      </label>
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <p className="text-xs leading-6 text-muted-foreground">
        Please don’t include diagnoses, medical records, ID numbers or other health details. See
        our{" "}
        <Link to="/privacy" className="underline">
          privacy notice
        </Link>
        .
      </p>
      {status === "error" && (
        <p role="alert" className="text-xs text-destructive">
          Sorry, your message could not be sent. Please try again or email
          info@northerncancercare.org.
        </p>
      )}
      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" && <Loader2 className="animate-spin" />}
        Send message
      </Button>
    </form>
  );
}
