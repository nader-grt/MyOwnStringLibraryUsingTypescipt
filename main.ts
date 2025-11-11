import clsStringLibrary from "./src/StringLibrary";

function main(): void {
  const obj1 = new clsStringLibrary();

  obj1.setValue("Hello With Typescript from clsString library");

  console.log(
    "String 1 of obj1 value:",
    `${obj1.getValue()}`,
    "\t\tWord Count:",
    obj1.CountWords()
  );
  console.log(
    "String 2 of obj2 value:",
    `Nader Chargui is learning TypeScript`,
    "\tWord Count:",
    clsStringLibrary.CountWords("Nader Chargui is learning TypeScript")
  );

  console.log(
    "String 2 of obj2 vowels are :",
    `Nader Chargui is learning TypeScript`,
    "\tCount vowels:",
    obj1.CountVowels()
  );

  console.log("\nupper words are :", clsStringLibrary.UpperEachWord("hello nader how are you"));
}

main();
