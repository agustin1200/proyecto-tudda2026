import { configureLoginRouter } from './login_router.js';
import { configureUserRouter } from './user_router.js';
import { configureProductRouter } from './product_router.js';

export function configureRouter(router) {
  console.log('Configurando rutas principales');

  configureLoginRouter(router);
  configureUserRouter(router);
  configureProductRouter(router);
}
