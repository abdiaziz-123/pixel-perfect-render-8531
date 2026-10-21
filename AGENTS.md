<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep NCCO public content in a shared data module with distinct TanStack leaf routes and shared site layout, so navigation and page metadata remain consistent.
- Keep this phase a public informational website; future CancerConnect capabilities must be marked planned rather than simulated as working patient services.
- Public contact uses enquiry forms for general messages and email drafts elsewhere; the privacy notice must disclose enquiry storage and authorised staff access, and neither channel should request health information. Secure patient workflows require a separate reviewed implementation.
- Keep the organization launch schedule in a shared browser-safe module, separate from programme strategy years, so dates remain consistent across public pages and can be regression-tested.
- Keep page entrances and scroll reveals in the shared PageMotion boundary as pure CSS motion rules (scroll-driven animations), never by writing classes or attributes onto server-rendered markup after React attaches to it; this keeps hydration clean and honors reduced-motion preferences across all leaf pages without changing navigation.
