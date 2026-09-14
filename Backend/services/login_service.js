import { getDependency } from '../dependency.js';
import bcrypt from 'bcrypt';


export class LoginService {
    constructor() {
        this.userService = getDependency('userService');
        this.sessionService = getDependency('sessionService');
    }

  async login(data) {
    if (!data.username)
        throw new Error('El nombre de usuario es obligatorio');
    if (!data.password)
        throw new Error('La contraseña es obligatoria');
    
    const user = await this.userService.getByUsername(data.username);
    if (!user)
        throw new Error('Usuario o contraseña incorrectos');
    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch)
        throw new Error('Usuario o contraseña incorrectos');
    const seccion = await this.sessionService.createForUser(user);

    return {
        authorizationToken: seccion.authorizationToken,
        username: user.username,
        displayName: user.displayName,
        role : seccion.role,
    };
  }    
}