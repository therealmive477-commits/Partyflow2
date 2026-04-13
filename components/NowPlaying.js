export default function NowPlaying({ song }) {

  if (!song) return null;

  return (
    <div style={{
      background: "linear-gradient(135deg,#2a0f40,#4c1d95)",
      padding: 20,
      borderRadius: 20,
      marginTop: 20,
      boxShadow: "0 0 20px rgba(168,85,247,.4)"
    }}>

      <div style={{opacity:.7,fontSize:12}}>
        NOW PLAYING
      </div>

      <div style={{
        fontSize:22,
        fontWeight:600
      }}>
        {song.title}
      </div>

      <div style={{opacity:.7}}>
        {song.artist}
      </div>

    </div>
  );
}
