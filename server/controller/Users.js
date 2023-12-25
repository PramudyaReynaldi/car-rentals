import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const registerUser = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if(!name || !email || !password || !confirmPassword) return res.status(400).json({ msg: "Semua kolom harus diisi!" });

    if(password !== confirmPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok!" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword
        });

        res.json({
            msg: "Register Success!",
        })
    } catch (error) {
        console.log(error);
    }
}