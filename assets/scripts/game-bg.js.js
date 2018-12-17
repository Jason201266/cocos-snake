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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        bg1: {
            default: null,
            type: cc.Node
        },

        bg2: {
            default: null,
            type: cc.Node
        },

        speed: 100
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.bgList = [this.bg1, this.bg2];
    },

    bgMove (dt) {
        let index = 0;
        let bgList = this.bgList;
        let length = bgList.length;
        let speed = this.speed;
        for(; index < length; index++){
            let element = bgList[index];
            // let bgHeight = element.height;
            element.y -= speed * dt;
            if (element.y <= -element.height) {
                element.y = element.height - speed * dt * 2;
            }
        } 
    },


    start () {

    },

    update (dt) {
        this.bgMove(dt);
    },
});
