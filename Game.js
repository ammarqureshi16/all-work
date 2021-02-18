var team1 = prompt(" Enter your 1st team name : ");
var team2 = prompt(" Enter your 2nd team name : ");
var numberOfOvers = +prompt(" Enter the number of overs : ");
var toss = Math.random() * 10;
var roundToss = Math.round(toss);
console.log(roundToss);

if (roundToss < 5) {
  alert(team1 + " Have won the toss & Elected to bat first : ");
} else {
  alert(team2 + " Have won the toss & Elected to bat first : ");
}
var score1 = 0;
var overs = 0;
var wickets = 0;
alert(" Lets Play ! ");
for (var i = 1; i <= numberOfOvers; i++) {
  alert(i + " First over has started : ");
  for (var j = 1; j <= 6; j++) {
    var bowl = Math.random() * 7;
    var newBowl = Math.round(bowl);
    if (newBowl === 0) {
      wickets = wickets + 1;
      alert(" HOWZAT!!! thats a Wicket : ");
    } else if (
      newBowl === 1 ||
      newBowl === 2 ||
      newBowl === 3 ||
      newBowl === 5
    ) {
      score1 = score1 + newBowl;
      alert(newBowl + " Runs scored ");
    } else if (newBowl === 4 || newBowl === 6) {
      score1 = score1 + newBowl;
      alert(" Woww! That's a Six ");
    }
  }
  overs = overs + 1;
  console.log(
    " The Total Score at the end of " +
      i +
      " overs " +
      " is " +
      score1 +
      " / " +
      wickets
  );
}
var One = score1 + 1;
if (roundToss < 5) {
  console.log(team2 + " Need " + " Runs to Win : " + " " + One);
} else {
  console.log(team1 + " Need " + " Runs to Win : " + " " + One);
}

if (roundToss >= 5) {
  alert(team1 + "'s Turn : ");
} else {
  alert(team2 + "'s Turn : ");
}
var score2 = 0;
var overs2 = 0;
var wickets2 = 0;
alert(" Lets Play ! ");
for (var i = 1; i <= numberOfOvers; i++) {
  alert(i + " First over has started : ");
  for (var j = 1; j <= 6; j++) {
    var bowl = Math.random() * 7;
    var newBowl = Math.round(bowl);
    if (newBowl === 0) {
      wickets = wickets + 1;
      alert(" HOWZAT!!! thats a Wicket : ");
    } else if (
      newBowl === 1 ||
      newBowl === 2 ||
      newBowl === 3 ||
      newBowl === 5
    ) {
      score1 = score1 + newBowl;
      alert(newBowl + " Runs Scored : ");
    } else if (newBowl === 4 || newBowl === 6) {
      score2 = score2 + newBowl;
      alert(" Woww! That's a Six ");
    }
  }
  overs2 = overs2 + 1;
  console.log(
    " The total score at the end of " +
      i +
      " overs " +
      " is " +
      score2 +
      " / " +
      wickets2
  );
}
if (score2 > score1) {
}
if (score1 > score2 && roundToss < 5) {
  console.log(team1 + " : 'WON' ");
} else {
  console.log(team2 + " : 'WON'  ");
}
