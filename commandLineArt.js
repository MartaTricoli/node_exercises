const figlet = require("figlet");

figlet("Marta Tricoli", (error, data) => {
    if (error) {
        console.log("Error!");
        console.log(error);
        return
    }
    console.log(data);
});
