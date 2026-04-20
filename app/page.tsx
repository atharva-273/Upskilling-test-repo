import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-16 font-sans">
      <div className="max-w-3xl">

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Darkroast</h1>
          <p className="mt-1 text-sm text-muted-foreground">Button component · Design system preview</p>
        </div>

        {/* ── Variants ──────────────────────────────────────────────────────── */}
        <Section label="Variants">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </Section>

        {/* ── Sizes ─────────────────────────────────────────────────────────── */}
        <Section label="Sizes">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Add item">
            <PlusIcon />
          </Button>
        </Section>

        {/* ── With icons ────────────────────────────────────────────────────── */}
        <Section label="With icons">
          <Button leftIcon={<FolderIcon />}>Open project</Button>
          <Button variant="secondary" rightIcon={<ArrowIcon />}>Continue</Button>
          <Button variant="outline" leftIcon={<UploadIcon />}>Export</Button>
        </Section>

        {/* ── Loading state ─────────────────────────────────────────────────── */}
        <Section label="Loading">
          <Button loading>Saving…</Button>
          <Button variant="secondary" loading>Processing…</Button>
          <Button variant="outline" loading>Loading</Button>
        </Section>

        {/* ── Disabled state ────────────────────────────────────────────────── */}
        <Section label="Disabled">
          <Button disabled>Default</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="ghost" disabled>Ghost</Button>
          <Button variant="destructive" disabled>Destructive</Button>
          <Button variant="link" disabled>Link</Button>
        </Section>

        {/* ── Destructive variants ──────────────────────────────────────────── */}
        <Section label="Destructive — all states">
          <Button variant="destructive">Delete project</Button>
          <Button variant="destructive" loading>Deleting…</Button>
          <Button variant="destructive" disabled>Delete (disabled)</Button>
        </Section>

      </div>
    </main>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5v14" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
    </svg>
  );
}
