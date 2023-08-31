class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;

    }

    drawLowerImage(ctx){
        ctx.drawImage(this.lowerImage, 0, 0)
    }

    drawUpperImage(ctx){
        ctx.drawImage(this.upperImage, 0, 0)
    }
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "src/img/maps/DemoLower.png",
        upperSrc: "src/img/maps/DemoUpper.png",

        gameObjects: {
            hero: new GameObject({
                x: utils.withGrid(5),
                y: utils.withGrid(6),
            })
        }
    },
    Kitchen: {
        lowerSrc: "src/img/maps/KitchenLower.png",
        upperSrc: "src/img/maps/KitchenUpper.png",

        gameObjects: {
            hero: new GameObject({
                x: 5,
                y: 6,
            })
        }
    },



}