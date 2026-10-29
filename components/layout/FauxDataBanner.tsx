export function FauxDataBanner() {
  return (
    <aside
      aria-label="Site status"
      className="border-b-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-tangerine)] px-[5%] py-3 text-center"
    >
      <p className="text-balance text-sm font-bold leading-snug text-[color:var(--color-ink)]">
        Under development. The artists, artwork, and places shown here are faux
        data.
      </p>
    </aside>
  );
}
