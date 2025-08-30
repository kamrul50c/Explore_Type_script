"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstName = 'saimon'; // implicit type string 
const year = 1998; //inplicit type number 
//** */ firstName = 9584635   //Cannot assign to 'firstName' because it is a constant.
// explecit type 
const lastName = 'kh saimon';
const value = 2000;
const istrue = true;
const multiple = "anythings";
const implicit_string_arr = ['saimon', 'mahbub', 'basir'];
const explecit_string_arr = ['kh', 'masud'];
const union_arrr = ['khsaimon', 1999];
const tuple_variable = ['khsaimon', 2000, false]; // specific type its call tuple in ts
//in tuple you can pop and push other value deccleared as implecit type variable.
const demoObject = {
    name: 'saimon',
    age: 20,
    isMail: true
};
// demoObject.name=10 getting Error for type mismatch
const Student = {
    name: 'saimon',
    age: 20,
    ismale: true
};
const student = {
    name: 'khasaimon',
    age: 25,
    ismale: true
};
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirections.North);
// logs 4 as it continued on from the initial '1' value
console.log(CardinalDirections.West);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
// Striing enum 
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["Editor"] = "editor";
    Role["Viewer"] = "viewer";
})(Role || (Role = {}));
let myRole = Role.Admin;
//# sourceMappingURL=main.js.map