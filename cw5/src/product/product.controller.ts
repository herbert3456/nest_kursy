import { Controller,Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { get } from 'http';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}
    @Get()
    async getProducts(){
        return this.productService.getProducts();
    }
}
