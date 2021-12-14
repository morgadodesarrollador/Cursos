import { IUser } from "../db/interfaces/IUser";
import jwt from "jsonwebtoken";

class JWT {
    private secretKey = process.env.SECRET_KEY || "clave_secreta" ;
    //Información del payload --> (userData, expiración (seg), secretKey)
    sign(data: IUser, expire = 60 ): string {
        return jwt.sign(
            { user: data },
            this.secretKey, 
            { expiresIn: expire }
            );
    }
}

export default JWT;