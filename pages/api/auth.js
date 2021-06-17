import { withIronSession } from "next-iron-session";
import bcrypt from "bcrypt";
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

const VALID_EMAIL = "masudzayyan@gmail.com";
const HASH_ADMIN = serverRuntimeConfig.hashAdmin

export default withIronSession(
    async (req, res) => {
        if (req.method === "POST") {
            const { email, password } = req.body;
            var authState;
            bcrypt.compare(password, HASH_ADMIN, (err, result)=> {
                if (err) {
                    return res.status(500).send("Something wrong with the password or out server just blabbing");
                }
                if (email === VALID_EMAIL && result) {
                    req.session.set("user", { email });
                    req.session.save().then(() => {
                        return res.status(201).send("You are clear to go Sir/Madam/orWhateverYourGenderIs No Judging");
                    });
                }else {
                    console.log(email === VALID_EMAIL)
                    console.log(authState)
                    return res.status(403).send("Invalid Creds");
                }
            })
        } else {
            return res.status(405).send("Only get requests. Just don't come here from the browser");
        }
    },
    {
        cookieName: "SYEDZAYYAN",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production" ? true : false
        },
        password: process.env.APPLICATION_SECRET
    }
);
