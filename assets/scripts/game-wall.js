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
        wallSpeed: 200
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.rootCanvas = this.node.parent.parent;
        this.moveDistance = this.rootCanvas.height + this.node.height;
        this.moveAction = cc.moveTo(this.moveDistance/this.wallSpeed, cc.v2(this.node.x, -this.moveDistance/2));
        this.moveCallback = cc.callFunc(this.removeWall, this);
        this.moveSeq = cc.sequence(this.moveAction, this.moveCallback);

        this.node.runAction(this.moveAction);

        cc.director.getCollisionManager().enabled = true;

    },

    removeWall () {
        this.node && this.node.removeFromParent();
    },

    onCollisionEnter: function (other, self) {
        if (other.node.name === 'snake') {
            console.log('die');
        }
    },

    start () {

    },

    // update (dt) {},
});
