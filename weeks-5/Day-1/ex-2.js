const prms = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('suces');
    },3000);
})

prms.then(res=>console.log(res))