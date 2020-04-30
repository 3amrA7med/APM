import { Component, OnInit } from '@angular/core';
import { Product } from './product';
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
    errorMessage: string ;
    filteredProducts: Product[];
    products: Product[];
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
        this.productService.getProducts().subscribe({
            next: products =>{ 
                this.products = products;
                console.log("Inside on init");
                console.log(this.products);
                // because constructor is executed before OnInit lifecycle hook
                this.filteredProducts = this.products; 
            },
            error: err => this.errorMessage = err
        });
        
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy : string): Product[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:Product) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
    }

    onRatingClicked(message: string): void{
        this.pageTitle = message;
    }
}