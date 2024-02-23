const fs = require("node:fs");

const data = "Quando sognerai di un mondo che non è mai esistito o di uno che non esisterà mai e in cui sei di nuovo felice, vorrà dire che ti sei arreso. Capisci? E tu non ti puoi arrendere. Io non te lo permetterò."

fs.writeFile("./prova.txt", data, error => {
    if (error) {
        throw new Error("Error occurred!")
    }

    console.log("file updated!")
})
