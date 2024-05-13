class Elfe extends Guerrier {
    constructor(castle, plateau) {
        super(castle, plateau);
        this.COEF_FORCE = 2;
        this.COUT_ENTRAINEMENT = 2;
        this.ATTACK_RANGE = 1;
    }

    static getCost() {
        return this.COUT_ENTRAINEMENT;
    }

    getAttackRange() {
        return this.ATTACK_RANGE;
    }

    getForce() {
        return super.getForce() * this.COEF_FORCE;
    }
}