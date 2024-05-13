class ChefElfe extends Elfe {
    constructor(castle, plateau) {
        super(castle, plateau);
        this.COEF_FORCE = 2;
        this.COUT_ENTRAINEMENT = 4;
    }

    static getCost() {
        return this.COUT_ENTRAINEMENT;
    }

    getForce() {
        return super.getForce() * this.COEF_FORCE;
    }
}