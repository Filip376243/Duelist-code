const playerImage = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/arca.png?v=1724142983773';
const backgroundImage = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/background.png?v=1724142990286';
const coinGold = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/coin-gold.png?v=1724143002226';
const coinSilver = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/coin-silver.png?v=1724143006757';
const coinBronze = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/coin-copper.png?v=1724142997939';
const Explosion1 = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/explosion1.png?v=1724143011647';
const Explosion2 = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/explosion2.png?v=1724143021538';
const Explosion3 = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/explosion3.png?v=1724143024590';
const Explosion4 = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/explosion4.png?v=1724143031097';
const hitImage = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/hit.png?v=1724143034309';
const stickImage = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/stick.png?v=1724143042240';
const swordImage = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/sword.png?v=1724143045628';
const thombImage = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/thomb.png?v=1724143055901';
const zombieImage = 'https://cdn.glitch.global/7d12293c-eca2-4380-9c1e-90179c7585a8/zombie.png?v=1724143061588';
const hitThomb = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/thomb-hit.wav?v=1724144529967';
const hitMonster = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/player-hit.mp3?v=1724144525208';
const destrThomb = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/thomb-destr.wav?v=1724144529578';
const killZombie = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/player-inst.mp3?v=1724144525960';
const playerDeath = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/player-death.mp3?v=1724144524740';
const playerSuck = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/player-suck.mp3?v=1724144526321';
const monsterHit = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/zombie-hit.mp3?v=1724144530397';
const bronzeReceive = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/bronze-receive.mp3?v=1724172799031';
const silverReceive = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/silver-receive.mp3?v=1724172798680';
const goldReceive = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/gold-receive.mp3?v=1724172798164';
const healPlus = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/heal-plus.png?v=1724187639539';
const bucksImage = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/bucks.png?v=1725694251369';
const lightingImage = 'https://cdn.glitch.global/1ea19045-4767-4937-982b-a6d7a7d2c370/lighting.png?v=1725206028211';

let difficulty = 1;
let Level = 1;

class Game {
    constructor() {
        this.wave = 1;
        this.fight;
        this.run = false;
    }
    update() {
        if (this.run) {
            this.fight.update();
        }
    }
}

class Fight {
    constructor(game, number, diffic) {
        document.querySelector('.hp').style.width = '400px';

        this.game = game;
        this.player = new Player(this);
        player.style.left = '40vw';
        player.style.top = '40vh';
        this.frequency = 500;
        this.number = 1;
        this.monsters = [];
        this.startMonsters, this.mantinelX, this.mantinelY, this.deltaH, this.deltaW, this.thombs;
        this.area = document.querySelector('.area');
        switch (diffic) {
            case 1:
                this.startMonsters = 10;
                break;
            case 2:
                this.startMonsters = 20;
                break;
            default:
                this.startMonsters = 30;
        }
        switch (number) {
            case 1:
                this.thombs = [
                    {x: 0.85*innerWidth, y: 0.1*innerHeight, width: 120, health: 40, index: 1},
                    {x: 0.9*innerWidth, y: 0.75*innerHeight, width: 120, health: 40, index: 2},
                    {x: 0.1*innerWidth, y: 0.15*innerHeight, width: 120, health: 40, index: 3},
                    {x: 0.05*innerWidth, y: 0.8*innerHeight, width: 120, health: 40, index: 4}
                ];
                this.area.style.width = '100vw';
                this.area.style.heigth = '100vh';
                this.mantinelX = 0.93;
                this.mantinelY = 0.9;
                this.deltaW = 0;
                this.deltaH = 0;
                if (nothing.classList.contains('display')) quer('nothing');
                break;
            case 2:
                this.thombs = [
                    {x: 0.85*innerWidth, y: 0.1*innerHeight, width: 120, health: 40, index: 1},
                    {x: 0.9*innerWidth, y: 0.75*innerHeight, width: 120, health: 40, index: 2},
                    {x: 0.1*innerWidth, y: 0.15*innerHeight, width: 120, health: 40, index: 3},
                    {x: 0.05*innerWidth, y: 0.8*innerHeight, width: 120, health: 40, index: 4}
                ];
                this.area.style.width = '200vw';
                this.area.style.height = '100vh';
                this.mantinelX = 1.93;
                this.mantinelY = 0.9;
                this.deltaW = 1;
                this.deltaH = 0;
                if (nothing.classList.contains('display')) quer('nothing');
                break;
            case 3: 
                this.thombs = [
                    {x: 0.85*innerWidth, y: 0.1*innerHeight, width: 120, health: 40, index: 1},
                    {x: 0.9*innerWidth, y: 0.75*innerHeight, width: 120, health: 40, index: 2},
                    {x: 0.1*innerWidth, y: 0.15*innerHeight, width: 120, health: 40, index: 3},
                    {x: 0.05*innerWidth, y: 0.8*innerHeight, width: 120, health: 40, index: 4}
                ];
                this.area.style.width = '200vw';
                this.area.style.height = '200vh';
                this.mantinelX = 1.93;
                this.mantinelY = 1.9;
                this.deltaW = 1;
                this.deltaH = 1;
                if (nothing.classList.contains('invisible')) quer('nothing');
                document.querySelector('.nothing').style.left = '0px';
                document.querySelector('.nothing').style.bottom = '0px';
                break;
            case 4:
                this.thombs = [
                    {x: 0.85*innerWidth, y: 0.1*innerHeight, width: 120, health: 40, index: 1},
                    {x: 0.9*innerWidth, y: 0.75*innerHeight, width: 120, health: 40, index: 2},
                    {x: 0.1*innerWidth, y: 0.15*innerHeight, width: 120, health: 40, index: 3},
                    {x: 0.05*innerWidth, y: 0.8*innerHeight, width: 120, health: 40, index: 4}
                ];
                this.area.style.width = '100vw';
                this.area.style.height = '200vh';
                this.mantinelX = 0.93;
                this.mantinelY = 1.9;
                this.deltaW = 0;
                this.deltaH = 1;
                if (nothing.classList.contains('display')) quer('nothing');
                break;
            case 5:
                this.thombs = [
                    {x: 0.85*innerWidth, y: 0.1*innerHeight, width: 120, health: 40, index: 1},
                    {x: 0.9*innerWidth, y: 0.75*innerHeight, width: 120, health: 40, index: 2},
                    {x: 0.1*innerWidth, y: 0.15*innerHeight, width: 120, health: 40, index: 3},
                    {x: 0.05*innerWidth, y: 0.8*innerHeight, width: 120, health: 40, index: 4}
                ];
                this.area.style.width = '200vw';
                this.area.style.height = '200vh';
                this.mantinelX = 1.93;
                this.mantinelY = 1.9;
                this.deltaW = 1;
                this.deltaH = 1;
                if (nothing.classList.contains('display')) quer('nothing');
                break;
        }
        const inter = setInterval(() => {
            this.spawn();
            if (this.number > this.startMonsters) {
                clearInterval(inter);
                this.frequency = 4000;
                const interv = setInterval(() => {
                    if (this.thombs.length > 0) this.spawn();
                    if (this.thombs.length == 0) clearInterval(interv);
                }, this.frequency);
            }
        }, this.frequency);
        const timer = setInterval(() => {
            if (game.run) time.innerHTML++;
            else clearInterval(timer);
        }, 1000);
    }
    update() {
        this.monsters.forEach((monster, index, monsters) => {
            if (!monster.life) {
                monster.image.remove();
                monster.weapon.remove();
                monsters.splice(index, 1);
            }
            monster.move();
        });
        this.player.update();
        this.player.move();
    }
    spawn() {
        let n = Math.random();
        let x,y,k;
        for (let j=0; j<this.thombs.length; j++) {
            if (n > j/this.thombs.length) k = j;
        }
        x = this.thombs[k].x;
        y = this.thombs[k].y;
        this.monsters.push(new Zombie(this.player, x, y, this.number));
        this.number++;
    }
}

class Monster {
    constructor() {
        this.div = document.createElement('div');
        this.image = document.createElement('img');
        this.div.style.zIndex = 3;
        this.div.style.position = "absolute";
        document.querySelector('.area').appendChild(this.div);
    }
}

class Melee extends Monster {
    constructor() {
        super();
    }
    move() {
        if (!this.attack()) {
            let diff = Math.pow(((this.x + this.width/2) - (this.player.x + this.player.width/2))/(Math.abs((this.x + this.width/2)-(this.player.x + this.player.width/2))+Math.abs((this.y+this.height/2)-(this.player.y + this.player.height/2))), 2)+Math.pow(((this.y+this.height/2) - (this.player.y + this.player.height/2))/(Math.abs((this.x + this.width/2)-(this.player.x + this.player.width/2))+Math.abs((this.y+this.height/2)-(this.player.y + this.player.height/2))), 2);
            this.speedX = this.speed*Math.abs(this.x+this.width/2-this.player.x-this.player.width/2)/(Math.abs(this.x+this.width/2-this.player.x-this.player.width/2)+Math.abs(this.y+this.height/2-this.player.y-this.player.height/2))/diff;
            this.speedY = this.speed*Math.abs(this.y+this.height/2-this.player.y-this.player.height/2)/(Math.abs(this.x+this.width/2-this.player.x-this.player.width/2)+Math.abs(this.y+this.height/2-this.player.y-this.player.height/2))/diff;
            if (this.player.x + this.player.width/2 < this.x + this.width/2) this.speedX *= -1;
            if (this.player.y + this.player.height/2 < this.y + this.height/2) this.speedY *= -1;
            if (this.nothing() || (!this.out() || this.horizontal)) this.x += this.speedX;
            else this.y += this.speedX;
            if (this.nothing() || (!this.out() || this.vertical)) this.y += this.speedY;
            else this.x += this.speedY;
    
            this.div.style.left = this.x+"px";
            this.div.style.top = this.y+"px";
            this.weapon.style.left = (this.weaponAdjustX)+"px";
            this.weapon.style.top = (this.weaponAdjustY)+"px";
            if (this.x + this.image.width/2 > this.player.x + this.width/2) {
                this.div.style.transform = 'scaleX(1)';
            } else this.div.style.transform = 'scaleX(-1)';

            //checking nothing axes
            if (this.x < innerWidth) this.horizontal = true;
            else this.horizontal = false;
            if (this.y + this.height > innerHeight) this.vertical = true;
            else this.vertical = false;
        } else if (this.bam) {
            this.bam = false;
            const up = setInterval(() => {
                this.crack.angle += this.crack.speed;
                this.rot(this.crack.angle);
                if (this.crack.angle > this.crack.top || game.fight.thombs.length == 0) {
                    clearInterval(up);
                    const down = setInterval(() => {
                        this.crack.angle -= this.crack.speed;
                        this.rot(this.crack.angle);
                        if ((this.crack.angle < this.crack.bottom && this.life) || game.fight.thombs.length == 0) {
                            if (this.attack() && game.fight.thombs.length > 0) {
                                this.player.health -= this.damage;
                                document.querySelector('.hp').style.width = this.player.health/this.player.maxHP*100+'%';
                                let audio = new Audio();
                                if (this.player.health > 0) {
                                    audio.src = playerSuck;
                                    audio.currentTime = 0.5;
                                }
                                else if (document.querySelector('.area').classList.contains('display')) {
                                    quer('area', 'game-over', 'header');
                                    game.fight.monsters.forEach((monster, idx, monsters) => {
                                        monster.image.remove();
                                        monster.weapon.remove();
                                        monsters.splice(idx, 1);
                                    });
                                    audio.src = playerDeath;
                                    game.run = false;
                                    //wtf, new game (literally XD)
                                }
                                audio.play();
                            }
                            clearInterval(down);
                            const upp = setInterval(() => {
                                this.crack.angle += this.crack.speed;
                                this.rot(this.crack.angle);
                                if (this.crack.angle >= 0 || game.fight.thombs.length == 0) {
                                    clearInterval(upp);
                                    this.bam = true;
                                }
                            }, 16);
                        }
                    }, 16);
                }
            }, 16);
        }
    }
    attack() {
        if (Math.sqrt(Math.pow((this.player.x + this.player.width/2) - (this.x + this.width/2), 2)+Math.pow((this.player.y + this.player.width/2) - (this.y + this.width/2), 2)) < this.width/2+(this.player.width*this.range)) {
            return true;
        } else return false;
    }
    nothing() {
        if (document.querySelector('.nothing').classList.contains('invisible')) return true;
        else return false;
    }
    out() {
        if (this.x + this.speedX < innerWidth && this.y + this.height + this.speedY > innerHeight) {
            return true;
        } else return false;
    }
    rot(angle) {
        this.weapon.style.transform = `rotate(${angle}deg)`;
    }
}

class Range extends Monster {
    constructor() {

    }
}

class Zombie extends Melee {
    constructor(player, x, y, number) {
        super();
        this.number = number;
        this.player = player;
        this.maxHP = 20;
        this.health = 20;
        this.damage = 10;
        this.life = true;
        this.cooldown = 1;
        this.range = 0.5;
        this.speed = 0.5;
        this.bam = true;
        this.horizontal = false;
        this.vertical = false;
        this.speedX, this.speedY;
        this.div.classList.add('zombie'+number);
        this.image.src = zombieImage;
        document.querySelector(`.zombie${number}`).appendChild(this.image);
        this.x = x;
        this.y = y;
        this.div.style.left = this.x+"px";
        this.div.style.top = this.y+"px";
        this.width = 72;
        this.height = 72;
        this.image.style.width = this.width+"px";
        this.weapon = document.createElement('img');
        this.weapon.src = stickImage;
        this.weapon.style.position = "absolute";
        document.querySelector(`.zombie${number}`).appendChild(this.weapon);
        this.weaponAdjustX = -12;
        this.weaponAdjustY = 24;
        this.weapon.style.left = (this.weaponAdjustX)+"px";
        this.weapon.style.top = (this.weaponAdjustY)+"px";
        this.weapon.style.zIndex = 2;
        this.weapon.style.width = 33+"px";
        this.weapon.style.transformOrigin = 'bottom right';
        this.crack = {
            time: 400,
            speed: 5,
            angle: 0,
            top: 30,
            bottom: -30,
            up: true,
            back: false,
            hold: false
        };
        this.hitSize = 55;
    }
}

class Player {
    constructor(fight) {
        this.fight = fight;
        this.maxHP = 50;
        this.health = 50;
        this.baseSpeed = 2;
        this.speed = 2;
        this.speedX = 0;
        this.speedY = 0;
        this.range = 1.2;
        this.damage = 10;
        this.width = 72;
        this.height = 72;
        this.x = 0.4*innerWidth;
        this.y = 0.4*innerHeight;
        this.areaX = 0;
        this.areaY = 0;
        this.horizontal = false;
        this.vertical = false;
        this.coins = [];
        this.crack = {
            main: false,
            speed: 5,
            angle: 0,
            top: -30,
            bottom: 30,
            up: true,
            back: false,
            hold: false
        };
        this.hitSize = 55;
        this.coinSize = 55;
        sword.style.transformOrigin = "bottom left";
        this.keys = {
            w: false,
            s: false,
            a: false,
            d: false,
            space: false,
            control: false,
        };
        window.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "w":
                    this.keys.w = true;
                    break;
                case "s":
                    this.keys.s = true;
                    break;
                case "a":
                    this.keys.a = true;
                    break;
                case "d":
                    this.keys.d = true;
                    break;
                case ";":
                    this.speed = this.baseSpeed*3;
                    break;
                case " ": 
                    if (!this.keys.space) this.crack.hold = true;
                    this.keys.space = true;
                    break;
                case "Control": 
                    this.keys.control = true;
                    break;
            }
        });
        window.addEventListener("keyup", (e) => {
            switch(e.key) {
                case "w":
                    this.keys.w = false;
                    break;
                case "s":
                    this.keys.s = false;
                    break;
                case "a":
                    this.keys.a = false;
                    break;
                case "d":
                    this.keys.d = false;
                    break;
                case ";":
                    this.speed = this.baseSpeed;
                    break;
                case " ":
                    this.keys.space = false;
                    break;
                case "Control":
                    this.keys.control = false;
                    break;
            }
        });
    }
    update() {
        if (this.keys.w) {
            this.speedY = -this.speed;
        } else if (this.keys.s) {
            this.speedY = this.speed;
        } else this.speedY = 0;
        if (this.keys.a) {
            this.speedX = -this.speed;
            player.style.transform = "scaleX(-1)";
        } else if (this.keys.d) {
            this.speedX = this.speed;
            player.style.transform = "scaleX(1)";
        } else this.speedX = 0;
        //crack
        if (this.keys.space && this.crack.hold) {
            this.crack.main = true;
            this.crack.hold = false;
        }
        if (this.crack.main) {
            if (this.crack.up) {
                this.crack.angle -= this.crack.speed;
            } else this.crack.angle += this.crack.speed;
            this.crack.back = true;
            
            if (this.crack.angle < this.crack.top) {
                this.crack.up = false;
            } else if (this.crack.angle > this.crack.bottom) {
                if (player.style.transform == 'scaleX(1)') {
                    this.fight.monsters.forEach(monster => {
                        if (Math.sqrt(Math.pow((this.x + this.width/2) - (monster.x + monster.width/2), 2)+Math.pow((this.y + this.height/2) - (monster.y + monster.height/2), 2)) < monster.width/2+this.width*this.range && this.x + this.width/2 <= monster.x + monster.width/2) {
                            monster.health -= this.damage;
                            let audio = new Audio();
                            if (monster.health <= 0) {
                                monster.life = false;
                                this.explode(monster, false);
                                audio.src = killZombie;
                                audio.currentTime = 0.6;
                            } else {
                                this.enemy(monster);
                                audio.src = hitMonster;
                            }
                            audio.play();
                        }
                    });  
                    this.fight.thombs.forEach((thomb, idx, thombs) => {
                        if (Math.sqrt(Math.pow((this.x + this.width/2)-(thomb.x + thomb.width/2), 2)+Math.pow((this.y + this.height/2)-(thomb.y + thomb.width/2), 2)) < thomb.width/2+this.width*this.range && this.x + this.width/2 <= thomb.x + thomb.width/2) {
                            thomb.health -= this.damage;
                            let audio = new Audio();
                            if (thomb.health <= 0) {
                                this.coinage(thomb, 0.9, 0);
                                audio.src = destrThomb;
                                thombs.splice(idx, 1);
                                document.getElementById(`thomb${thomb.index}`).style.display = 'none';
                            } else {
                                audio.src = hitThomb;
                            }
                            audio.play();
                        }
                    }); 
                } else if (player.style.transform == 'scaleX(-1)') {
                    this.fight.monsters.forEach(monster => {
                        if (Math.sqrt(Math.pow((this.x + this.width/2) - (monster.x + monster.width/2), 2)+Math.pow((this.y + this.height/2) - (monster.y + monster.height/2), 2)) < monster.width/2+this.width*this.range && this.x + this.width/2 > monster.x + monster.width/2) {
                            monster.health -= this.damage;
                            let audio = new Audio();
                            if (monster.health <= 0) {
                                monster.life = false;
                                this.explode(monster, true);
                                audio.src = killZombie;
                                audio.currentTime = 0.6;
                            } else {
                                audio.src = hitMonster;
                                this.enemy(monster);
                            }
                            audio.play();
                        }
                    });
                    this.fight.thombs.forEach((thomb, idx, thombs) => {
                        if (Math.sqrt(Math.pow((this.x + this.width/2)-(thomb.x + thomb.width/2), 2)+Math.pow((this.y + this.height/2)-(thomb.y + thomb.width/2), 2)) < thomb.width/2+this.width*this.range && this.x + this.width/2 > thomb.x + thomb.width/2) {
                            thomb.health -= this.damage;
                            let audio = new Audio();
                            if (thomb.health <= 0) {
                                this.coinage(thomb, 0.9, 0);
                                audio.src = destrThomb;
                                thombs.splice(idx, 1);
                                document.getElementById(`thomb${thomb.index}`).style.display = 'none';
                            } else {
                                audio.src = hitThomb;
                            }
                            audio.play();
                        }
                    }); 
                }
                this.crack.up = true;
            } else if (this.crack.back && this.crack.angle == 0 && this.crack.up) {
                this.crack.angle = 0;
                this.crack.main = false;
                this.crack.back = false;
            }
            sword.style.transform = `rotate(${this.crack.angle}deg)`;
        }
        //coin detection
        this.coins.forEach((coin, id, coins) => {
            if (this.x + this.width > parseFloat(coin.style.left) && this.x < parseFloat(coin.style.left) + parseFloat(coin.style.width) && this.y + this.height > parseFloat(coin.style.top) && this.y < parseFloat(coin.style.top) + parseFloat(coin.style.width)) {
                let audio = new Audio();
                if (coin.classList.contains('bro')) {
                    bronze.innerHTML++;
                    audio.src = bronzeReceive;
                }
                else if (coin.classList.contains('sil')) {
                    silver.innerHTML++;
                    audio.src = silverReceive;
                    audio.volume = 0.1;
                }
                else if (coin.classList.contains('gol')) {
                    gold.innerHTML++;
                    audio.src = goldReceive;
                    audio.volume = 0.5;
                }
                audio.play();
                coin.remove();
                coins.splice(id, 1);
            }
        });
        if (this.fight.thombs.length == 0) {
            game.run = false;
            setTimeout(() => {
                quer('area', 'shop', 'time', 'health');
            }, 2000);
        }
    }
    enemy(mon) {
        let bum = document.createElement('img');
        bum.src = hitImage;
        bum.style.position = 'absolute';
        bum.style.zIndex = 5;
        bum.style.width = this.hitSize+'px';
        bum.style.left = ((this.width - this.hitSize)/2)+'px';
        bum.style.top = ((this.height - this.hitSize)/2)+'px';
        bum.style.opacity = 0.6;
        document.querySelector(`.zombie${mon.number}`).appendChild(bum);
        setTimeout(() => {
            bum.remove();
        }, 400);
    }
    explode(mon, right) {
        let exp = document.createElement('img');
        exp.src = Explosion1;
        exp.style.position = 'absolute';
        exp.style.zIndex = 6;
        exp.style.width = this.hitSize+'px';
        if (right) exp.style.left = ((this.width - this.hitSize)/2 - mon.width)+'px';
        else exp.style.left = ((this.width - this.hitSize)/2)+'px';
        exp.style.top = ((this.height - this.hitSize)/2)+'px';
        document.querySelector(`.zombie${mon.number}`).appendChild(exp);
        if (mon.number <= this.fight.startMonsters) this.coinage(mon, .99, .9);
        setTimeout(() => {
            exp.src = Explosion2;
            setTimeout(() => {
                exp.src = Explosion3;
                setTimeout(() => {
                    exp.src = Explosion4;
                    setTimeout(() => {
                        exp.remove();
                    }, 150);
                }, 150);
            }, 150);
        }, 150);
    }
    coinage(object, first, second) {
        let coin = document.createElement('img');
        this.coins.push(coin);
        let n = Math.random();
        if (n > first) {
            coin.src = coinGold;
            coin.classList.add('gol');
        } else if (n > second) {
            coin.src = coinSilver;
            coin.classList.add('sil');
        } else {
            coin.src = coinBronze;
            coin.classList.add('bro');
        }
        coin.classList.add('coin');
        coin.style.left = (object.x + (this.width - this.coinSize)/2)+'px';
        coin.style.top = (object.y + (this.height - this.coinSize)/2)+'px';
        coin.style.width = this.coinSize+'px';
        document.querySelector('.area').appendChild(coin);
    }
    move() {
        if (this.x + this.areaX > innerWidth*0.4 && this.x + this.areaX < innerWidth*0.5 && this.areaX <= 0 && this.areaX >= -this.fight.deltaW*innerWidth && (this.nothing() || (!this.out() || (this.horizontal && !this.vertical)))) this.areaX -= this.speedX;
        if (this.areaX > 0) this.areaX = 0;
        else if (this.areaX < -this.fight.deltaW*innerWidth) this.areaX = -this.fight.deltaW*innerWidth;
        if (this.y + this.areaY > innerHeight*0.4 && this.y + this.areaY < innerHeight*0.5 && this.areaY <= 0 && this.areaY >= -this.fight.deltaH*innerHeight && (this.nothing() || (!this.out() || (this.vertical && !this.horizontal)))) this.areaY -= this.speedY;
        if (this.areaY > 0) this.areaY = 0;
        else if (this.areaY < -this.fight.deltaH*innerHeight) this.areaY = -this.fight.deltaH*innerHeight;
        
        if (this.nothing() || (!this.out() || (this.horizontal && !this.vertical))) this.x += this.speedX;
        if (this.nothing() || (!this.out() || (this.vertical && !this.horizontal))) this.y += this.speedY;
        if (this.x < 0) this.x = 0;
        else if (this.x > innerWidth*this.fight.mantinelX) this.x = this.fight.mantinelX*innerWidth;
        if (this.y > this.fight.mantinelY*innerHeight) this.y = this.fight.mantinelY*innerHeight;
        else if (this.y < 0) this.y = 0;
        player.style.left = this.x+"px";
        player.style.top = this.y+"px";    
        document.querySelector('.area').style.left = this.areaX+'px';
        document.querySelector('.area').style.top = this.areaY+'px';

        //checking nothing axes
        if (this.x < innerWidth) this.horizontal = true;
        else this.horizontal = false;
        if (this.y + this.height > innerHeight) this.vertical = true;
        else this.vertical = false;
    }
    nothing() {
        if (document.querySelector('.nothing').classList.contains('invisible')) return true;
        else return false;
    }
    out() {
        if (this.x + this.speedX < innerWidth && this.y + this.height + this.speedY > innerHeight) {
            return true;
        } else return false;
    }
}

const game = new Game();

function quer(el1, el2, el3, el4) {
    const arr = [el1];
    if (el2 != null) {
        arr.push(el2);
        if (el3 != null) {
            arr.push(el3);
            if (el4 != null) {
                arr.push(el4);
            }
        }
    }
    arr.forEach(ar => {
        document.querySelector('.'+ar).classList.toggle('invisible');
        document.querySelector('.'+ar).classList.toggle('display');
    });
}
function level() {
    document.querySelector('.selection').style.opacity = 1;
    quer('selection', 'yes-no', 'area', 'sign');
    setTimeout(() => {
        counter.innerHTML = '2';
        setTimeout(() => {
            counter.innerHTML = '1';
            setTimeout(() => {
                quer('sign', 'wave');
                document.querySelector('.area').style.opacity = 1;
                game.fight = new Fight(game, Level, difficulty);
                game.run = true;
                counter.innerHTML = '3';
            }, 1000);
        }, 1000)
    }, 1000);
    animate();
}

function skullNormal() {
    document.querySelector('.skull-normal').style.background = '#0a0';
    document.querySelector('.skull-hard').style.background = 'transparent';
    document.querySelector('.skull-insane').style.background = 'transparent';
    difficulty = 1;
}
function skullHard() {
    document.querySelector('.skull-hard').style.background = 'orange';
    document.querySelector('.skull-insane').style.background = 'transparent';
    document.querySelector('.skull-normal').style.background = 'transparent';
    difficulty = 2;
}
function skullInsane() {
    document.querySelector('.skull-insane').style.background = 'red';
    document.querySelector('.skull-hard').style.background = 'transparent';
    document.querySelector('.skull-normal').style.background = 'transparent';
    difficulty = 3;
}
function showClarification(n) {
    if (document.querySelector('.yes-no').classList.contains('invisible')) {
        quer('yes-no');
        document.querySelector('.selection').style.opacity = 0.6;
        Level = n;
        feat.innerHTML = Level;
        if (difficulty == 1) clarifyDifficulty.innerHTML = 'Normal';
        else if (difficulty == 2) clarifyDifficulty.innerHTML = 'Hard';
        else clarifyDifficulty.innerHTML = 'Insane';
    }
}
function cancelClarification() {
    quer('yes-no');
    document.querySelector('.selection').style.opacity = 1;
}

function animate() {
    game.update();
    requestAnimationFrame(animate);
}

// proper motion of zombies through mantinels