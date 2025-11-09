export default class clsStringLibrary {

    private _value: string;


    //
     constructor(value?: string) {
        this._value = value || "";//// if value is undefined, use empty string
    }

    public getValue(): string {
        return this._value;
    }

    public setValue(value: string): void {
        this._value = value;
    }
}
