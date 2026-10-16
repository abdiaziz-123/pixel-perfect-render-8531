create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  topic text not null,
  name text not null,
  email text not null,
  organisation text,
  message text not null,
  handled boolean not null default false
);
grant select, update on public.enquiries to authenticated;
grant all on public.enquiries to service_role;
alter table public.enquiries enable row level security;
create policy "Staff can read enquiries" on public.enquiries for select to authenticated using (true);
create policy "Staff can update enquiries" on public.enquiries for update to authenticated using (true) with check (true);