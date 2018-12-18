// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        wallPrefab0: {
            default: null,
            type: cc.Prefab
        },
        wallPrefab1: {
            default: null,
            type: cc.Prefab
        },
        wallPrefab2: {
            default: null,
            type: cc.Prefab
        },
        wallPrefab3: {
            default: null,
            type: cc.Prefab
        },
        wallPrefab4: {
            default: null,
            type: cc.Prefab
        },
        wallPrefab5: {
            default: null,
            type: cc.Prefab
        },
        wallPrefab6: {
            default: null,
            type: cc.Prefab
        },
        wallPrefab7: {
            default: null,
            type: cc.Prefab
        },
        wallPrefab8: {
            default: null,
            type: cc.Prefab
        },
        wallPrefab9: {
            default: null,
            type: cc.Prefab
        },
        wallCount: 0,
        wallLen: 10,
        wallDelayMax: 5,
        wallDelayMin: 2.4,
        enemyPrefab: {
            default: null,
            type: cc.Prefab
        },
        enemyParallel: 1,
        enemyDelay: 3
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.rootCanvas = this.node.parent;
        this.duration = 0;

        this.genEnemyLoop();
        this.genWallLoop();
    },



    start () {

    },

    update (dt) {
        this.duration += dt;
    },

    genEnemyLoop() {
        let parallel = Math.round(Math.random() * 3);
        let delay = this.enemyDelay + Math.round((Math.random() - 0.5) * 2);
        this.scheduleOnce(()=>{
            for (let i = 0; i < parallel; i++) {
                this.genEnemy();
            }
            this.genEnemyLoop();
        }, delay);
    },

    genEnemy() {
        let newEnemy = cc.instantiate(this.enemyPrefab);
        newEnemy.x = this.genEnemyX();
        this.node.addChild(newEnemy);
    },

    genEnemyX() {
        return (Math.random() - 0.5) * (this.rootCanvas.width - this.node.width) * 0.6;
    },

    genWallLoop() {
        let wallDelay = this.wallDelayMax;
        let deltaDelay = this.duration / 1000 * 0.1;
        wallDelay = Math.max(wallDelay - deltaDelay, this.wallDelayMin)
        this.scheduleOnce(()=>{
            this.genWall();
            this.genWallLoop();
        }, wallDelay);
    },

    genWall() {
        let index = (this.wallCount++) % this.wallLen;
        let newWall = cc.instantiate(this[`wallPrefab${index}`]);
        this.node.addChild(newWall);
    }
});
