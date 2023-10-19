import asyncHandler from "express-async-handler";
import { NoPasswordUserSchema, UserSchema } from "../schemas/User";
import * as authService from "../services/authService";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.sendStatus(403);
        return;
    }

    const user = await authService.findByUsername(username);
    if (user === null) {
        res.sendStatus(403);
        return;
    }

    bcrypt.compare(password, user.password, async (err, result) => {
        if (err || !result) {
            res.sendStatus(403);
        } else {
            try {
                const token = jwt.sign(
                    NoPasswordUserSchema.parse(user),
                    process.env.JWT_SECRET as string,
                );
                res.json({ token });
            } catch (er) {
                next(err);
            }
        }
    });
});

export const signup = asyncHandler(async (req, res, next) => {
    const { username, password, role } = req.body;
    if (!username || !password) {
        res.sendStatus(403);
        return;
    }
    const user = await authService.findByUsername(username);
    if (user !== null) {
        res.status(409).json({
            status: res.statusCode,
            errors: "username already exists",
        });
        return;
    }

    bcrypt.hash(password, 10, async (err, hashedPassword) => {
        if (err) {
            res.sendStatus(403);
        } else {
            try {
                await authService.createNewUser(
                    UserSchema.parse({
                        username,
                        password: hashedPassword,
                        role,
                    }),
                );
                res.sendStatus(201);
            } catch (err) {
                next(err);
            }
        }
    });
});
