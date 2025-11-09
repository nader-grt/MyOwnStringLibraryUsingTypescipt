import clsString  from "./src/LibraryString.js"






function main(): void {
    console.log("Hello, World!");

    const myString1 =  new clsString();
    const myString2 =  new clsString("Hello from clsString!");

    console.log("myString1 value:", myString1.getValue());
    console.log("myString2 value:", myString2.getValue());

}

main();