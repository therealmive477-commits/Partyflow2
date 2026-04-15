export default function QueueCard({
  song,
  index,
  mode = "guest",
  onVote,
  onRemove,
  onBoost,
}) {
  const aiAdded = song?.addedBy === "AI DJ";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#151522",
        padding: 16,
        borderRadius: 16,
        marginTop: 12,
        border: aiAdded ? "1px solid rgba(124,58,237,.5)" : "1px solid transparent",
        boxShadow: aiAdded ? "0 0 18px rgba(124,58,237,.18)" : "none",
      }}
    >
      <div style={{ flex: 1, paddingRight: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          {typeof index === "number" ? (
            <div
              style={{
                fontSize: 12,
                opacity: 0.7,
                background: "#222235",
                padding: "4px 8px",
                borderRadius: 999,
              }}
            >
              #{index + 1}
            </div>
          ) : null}

          {aiAdded ? (
            <div
              style={{
                fontSize: 11,
                background: "#7c3aed",
                color: "white",
                padding: "4px 8px",
                borderRadius: 999,
              }}
            >
              Added by AI DJ
            </div>
          ) : null}
        </div>

        <div style={{ fontWeight: 700, fontSize: 17 }}>{song.title}</div>

        <div style={{ opacity: 0.68, marginTop: 4 }}>
          {song.artist || "Unknown Artist"}
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
          {song.genre ? (
            <div
              style={{
                fontSize: 12,
                opacity: 0.75,
                background: "#1d1d2b",
                padding: "4px 8px",
                borderRadius: 999,
              }}
            >
              {song.genre}
            </div>
          ) : null}

          {typeof song.energy !== "undefined" ? (
            <div
              style={{
                fontSize: 12,
                opacity: 0.75,
                background: "#1d1d2b",
                padding: "4px 8px",
                borderRadius: 999,
              }}
            >
              Energy {song.energy}
            </div>
          ) : null}

          <div
            style={{
              fontSize: 12,
              opacity: 0.85,
              background: "#1d1d2b",
              padding: "4px 8px",
              borderRadius: 999,
            }}
          >
            ⭐ {song.votes || 0}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end" }}>
        {mode === "guest" ? (
          <button
            onClick={() => onVote?.(song.id)}
            style={{
              background: "#7c3aed",
              border: "none",
              padding: "10px 14px",
              borderRadius: 10,
              color: "white",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Vote
          </button>
        ) : null}

        {mode === "host" ? (
          <>
            <button
              onClick={() => onBoost?.(song.id)}
              style={{
                background: "#27273a",
                border: "none",
                padding: "10px 14px",
                borderRadius: 10,
                color: "white",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Boost
            </button>

            <button
              onClick={() => onRemove?.(song.id)}
              style={{
                background: "#ef4444",
                border: "none",
                padding: "10px 14px",
                borderRadius: 10,
                color: "white",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Remove
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
