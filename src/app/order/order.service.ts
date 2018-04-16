import { Injectable } from "@angular/core";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "./order.model";
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/map'
import { HttpClient } from "@angular/common/http";

import { MEAT_API } from '../app.api'

@Injectable()
export class OrderService {

    constructor(private carteService: ShoppingCartService, private http: HttpClient) {

    }

    cartItems(): CartItem[] {
        return this.carteService.items;
    }

    increaseQty(item: CartItem) {
        this.carteService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.carteService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.carteService.removeItem(item)
    }

    itemsValue(): number {
        return this.carteService.total()
    }

    checkOrder(order: Order): Observable<string> {
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
            .map(order => order.id)
    }

    clear(): any {
        this.carteService.clear()
    }

}