import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
})
export class OrderItemsComponent implements OnInit {


  
  @Input() items : CartItem []
  @Output() increaseQtyItem = new EventEmitter<CartItem>()
  @Output() decreaseQtyItem = new EventEmitter<CartItem>()
  @Output() removeItem = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem){
    this.increaseQtyItem.emit(item);
  }


  emitDecreaseQty(item: CartItem){
    this.decreaseQtyItem.emit(item);
  }


  emitRemove(item: CartItem){
    this.removeItem.emit(item);
  }

}
