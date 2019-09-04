class godView {
    constructor() {
        this.cowAry = [];
        this.init();
    }


    init() {
        this.farm = new farm();
        this.farm.getOneCow();
        let yearNum = 20;
        for (let index = 0; index < yearNum; index++) {
            console.log('  -----------------------  ');
            console.log('第', index + 1, '年');
            this.farm.gogo();

        }

        console.log(this.farm.cowAry.length);


        let liveCowAry = _.filter(this.farm.cowAry, (cow) => {
            return cow.checkHp();
        });

        console.log('活着的牛', liveCowAry.length, liveCowAry)
    }

}

new godView();