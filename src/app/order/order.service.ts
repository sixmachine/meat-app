import { Injectable } from "@angular/core";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "./order.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { Http, RequestOptions, Headers } from "@angular/http";

import {MEAT_API} from '../app.api'

@Injectable()
export class OrderService {

    constructor(private carteService: ShoppingCartService, private http: Http){

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

    itemsValue(): number {
       return this.carteService.total()
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`, 
                    JSON.stringify(order), new RequestOptions({headers: headers}))
                    .map(response => response.json())
                    .map(order => order.id)
    }

    clear(): any {
        this.carteService.clear()
    }

}