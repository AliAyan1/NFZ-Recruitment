export function TrustStrip() {
  const items = [
    "Licence checked",
    "Right-to-work verified",
    "UK-wide",
    "Pay only on start",
    "Free replacement",
  ];

  return (
    <div className="border-y border-navy/8 bg-white py-4">
      <p className="mx-auto max-w-6xl px-4 text-center text-sm font-medium text-navy-muted sm:px-6 sm:text-base">
        {items.map((item, i) => (
          <span key={item}>
            {i > 0 ? (
              <span className="mx-2 text-teal-dark/60" aria-hidden>
                •
              </span>
            ) : null}
            {item}
          </span>
        ))}
      </p>
    </div>
  );
}
