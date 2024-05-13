class Guerrier {
    constructor(castle, plateau) {
        this.pv = 100;
        this.castle = castle;
        this.plateau = plateau;
        this.onPlateau = false;
        this.deplacement = 1;
        this.mode = "stand";
        this.frame = 0;
        this.pic_back = false;
    }

    setMode(m) {
        if (m !== this.mode) {
            this.frame = 0;
            this.pic_back = false;
        }
        if (m === "attack" || m === "move" || m === "die") {
            this.mode = m;
        } else {
            this.mode = "stand";
        }
    }

    getModeID() {
        switch (this.mode) {
            case "attack":
                return 2;
            case "move":
                return 1;
            case "die":
                return 6;
            case "stand":
                return 0;
            default:
                return 0;
        }
    }

    getImage() {
        if (this.mode === "stand") {
            if (this.frame === 5) {
                this.pic_back = true;
            } else if (this.frame === 0) {
                this.pic_back = false;
            }
        } else {
            if (this.frame === 5) {
                this.frame = 0;
            }
        }
        if (this.pic_back) {
            this.frame--;
        } else {
            this.frame++;
        }
        return `PIC ${this.constructor.name} : ${this.mode} ${this.frame}`;
    }

    walk() {
        this.setMode("move");
        this.deplacement--;
        let index = this.carreau.nextIndex(this.castle);
        if (index >= 0 && index < this.plateau.size()) {
            let nextC = this.plateau.getCarreau(index);
            nextC.enter(this);
        } else {
            this.castle.setWon();
            this.deplacement = 0;
            this.setMode("stand");
        }
        setTimeout(() => {
            this.setMode("stand");
        }, 1000);
    }

    attack(dist) {
        let car = this.carreau;
        let i = car.index();
        let init = i;
        if (this.castle.index() === 0) {
            while (this.plateau.getCarreau(i).empty(this.plateau.getEnemy(this.castle)) && Math.abs(init - i) < dist && i < this.plateau.size()) {
                i++;
            }
            car = this.plateau.getCarreau(i);
        } else {
            while (this.plateau.getCarreau(i).empty(this.plateau.getEnemy(this.castle)) && Math.abs(init - i) < dist && i > 0) {
                i--;
            }
            car = this.plateau.getCarreau(i);
        }
        let g = car.getFirstOponent(this);
        let dmgD = this.De3(this.getForce());
        if (g !== null) {
            this.setMode("attack");
            printlnFight(this, g, dmgD, g.hurt(dmgD));
        }
        setTimeout(() => {
            this.setMode("stand");
        }, 1000);
    }

    getCarreau() {
        return this.carreau;
    }

    setCarreau(carreau) {
        this.carreau = carreau;
        this.onPlateau = true;
    }

    onPlateau() {
        return this.onPlateau;
    }

    getCastle() {
        return this.castle;
    }

    getDeplacement() {
        return this.deplacement;
    }

    resetDeplacement() {
        this.deplacement = 1;
    }

    getForce() {
        return 10;
    }

    De3(force) {
        return Math.floor(Math.random() * 3 * force) + 1;
    }

    getPV() {
        return this.pv;
    }

    dead() {
        return this.pv === 0;
    }
}

