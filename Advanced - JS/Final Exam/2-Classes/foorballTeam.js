class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }
  //array
  newAdditions(footballPlayers) {
    let buff = [];
    for (const player of footballPlayers) {
      let [name, age, playerValue] = player.split("/");
      age = Number(age);
      playerValue = Number(playerValue);

      let currPlayer = this.invitedPlayers.find(
        (player) => player.name === name
      );

      if (!currPlayer) {
        this.invitedPlayers.push({ name, age, playerValue });
        buff.push(name);
      } else {
        if (currPlayer.playerValue < playerValue) {
          currPlayer.playerValue = playerValue;
        }
      }
    }

    return `You successfully invite ${buff.join(", ")}.`;
  }
  //string
  signContract(selectedPlayer) {
    let [playerN, offer] = selectedPlayer.split("/");
    offer = Number(offer);

    let currPlayer = this.invitedPlayers.find(
      (player) => player.name === playerN
    );

    if (!currPlayer) {
      throw new Error(`${playerN} is not invited to the selection list!`);
    }

    let priceDifference = Math.abs(currPlayer.player - offer);

    if (currPlayer.playerValue > offer) {
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${playerN}, ${priceDifference} ` + 
        `million more are needed to sign the contract!`
      );
    } else {
      currPlayer.playerValue = "Bought";
    }

    return `Congratulations! You sign a contract with ${playerN} for ${offer} million dollars.`;
  }

    ageLimit(name, age) {
    let currPlayer = this.invitedPlayers.find((player) => player.name === name);
    let diff = Math.abs(age - currPlayer.age);
    
    if (!currPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (currPlayer.age < age) {
      if (diff < 5) {
        return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
      } else {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    } else {
        return `${name} is above age limit!`;
    }
    
  }

  transferWindowResult() {
    let sorted = this.invitedPlayers.sort((a, b) => {
      return a.name.localeCompare(b.name)
    });

    let buff = ["Players list:"];
    
    sorted.forEach((player) =>
      buff.push(`Player ${player.name}-${player.playerValue}`)
    );
    if (buff.length > 1) {
      return buff.join("\n");
    } else {
      return buff;
    }
  } 
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


