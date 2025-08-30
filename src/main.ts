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


enum CardinalDirections {
  North = 1,
  East,
  South,
  West
};

// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirections.North);

// logs 4 as it continued on from the initial '1' value
console.log(CardinalDirections.West);


enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);


// Striing enum 

enum Role { Admin='admin', Editor='editor',
Viewer='viewer'}

let myRole:Role = Role.Admin;


// function return type 

function tomarname():string{
  const name: string='saimon'
  return name;
}

tomarname();

function printhello():void {        //another is never which one is for incompleate code or error ;
  console.log('hello bangladesh ');
}

function arr():string[]{
  return['a','b','c']
}



// return array of object 

type studenttype={
  name:string;
  age:number;
  email:string
}

const hello=():studenttype[]=>{
  return[{
    name:'saimon',
    age:20,
    email:'saymon@email.com'
  },
  {
    name:'kh',
    age:30,
    email:'kh@mail.com'
  }
]
}


// function parameter type 

function multiplef(a:string, b?:number):(string | number){      //optional parameter ? 
  const str=a
  const nbr= b;
  return a;
}

