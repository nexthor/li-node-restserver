import { Request, Response } from 'express';
import { RegisterDto } from '../../domain';

export class AuthController {
    constructor() {}

    registerUser = (req: Request, res: Response) => {
        const [error, registerDto] = RegisterDto.create(req.body);
        if (error) res.status(400).json({ message: error });

        res.json(registerDto);
    }

    loginUser = (req: Request, res: Response) => {
        res.json({ message: 'Login AuthController' });
    }
}