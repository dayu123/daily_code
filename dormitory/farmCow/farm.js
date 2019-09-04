
class farm {
    constructor() {
        this.cowAry = [];
        this.dieCowAry = [];
    }

    gogo() {
        let childCowAry = [];
        _.each(this.cowAry, cow => {
            cow.addAge();
            let childCow = cow.productNewCow();
            if (childCow) {
                childCowAry.push(childCow);
            }

            if (!cow.checkHp()) {
                this.dieCowAry.push(cow);
            }

        });

        this.cowAry = _.concat(this.cowAry, childCowAry);
        console.log('出生牛头数', childCowAry.length, '死亡牛头数', this.dieCowAry.length)

    }

    getOneCow() {
        let childCow = new cowBase(5);
        this.cowAry.push(childCow);
    }
}
