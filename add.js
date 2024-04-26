function addNumbers(x,y){
    let answer = x + y
    return answer
}

function evenNumbers(numbers){
    let result= numbers.filter(numbers=> numbers % 2 == 0)
    return result
}


function student(main){
    
    if (90>main<100){
        return "A"
    }
    if(89>main<80){
        return "B"
    }
    if(79<main<70){
        return "C"
    }
    if(69<main<60){
        return "D"
    }
    if(60<main){
        return "F"
    }
    
}

function studentScores(students){
    // let studentScore = [65,92,84,75,88]
    let scores = studentScores.map((students)=> student)
    return scores
}

module.exports = {addNumbers, evenNumbers,studentScores};

