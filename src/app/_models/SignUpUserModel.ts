export class SignUpUserModel {

    // First Name of the user.
    private firstName: string;
    public get FirstName(): string {
        return this.firstName;
    }
    public set FirstName(v: string) {
        this.firstName = v;
    }

    // Last Name of the user.
    private lastName: string;
    public get LastName(): string {
        return this.lastName;
    }
    public set LastName(v: string) {
        this.lastName = v;
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
}
