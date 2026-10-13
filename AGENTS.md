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
- Public contact actions open email drafts without collecting or storing health information; secure patient workflows require a separate reviewed implementation.
