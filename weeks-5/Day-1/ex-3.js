const suces = Promise.resolve(3)
suces.then(val=>console.log(val))


const err = Promise.reject("bool")
err.catch(er=>console.log(er))