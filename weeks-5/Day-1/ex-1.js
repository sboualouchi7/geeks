function compareToTen(x){
    return new Promise((resolve,reject)=>{
        if(x<10){
            resolve(`${x} is less than 10`)
        }else{
            reject(`${x} is greater than 10`)
        }
    })
}

compareToTen(16)
.then(res=>console.log(res))
.catch(err=>console.log(err))