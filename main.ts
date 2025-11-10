import clsStringLibrary from "./src/StringLibrary";

function main(): void {
    const obj1 = new clsStringLibrary();
    const obj2 = new clsStringLibrary("Hello from clsString library");


    console.log("Object 1 value:", `"${obj1.getValue()}"`, "Word Count:", obj1.CountWords());
    console.log("Object 2 value:", `"${obj2.getValue()}"`, "Word Count:", clsStringLibrary.CountWords(obj2.getValue()));
   
}

main();


