const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

   const username =[];
    gameInfo.forEach(gm =>{
    username.push(`${gm.username}!`)
        });
   console.log(username)

   

const winners = [];
gameInfo.forEach(gm => {
  if (gm.score > 5) {
    winners.push(gm.username);
  }
});

console.log(winners);
