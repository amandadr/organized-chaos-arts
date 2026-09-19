const warmFills = ["oca-fill-paper", "oca-fill-goldenrod", "oca-fill-tangerine"];
const deepFills = ["oca-fill-paper", "oca-fill-rust", "oca-fill-teal"];
const faqFills = ["oca-fill-paper", "oca-fill-goldenrod", "oca-fill-tangerine"];

export function FeatureList({
  items,
  palette = "warm",
}: {
  items: readonly { title: string; body: string }[];
  palette?: "warm" | "deep";
}) {
  const fills = palette === "deep" ? deepFills : warmFills;

  return (
    <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((item, index) => (
        <li
          key={item.title}
          className={`oca-color-card md:p-8 ${fills[index % fills.length]}`}
        >
          <p className="font-display text-sm font-extrabold tracking-widest">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="text-h4 mt-4">{item.title}</h3>
          <p className="mt-3 opacity-90">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqList({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <details
          key={item.question}
          className={`group border-[3px] border-[color:var(--color-ink)] px-5 py-2 shadow-[4px_4px_0_var(--color-ink)] ${faqFills[index % faqFills.length]}`}
        >
          <summary className="cursor-pointer list-none py-3 font-display text-lg font-semibold marker:content-none">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span
                aria-hidden
                className="font-extrabold transition group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <p className="pb-4 opacity-90">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
