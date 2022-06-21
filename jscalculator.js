let first_number = Number(prompt("enter first number"))
let second_number = Number(prompt("enter second number"))
let operation = prompt("would you like to add subtract multiply or divide")
let result = null

if(operation === "add"){
    let result = first_number + second_number
    console.log(result)
}
else if(operation === "subtract"){
    let result = first_number - second_number
    console.log(result)
}
else if(operation === "multiply"){
    let result = first_number * second_number
    console.log(result)
}
else if(operation === "divide"){
    if(second_number === 0){
        console.log("zero division error")
    }else{
        let result = first_number / second_number
        console.log(result)
    }
    
}