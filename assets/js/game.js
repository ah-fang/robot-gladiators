<<<<<<< HEAD
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);  
    return value;
};

=======
function getPlayerName() {
    var name = "";
    while(name==="" || name===null) {
        name = window.prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
}
>>>>>>> develop
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
      },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.")
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars."); 
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10,14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];
<<<<<<< HEAD
=======

  // var enemy.health = 50;
>>>>>>> develop

var startGame = function() {
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        //if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            var pickedEnemyObj =  enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                    shop();
                }
              }
        }
        //if player isn't alive, stop the game
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
}

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
      } 
      else {
        window.alert("You've lost your robot in battle.");
      }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if(playAgainConfirm) {
        startGame();
    }        
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );
    // use switch to carry out action
switch (shopOptionPrompt) {
    case "REFILL": 
    case "refill":
        playerInfo.refillHealth();
      break;
      
    case "UPGRADE":
    case "upgrade":
        playerInfo.upgradeAttack();
    break;
    
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};  

var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    promptFight = promptFight.toLowerCase();
    var fightOrSkip = function() {
    var response = prompt("Question?");
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again."); 
        return fightOrSkip();
        }
  return response;
    }
    if (promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
          // subtract money from playerInfo.money for skipping
          playerInfo.money = Math.max(0, playerInfo.money - 10);
          return true;
        }
    } 
    return false;
}
var fight = function(enemy) {
    while(playerInfo.health > 0 && enemy.health > 0) {
        if (fightOrSkip()) {
            break;
        }
         // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
         var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        
        console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        ); 

        // check enemy's health
        if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        
        // leave while() loop since enemy is dead
        break;
        } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }

        // remove players's health by subtracting the amount set in the enemy.attack variable
        playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
        console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );

        // check player's health
        if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
        } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }            
    }
};

startGame();
console.log(enemy.names);
// fight();
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less