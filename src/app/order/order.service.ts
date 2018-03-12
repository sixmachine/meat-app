import { Injectable } from "@angular/core";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService {

    constructor(private carteService: ShoppingCartService){

    }

    cartItems(): CartItem[] {
        return this.carteService.items;
    }

    increaseQty(item: CartItem){
        this.carteService.increaseQty(item);
    }

    decreaseQty(item: CartItem){
        this.carteService.decreaseQty(item);
    }

    remove(item: CartItem){
        this.carteService.removeItem(item)
    }

}