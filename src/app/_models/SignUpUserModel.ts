export class SignUpUserModel {

    // First Name of the user.
    private fullName: string;
    public get FullName(): string {
        return this.fullName;
    }
    public set FullName(v: string) {
        this.fullName = v;
    }

    // Last Name of the user.
    private userName: string;
    public get UserName(): string {
        return this.userName;
    }
    public set UserName(v: string) {
        this.userName = v;
    }

    // Email of the user.
    private email: string;
    public get Email(): string {
        return this.email;
    }
    public set Email(v: string) {
        this.email = v;
    }

    // Password of user.
    private password: string;
    public get Password(): string {
        return this.password;
    }
    public set Password(v: string) {
        this.password = v;
    }

    // Country of user.
    private country: string;
    public get Country(): string {
        return this.country;
    }
    public set Country(v: string) {
        this.country = v;
    }

    // Phone number for user.
    private phoneNumber: string;
    public get PhoneNumber(): string {
        return this.phoneNumber;
    }
    public set PhoneNumber(v: string) {
        this.phoneNumber = v;
    }


    private workMail: string;
    public get WorkMail(): string {
        return this.workMail;
    }
    public set WorkMail(v: string) {
        this.workMail = v;
    }


    private workAddress: string;
    public get WorkAddress(): string {
        return this.workAddress;
    }
    public set WorkAddress(v: string) {
        this.workAddress = v;
    }
    
}
