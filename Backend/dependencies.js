import { addDependency } from './dependency.js';

import { UserService } from './services/user_service.js';
import { LoginService } from './services/login_service.js';
import { SessionService } from './services/session_service.js';
import { ProductService } from './services/product_service.js';

import UserMongo from './mongo-db/user_mongo.js';
import SessionMongo from './mongo-db/session_mongo.js';
import ProductMongo from './mongo-db/product_mongo.js';

addDependency('userRepo', UserMongo);
addDependency('sessionRepo', SessionMongo);
addDependency('productRepo', ProductMongo);

addDependency('userService', new UserService());
addDependency('sessionService', new SessionService());
addDependency('loginService', new LoginService());
addDependency('productService', new ProductService());