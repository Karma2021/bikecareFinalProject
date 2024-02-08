const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require('../models/adminModel')


const registerAdmin = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const adminAvailable = await Admin.findOne({ email });
    if (adminAvailable) {
        res.status(400);
        throw new Error("Admin already registered!");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log(`Admin created ${admin}`);
    if (admin) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("admin data is not valid");
    }
    res.json({ message: "Register the admin" });
});


const loginAdmin = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const admin = await Admin.findOne({ username });
    //compare password with hashedpassword
    if (admin && (await bcrypt.compare(password, admin.password))) {
        const accessToken = jwt.sign(
            {
                admin: {
                    username: admin.username,
                    email: admin.email,
                    id: admin.id,
                    role: admin.role
                },
            },
            process.env.ACCESS_TOKEN_SECERT,
            { expiresIn: "15m" }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("username or password is not valid");
    }
});

module.exports = { registerAdmin, loginAdmin };

