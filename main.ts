import clsStringLibrary from "./src/StringLibrary";

function main(): void {
  const obj1 = new clsStringLibrary();

 


  console.log("lower First Letter of each words are :", clsStringLibrary.LowerFirsrLetterEachWord("HELLO NADER HOW ARE YOU"));

  console.log("lower all Letters are :", clsStringLibrary.lowerAllString("HELLO NADER HOW ARE YOU"));

  //upperAllString

  console.log("upper all Letters are :", obj1.upperAllString());

  console.log("invertCharacterCase The Result of a is Upper\t", clsStringLibrary.invertCharacterCase("a"))

  console.log("invertCharacterCase The Result is A Lower\t", clsStringLibrary.invertCharacterCase('A'))

  console.log("invertAllStringCase The Result is hELLO nADER hOW aRE yOU\t", clsStringLibrary.invertAllStringCase("Hello Nader How Are You"))

console.log("countLetterIsMutchCase Yes  ", clsStringLibrary.countLetterIsMutchCase("Mohammed Abu-Hadhoud Programming Advice",'m',true))

console.log("countLetterIsMutchCase No  ", clsStringLibrary.countLetterIsMutchCase("Mohammed Abu-Hadhoud Programming Advice",'m',false))
}

main();
