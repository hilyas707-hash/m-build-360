export default function MarqueeBanner() {
  const items = [
    "Maçonnerie neuve",
    "Briques & parpaings",
    "Béton armé",
    "Ravalement façade",
    "Rejointoiement",
    "Isolation façade ITE",
    "Crépis & enduits",
    "Terrasses",
    "Dallage & pavés",
    "Garantie décennale",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      style={{
        borderTop:    "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background:   "rgba(140,53,24,0.07)",
        padding:      "14px 0",
        overflow:     "hidden",
      }}
    >
      <div className="marquee-track" style={{ gap: "0" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display:       "flex",
              alignItems:    "center",
              gap:           "24px",
              padding:       "0 32px",
              fontSize:      "11px",
              fontWeight:    700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color:         "rgba(240,239,233,0.5)",
              whiteSpace:    "nowrap",
            }}
          >
            <span
              style={{
                display:      "inline-block",
                width:        "4px",
                height:       "4px",
                background:   "#C46030",
                borderRadius: "50%",
                flexShrink:   0,
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
