// =================|Example 01|=============
// class Parents {
//     hello() {
//         console.log("Hello");

//     };
// }
// class Child extends Parents { }
// let obj = new Child();
// obj.hello();

// =================|Example 02|=============
class Person {
    eat() {
        console.log("Just eat and eat");

    };
    sleep(){
        console.log("No sleep just eat");
        
    }

    work(){
        console.log("Nothing work just eat");
        
    };
};

class Engineer extends Person{
    work(){
        console.log("Hard Worker");
        
    };
    sleep(){
        console.log("No Need Sleep");
        
    };
};

 
