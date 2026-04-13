export function calculateVibe(queue, chat) {

  let voteEnergy = queue.reduce((a,b)=>a+b.votes,0)

  let chatEnergy = chat.length

  return Math.min(100, voteEnergy + chatEnergy)
}
