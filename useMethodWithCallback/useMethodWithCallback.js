import * as fs from "node:fs";

const data = "Quando sognerai di un mondo che non è mai esistito o di uno che non esisterà mai e in cui sei di nuovo felice, vorrà dire che ti sei arreso. Capisci? E tu non ti puoi arrendere. Io non te lo permetterò."

fs.writeFile("prova.txt", data, { encoding: "utf-8" }, error => {
   if (error) {
      console.error(error);
      return;
   }

   console.log("File has been written successfully!");
});
