//A, E, I, O, U
// let letter: string = 'A';
export default class clsStringLibrary {
  private _value: string;

  constructor(value?: string) {
    this._value = value || "";
  }

  public getValue(): string {
    return this._value;
  }

  public setValue(value: string): void {
    this._value = value;
  }

  // public CountWords(): number;
  // public CountWords(str: string): number;

  private static IsVOWELetter(char: string): boolean {
    if (char.length !== 1 || char === undefined) return false;
    if (
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U" ||
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      return true;
    }
    return false;
  }

  public static CountWords(str: string): number {
    if (!str) return 0;

    let count = 0;
    let pos = 0;
    let sword = "";
    let separator = " ";

    while ((pos = str.indexOf(separator)) !== -1) {
      sword = str.substring(0, pos);
      if (sword !== "") count++;
      str = str.substring(pos + separator.length);
    }
    if (str !== "") count++;

    return count;
  }

  public CountWords(): number {
    const strNew = this.getValue();

    return clsStringLibrary.CountWords(this._value);
  }

  public static CountVowels(str: string): number {
    let count: number = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.IsVOWELetter(str[i])) {
        count++;
      }
    }

    return count;
  }

  public CountVowels(): number {
    return clsStringLibrary.CountVowels(this._value);
  }

  public static UpperEachWord(str: string): string {
    let isExistSpace: boolean = true;
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " " && isExistSpace) {
        result += str[i].toUpperCase();
      } else {
        result += str[i];
      }

      isExistSpace = str[i] === " ";
    }
    return result;
  }

  public UpperEachWord(): string {
    return clsStringLibrary.UpperEachWord(this._value);
  }
}
