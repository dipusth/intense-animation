// console.log('hello script')
let person ={
    firstName: "Dipu",
    lastName: "Shrestha",
    age:25,
    Is: "student,"
};

let introduction = (person) => {
    let intro = "Hi, ";
    for(let key in person){
        if(key = "firstName"){
            console.log('firstName')
            intro += "My Name is" + person[key]
        }else if (key = "lastName"){
            intro += "My lastName is" + person[key]
        }else if (key = "age"){
            intro += "I am" + person[key] + "years old"
        }else {
            intro += "I am" + person[key]
        }
        console.log('running')
        alert(`${intro}`); console.log(intro)
        
    }

}
btn.addEventListner('click', )
introduction(person);