import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const enquirySchema = z.object({
  topic: z.enum(["General", "Partnership", "Volunteering", "Research", "Correction"]),
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  organisation: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please write a short message").max(2000),
  // spam protection: hidden field must stay empty; form must be open >= 3s
  website: z.string().max(0).optional().or(z.literal("")),
  openedAt: z.number(),
});

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => enquirySchema.parse(d))
  .handler(async ({ data }) => {
    if (data.website || Date.now() - data.openedAt < 3000) return { ok: true };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("enquiries").insert({
      topic: data.topic,
      name: data.name,
      email: data.email,
      organisation: data.organisation || null,
      message: data.message,
    });
    if (error) {
      console.error("enquiry insert failed", error.message);
      return { ok: false };
    }
    return { ok: true };
  });
