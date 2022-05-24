"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bodybuilding = exports.Judo = exports.Boxing = exports.Swimming = void 0;
class Swimming {
    constructor() {
        this.nameOfExercise = "Natação";
    }
    getDaysOfWeek() {
        return ["segunda", "terça", "quarta"];
    }
}
exports.Swimming = Swimming;
class Boxing {
    constructor() {
        this.nameOfExercise = "Boxe";
    }
    getDaysOfWeek() {
        return ["segunda", "quarta", "sexta"];
    }
}
exports.Boxing = Boxing;
class Judo {
    constructor() {
        this.nameOfExercise = "Judô";
    }
    getDaysOfWeek() {
        return ["terça", "quarta", "sexta"];
    }
}
exports.Judo = Judo;
class Bodybuilding {
    constructor() {
        this.nameOfExercise = "Musculação";
    }
    getDaysOfWeek() {
        return ["quarta", "quinta", "sexta"];
    }
}
exports.Bodybuilding = Bodybuilding;
