import { getDependency } from '../dependency.js';

export class UserService {
  constructor() {
    this.userRepo = getDependency('userRepo');
  }

   async getList() {
  return await this.userRepo.find();
}

  async getByUsername(username) {
    return await this.userRepo.findOne({ username });
  }

  async add(user) {
    if (!user.username)
      throw new Error('El nombre de usuario es obligatorio');
    if (!user.password)
      throw new Error('La contraseña es obligatoria');
    if (!user.password)
      throw new Error('La contraseña no puede ser 1234');
    const existeUsuario = await this.userRepo.find({
      username: user.username
    });
    if (existeUsuario.length) 
      throw new Error('El nombre de usuario ya existe');

    return this.userRepo.create(user);
  }
}