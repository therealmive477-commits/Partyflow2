import QueueCard from "./QueueCard";

export default function QueueList({
  songs = [],
  mode = "guest",
  title = "Queue",
  emptyText = "No songs in queue yet.",
  onVote,
  onRemove,
  onBoost,
}) {
  return (
    <div
      style={{
        marginTop: 20,
        background: "#101019",
        padding: 18,
        borderRadius: 18,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 20, fontWeight: 700 }}>{title}</div>

        <div
          style={{
            fontSize: 13,
            opacity: 0.65,
            background: "#1a1a2a",
            padding: "6px 10px",
            borderRadius: 999,
          }}
        >
          {songs.length} song{songs.length === 1 ? "" : "s"}
        </div>
      </div>

      {songs.length === 0 ? (
        <div
          style={{
            marginTop: 14,
            padding: 20,
            borderRadius: 14,
            background: "#151522",
            opacity: 0.7,
          }}
        >
          {emptyText}
        </div>
      ) : null}

      {songs.map((song, index) => (
        <QueueCard
          key={song.id || `${song.title}-${index}`}
          song={song}
          index={index}
          mode={mode}
          onVote={onVote}
          onRemove={onRemove}
          onBoost={onBoost}
        />
      ))}
    </div>
  );
}
