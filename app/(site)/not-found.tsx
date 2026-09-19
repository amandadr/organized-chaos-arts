import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="px-[5%] py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <p className="text-eyebrow text-[color:var(--color-brand-cool)]">404</p>
        <h1 className="text-h1 mt-3">That page is not on the wall</h1>
        <p className="mt-5 text-lg text-[color:var(--color-text-muted)]">
          It may have been renamed, or it may never have been hung. Try the
          gallery or the artist directory.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/gallery" variant="secondary">
            Gallery
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
