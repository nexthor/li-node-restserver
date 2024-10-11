import { Request, Response } from 'express';

export class AuthController {
    constructor() {}

    registerUser = async(req: Request, res: Response) => {
        res.json({ message: 'Register AuthController' });
    }

    loginUser = async(req: Request, res: Response) => {
        res.json({ message: 'Login AuthController' });
    }
}