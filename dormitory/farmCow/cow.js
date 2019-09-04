class cowBase {
    constructor(age) {
        this.age = age || 0;
    }

    productNewCow() {
        if (this.age < 5 || !this.checkHp()) {
            return null;
        }

        return new cowBase(0);
    }

    addAge() {
        this.age++;
    }

    checkHp() {
        return this.age < 16;
    }

}

