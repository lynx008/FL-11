class Fighter {
	constructor(fighter) {
		this.name = fighter.name;
		this.damage = fighter.damage;
		this.currentHP = fighter.hp;
		this.totalHP = fighter.hp;
		this.agility = fighter.agility;
		this.wins = 0;
		this.loss = 0;
	}

	getName() {
		return this.name;
	}

	getDamage() {
		return this.damage;
	}

	getAgility() {
		return this.agility;
	}

	getHealth() {
		return this.currentHP;
	}

	attack(guard) {
		const hundred = 100;
		let chance = Math.floor(Math.random() * (hundred + 1));
		if (chance <= hundred - guard.getAgility()) { 
			guard.dealDamage(this.damage);
			console.log(this.getName() + 'make' + this.getDamage() + 'damage to' + guard.getName());
		} else {
			console.log(this.getName() + 'missed');
			}   
		}

	logCombatHistory () {
		console.log('Name: ' + this.name + 'Wins: ' + this.wins + 'Losses: ' + this.losses +'');
	}

	heal(health) {
		this.hp += health;
		if (this.currentHP > this.totalHP) {
			this.hp = this.totalHP;
		} 
	}

	dealDamage(damage) {
		this.hp -= damage;
		if (this.hp - damage < 0) {
			this.hp = 0;
		}
	}

	addWin() {
		this.wins += 1;
    }

    addLoss() {
		this.losses += 1;
    }
}

function battle(firstFighter, secondFighter) {
	if (firstFighter.getHealth() === 0 || secondFighter.getHealth() === 0) {
		console.log('One of fighters is dead and can\'t fight');
	} else {
		while (firstFighter.getHealth() >= 0 && secondFighter.getHealth() >= 0) {
			firstFighter.attack(secondFighter);
			if (secondFighter.getHealth() <= 0) {
				firstFighter.addWin();
				secondFighter.addLoss();
				break;
			}
			secondFighter.attack(firstFighter);
			if (firstFighter.getHealth() <= 0) {
				secondFighter.addWin();
				firstFighter.addLoss();
				break;
			}
		}
	}
}