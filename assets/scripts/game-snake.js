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
        isTouchOn: false,
        initSpeed: 10,
        accLeft: 240,
        accRight: 480
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.snakeSpeed = this.initSpeed;
        this.rootCanvas = this.node.parent.parent;
        this.rootCanvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.rootCanvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);  
    },

    onTouchStart () {
        this.isTouchOn = true;
        this.snakeSpeed = -this.initSpeed;
        console.log(this.accLeft, this.accRight);
    },

    onTouchEnd () {
        this.isTouchOn = false;
        this.snakeSpeed = this.initSpeed;
    },

    snakeMove (dt) {
        let moveArea = this.rootCanvas.width / 2 - this.node.width / 2;
        this.node.x += this.snakeSpeed * dt;
        if (this.node.x <= -moveArea) {
            this.node.x = -moveArea;
        } else if (this.node.x >= moveArea) {
            this.node.x = moveArea;
        }
    },



    start () {

    },

    update (dt) {
        let accRight = this.isTouchOn ? this.accRight : 0;
        let accLeft = this.accLeft;
        this.snakeSpeed += (accLeft - accRight) * dt;
        this.snakeMove(dt);
    },

    
    
});
