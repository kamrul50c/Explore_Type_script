const firstName='saimon' // implicit type string 
const year=1998    //inplicit type number 

//** */ firstName = 9584635   //Cannot assign to 'firstName' because it is a constant.

// explecit type 

const lastName:string='kh saimon';
const value:number=2000;
const istrue:boolean=true;

const multiple: string| number | boolean = "anythings";




const implicit_string_arr=['saimon', 'mahbub', 'basir']; 

const explecit_string_arr: string[]=['kh', 'masud'];

const union_arrr:(string | number)[]=['khsaimon', 1999];

const tuple_variable:[string, number, boolean]=['khsaimon',2000, false];  // specific type its call tuple in ts

//in tuple you can pop and push other value deccleared as implecit type variable.

const demoObject={      //implecit type variable 
    name:'saimon',
    age:20,
    isMail:true
}


// demoObject.name=10 getting Error for type mismatch


const Student:{name:string, age:number, ismale:boolean}={
    name:'saimon',
    age:20,
    ismale:true
}

//improve and right maner

type studentType={
    readonly name:string,
    readonly age:number,
    ismale: boolean
}

const student:studentType={
    name:'khasaimon',
    age:25,
    ismale:true
}


enum Role { Admin, Editor,
Viewer }
let myRole: Role = Role.Editor;

console.log(myRole);