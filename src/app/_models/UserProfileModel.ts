export class UserProfileModel {

    private _fullName: string;
    public get fullName(): string {
        return this._fullName;
    }
    public set fullName(v: string) {
        this._fullName = v;
    }

    private _displayName: string;
    public get displayName(): string {
        return this._displayName;
    }
    public set displayName(v: string) {
        this._displayName = v;
    }


    private _password: string;
    public get password(): string {
        return this._password;
    }
    public set password(v: string) {
        this._password = v;
    }


    private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(v: string) {
        this._email = v;
    }


    private _hourlyRate: string;
    public get hourlyRate(): string {
        return this._hourlyRate;
    }
    public set hourlyRate(v: string) {
        this._hourlyRate = v;
    }


    private _country: string;
    public get country(): string {
        return this._country;
    }
    public set country(v: string) {
        this._country = v;
    }


    private _phoneNumber: string;
    public get phoneNumber(): string {
        return this._phoneNumber;
    }
    public set phoneNumber(v: string) {
        this._phoneNumber = v;
    }


    private _officialEmail : string;
    public get officialEmail(): string {
        return this._officialEmail;
    }
    public set officialEmail(v: string) {
        this._officialEmail = v;
    }

}
