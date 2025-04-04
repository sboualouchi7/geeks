const func = () => {
    try {
        console.log("starting the try block")
        //Unexisting variable
        hello
        //not accessed if there is an error with the above code
        console.log("finishing the try block")
    } catch (err) {
        console.log("starting the catch block")
        console.log(err)
    } finally {
        console.log("Function done")
    }
}

func()