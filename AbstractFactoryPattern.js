/**
 * 抽象工厂方法
 * @param {*} subType 子类
 * @param {*} superType 父类类型
 * @author dravenxiaokai
 */
var VehicleFactory = function (subType, superType) {
    //判断抽象工厂中是否有该抽象类
    if (typeof VehicleFactory[superType] === 'function') {
        //缓存类
        function F() { };
        //继承父类属性和方法
        F.prototype = new VehicleFactory[superType]();
        //将子类constructor指向子类
        subType.constructor = subType;
        //子类原型继承“父类”
        subType.prototype = new F();
    } else {
        //不存在该抽象类抛出错误
        throw new Error('未创建该抽象类');
    }
}
//小汽车抽象类
VehicleFactory.Car = function () {
    this.type = 'car';
}
VehicleFactory.Car.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能调用');
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用');
    }
}
//公交车抽象类
VehicleFactory.Bus = function () {
    this.type = 'bus';
}
VehicleFactory.Bus.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能调用');
    },
    getPassengerNum: function () {
        return new Error('抽象方法不能调用');
    }
}
//货车抽象类
VehicleFactory.Truck = function () {
    this.type = 'truck';
}
VehicleFactory.Truck.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能调用');
    },
    getTrainload: function () {
        return new Error('抽象方法不能调用');
    }
}
//抽象与实现

//宝马汽车子类
var BMW = function (price, speed) {
    this.price = price;
    this.speed = speed;
}
//抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW, 'Car');
BMW.prototype.getPrice = function () {
    return this.price;
}
BMW.prototype.getSpeed = function () {
    return this.speed;
}
//宇通汽车子类
var YUTONG = function (price, passenger) {
    this.price = price;
    this.passenger = passenger;
}
//抽象工厂实现对Bus抽象类的继承
VehicleFactory(YUTONG, 'Bus');
YUTONG.prototype.getPrice = function () {
    return this.price;
}
YUTONG.prototype.getPassengerNum = function () {
    return this.passenger;
}
//奔驰货车子类
var BenzTruck = function (price, trainload) {
    this.price = price;
    this.trainload = trainload;
}
//抽象工厂实现对Truck抽象类的继承
VehicleFactory(BenzTruck, 'Truck');
BenzTruck.prototype.getPrice = function () {
    return this.price;
}
BenzTruck.prototype.getTrainload = function () {
    return this.getTrainload;
}

//单例测试
var car = new BMW(1500000, 200);
console.log(car.getPrice());//1500000
console.log(car.type);//car
var bus = new YUTONG(800000, 200);
console.log(bus.getPrice());//800000
console.log(bus.type);//bus
var truck = new BenzTruck(1000000, 1000);
console.log(truck.getPrice());//1000000
console.log(truck.type);//truck