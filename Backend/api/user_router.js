import { getDependency } from '../dependency.js';
import checkRoleMiddleware from '../middleware/check_role_middleware.js';

export function configureUserRouter(router) {
  console.log('Configurando rutas de usuario');

  router.get('/users', checkRoleMiddleware(['admin']), async (req, res) => {
    const userService = getDependency('userService');
    const users = await userService.getList();

    res.json(users.map(user => ({
      username: user.username,
      displayName: user.displayName,
      email: user.email,
      roles: user.roles
    })));
  });

  router.post('/users', checkRoleMiddleware(['admin']), async (req, res) => {
    const userService = getDependency('userService');
    const newUser = await userService.add(req.body);

    res.json(newUser);
  });
}
