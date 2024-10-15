export class RegisterDto {
    private constructor(
        public name: string,
        public email: string,
        public password: string,
        public img?: string,
    ){

    }

    static create(object: {[key: string]: any}): [string?, RegisterDto?] {
        const { name, email, password, img } = object;
        if (!name || !email || !password) {
            return ['Missing data', undefined];
        }
        return [undefined, new RegisterDto(name, email, password, img)];
    }
}