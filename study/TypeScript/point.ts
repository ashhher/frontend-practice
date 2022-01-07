// class
interface IPoint {
    x: number;
    y: number;
    drawPoint: () => void;
    getDistance: (p: IPoint) => number;
}

export class Point implements IPoint {
    //     x: number;
    //     y: number;
    constructor(private _x: number, private _y: number = 2) {//不可重载！
        // this.x = x;
        // this.y = y;
    }
    get x() {//至少在es5以上才能用这种get set
        return this._x;
    }

    get y() {
        return this._y;
    }

    drawPoint = () => {
        console.log(this._x, this._y);
    }
    getDistance = (p: IPoint) => {
        let distance = Math.pow(p.x - this._x, 2) + Math.pow(p.y - this._y, 2);
        console.log(distance);
        return distance;
    }
}