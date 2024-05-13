
class Nain extends Guerrier {
    constructor(castle, plateau) {
        super(castle, plateau);
        this.COEF_RESISTANCE = 2;
        this.COUT_ENTRAINEMENT = 1;
    }

    static getCost() {
        return this.COUT_ENTRAINEMENT;
    }

    hurt(dmg) {
        return super.hurt(Math.floor(dmg / this.COEF_RESISTANCE));
    }
}