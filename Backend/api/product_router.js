import { getDependency } from '../dependency.js';
import checkRoleMiddleware from '../middleware/check_role_middleware.js';

export function configureProductRouter(router) {
  console.log('Configurando rutas de productos');

  router.get('/products', checkRoleMiddleware(['admin']), async (req, res) => {
    const productService = getDependency('productService');
    const products = await productService.getList();

    res.json(products);
  });

  router.get('/products/low-stock', checkRoleMiddleware(['admin']), async (req, res) => {
    const productService = getDependency('productService');
    const products = await productService.getLowStockList();

    res.json(products);
  });

  router.post('/products', checkRoleMiddleware(['admin']), async (req, res) => {
    const productService = getDependency('productService');
    const product = await productService.add(req.body);

    res.status(201).json(product);
  });

  router.patch('/products/:id/stock', checkRoleMiddleware(['admin']), async (req, res) => {
    const productService = getDependency('productService');
    const product = await productService.updateStock(
      req.params.id,
      req.body.quantity
    );

    res.json(product);
  });
}