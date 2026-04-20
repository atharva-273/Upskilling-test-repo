import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-12">Button Component</h1>

      <section className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Disabled</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="ghost" disabled>Ghost</Button>
        </div>
      </section>
    </main>
  );
}
