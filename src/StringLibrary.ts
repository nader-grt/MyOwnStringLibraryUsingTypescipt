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

    public static CountWords(str: string): number {
       // str = str === undefined ? this._value : str;
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
        console.log("count is ", count);
        return count;
    }

    public  CountWords(): number {
         const strNew = this.getValue();
        // const tempObj = new clsLibraryString(strNew);
        // console.log("inside function STATIC, object:", obj, "value:", strNew);
     //   console.log("type of obj:", typeof obj,"type of method:", typeof obj.CountWords);
      //  obj._value = "just to try every thing ok nader"
     
     //   return this.CountWords(this._value);
        return clsStringLibrary.CountWords(this._value); // ✅ call static method
    }
}
