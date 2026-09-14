import { getDependency } from '../dependency.js';

export class ProductService {
  constructor() {
    this.productRepo = getDependency('productRepo');
  }

  async getList() {
    return await this.productRepo.find().sort({ name: 1 });
  }

  async getLowStockList() {
    return await this.productRepo.find({
      $expr: { $lte: ['$stock', '$minimumStock'] }
    }).sort({ stock: 1 });
  }

  async add(product) {
    if (!product.name) {
      throw new Error('El nombre del producto es obligatorio');
    }

    if (!product.category) {
      throw new Error('La categoría es obligatoria');
    }

    if (product.price === undefined || product.price < 0) {
      throw new Error('El precio debe ser un número mayor o igual a cero');
    }

    if (product.stock === undefined || product.stock < 0) {
      throw new Error('El stock debe ser un número mayor o igual a cero');
    }

    if (product.minimumStock === undefined || product.minimumStock < 0) {
      throw new Error('El stock mínimo debe ser un número mayor o igual a cero');
    }

    const existingProduct = await this.productRepo.findOne({
      name: product.name
    });

    if (existingProduct) {
      throw new Error('Ya existe un producto con ese nombre');
    }

    return await this.productRepo.create(product);
  }

  async updateStock(id, quantity) {
    if (!Number.isInteger(quantity)) {
      throw new Error('La cantidad debe ser un número entero');
    }

    const product = await this.productRepo.findById(id);

    if (!product) {
      throw new Error('Producto no encontrado');
    }

    const newStock = product.stock + quantity;

    if (newStock < 0) {
      throw new Error('El stock no puede quedar en negativo');
    }

    product.stock = newStock;
    return await product.save();
  }
}