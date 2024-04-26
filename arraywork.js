let obj1={
    name : 'lagos',
    population : 30,
    temp: 12,
    currency:"dollar"
}
let obj2={
    name : 'oyo',
    population : 50,
    temp: 8,
    currency:"dollar"
}
let obj3={
    name : 'ogun',
    population : 42,
    temp: 9,
    currency:"dollar"
}
let obj4={
    name : 'platue',
    population : 27,
    temp: 5,
    currency:"dollar"
}
let obj5={
    name : 'river',
    population : 62,
    temp: 10,
    currency:"dollar"
}
let obj6={
    name : 'sokoto',
    population : 70,
    temp: 12,
    currency:"dollar"
}
let obj7={
    name : 'niger',
    population : 54,
    temp: 15,
    currency:"dollar"
}
let obj8={
    name : 'kwara',
    population : 36,
    temp: 9,
    currency:"dollar"
}
let obj9={
    name : 'yobe',
    population : 44,
    temp: 7,
    currency:"dollar"
}

let demograh=[[null,obj1,obj2,obj3],[obj4,obj5,obj6,null],[obj7,null,obj8,obj9]]

let populationTotal = 0
for(let index of demograh){
    for(const obj in index){
        if(index[obj]!= null){
            populationTotal+= index[obj].population
        }
    }
}
console.log(populationTotal)
let tempTotal =0
for(let x of demograh){
    for(const y in x){
       if(x[y] >= 10){
           tempTotal+=x[y].temp
        }
    }
}
console.log(tempTotal)

    