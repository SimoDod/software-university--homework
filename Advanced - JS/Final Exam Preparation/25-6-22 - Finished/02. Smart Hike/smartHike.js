class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (!this.goals[peak]) {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    } else {
      return `${peak} has already been added to your goals`;
    }
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals[peak]) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.goals[peak] && this.resources === 0) {
      throw new Error("You don't have enough resources to start the hike");
    }

    let diff = this.resources - time * 10;

    if (diff < 0) {
      return "You don't have enough resources to complete the hike";
    }
    this.resources -= time * 10;
    this.listOfHikes.push({ peak, time, difficultyLevel });

    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    let resourcesToAdd = this.resources + time * 10;
    if (resourcesToAdd >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      this.resources = resourcesToAdd;
      return `You have rested for ${time} hours and gained ${
        time * 10
      }% resources`;
    }
  }

  showRecord(criteria) {
    if (this.listOfHikes.length === 0)
      return `${this.username} has not done any hiking yet`;
        
    let bestTime = this.listOfHikes.sort((a, b) => {
        
        return b.time - a.time;
    });

    if (criteria === "all" && this.listOfHikes.length > 0) {
      let buff = "All hiking records:\n";

      for (let i = 0; i < this.listOfHikes.length; i++) {
        const hike = this.listOfHikes[i];

        if (this.listOfHikes.length === 1) {
          buff += `${this.username} hiked ${hike.peak} for ${hike.time} hours`;
        } else {
          if (i < this.listOfHikes.length - 1) {
            buff += `${this.username} hiked ${hike.peak} for ${hike.time} hours\n`;
          } else {
            buff += `${this.username} hiked ${hike.peak} for ${hike.time} hours`;
          }
        }
      }

      return buff;
    }

    if (bestTime[0].difficultyLevel === criteria) {
      return `${this.username}'s best ${criteria} hike is ${bestTime[0].peak} peak, for ${bestTime[0].time} hours`;
    } else {
      return `${this.username} has not done any ${criteria} hiking yet`;
    }
  }
}

const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");

console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
