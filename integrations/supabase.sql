-- Optional Supabase migration for an authenticated deployment.
create table public.citizen_applications (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id),
  service text not null,
  payload jsonb not null default '{}',
  state text not null default 'draft' check (state in ('draft','awaiting_approval','approved_for_submission','submitted','under_review','completed','rejected')),
  approved_at timestamptz,
  official_reference text,
  created_at timestamptz not null default now(),
  check (state in ('draft','awaiting_approval') or approved_at is not null)
);
alter table public.citizen_applications enable row level security;
create policy "Citizens read own records" on public.citizen_applications for select to authenticated using (owner_id = auth.uid());
create policy "Citizens create own drafts" on public.citizen_applications for insert to authenticated with check (owner_id = auth.uid() and state = 'draft' and approved_at is null and official_reference is null);
-- Elevated, authenticated server handlers own approval and official status changes.
create table public.official_passages (
  id uuid primary key default gen_random_uuid(),
  service text not null,
  jurisdiction text not null,
  source_url text not null check (source_url like 'https://%'),
  passage text not null,
  checked_at timestamptz not null,
  expires_at timestamptz not null,
  search_document tsvector generated always as (to_tsvector('simple', passage)) stored
);
create index official_passage_search on public.official_passages using gin(search_document);
alter table public.official_passages enable row level security;
create policy "Read current curated sources" on public.official_passages for select to authenticated using (expires_at > now());
