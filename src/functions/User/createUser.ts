import userSchema from "../../database/Schemas/userSchema";

export class createUser {
    idU: string;
    email: string;
    username: string;
    password: string;
    constructor({ idU, email, username, password }: { idU: string, email: string, username: string, password: string }) {
        this.idU = idU;
        this.email = email;
        this.username = username;
        this.password = password;
    };

    async create() {
        try {
            await userSchema.create({
                idU: this.idU,
                email: this.email,
                password: this.password,
                username:this.username,
            });
        } catch (err) {
            console.log(err);
        };
    };
};