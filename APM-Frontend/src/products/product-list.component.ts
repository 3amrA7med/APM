import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product-service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
    //,providers: [ProductService]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    filteredProducts: IProduct[];
    products: IProduct[];
    _listFilter: string ;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = (this._listFilter)? this.performFilter(this.listFilter):this.products;
    }
    constructor(private productService:ProductService)   {
        this.listFilter = '';
    }
    ngOnInit(): void {
        this.products = this.productService.getProducts();
        // because constructor is executed before OnInit lifecycle hook
        this.filteredProducts = this.products; 
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy : string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
    }

    onRatingClicked(message: string): void{
        this.pageTitle = message;
    }
}