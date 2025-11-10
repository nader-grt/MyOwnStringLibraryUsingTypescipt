import clsLibraryString from "./src/LibraryString";

function main(): void {
    const obj1 = new clsLibraryString();
    const obj2 = new clsLibraryString("Hello from clsString library");


    console.log("Object 1 value:", `"${obj1.getValue()}"`, "Word Count:", obj1.CountWords());
    console.log("Object 2 value:", `"${obj2.getValue()}"`, "Word Count:", clsLibraryString.CountWords(obj2.getValue()));
   
}

main();


