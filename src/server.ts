import app from "./app";
const port = process.env.PORT || 5000
console.log(port)
async function main(){

    try {
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`)

        })
        
    } catch (error) {
        console.log("Error occured in starting",error)
        process.exit(1);
    }
}
main();