export default function QueueCard({ song, vote }) {

  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      background:"#151522",
      padding:16,
      borderRadius:14,
      marginTop:12
    }}>

      <div>
        <div style={{fontWeight:600}}>
          {song.title}
        </div>

        <div style={{opacity:.6}}>
          {song.artist}
        </div>
      </div>

      <div style={{display:"flex",gap:10}}>

        <div>
          ⭐ {song.votes}
        </div>

        {vote && (
          <button
            onClick={()=>vote(song.id)}
            style={{
              background:"#7c3aed",
              border:"none",
              padding:"6px 10px",
              borderRadius:8,
              color:"white",
              cursor:"pointer"
            }}
          >
            Vote
          </button>
        )}

      </div>

    </div>
  );
}
