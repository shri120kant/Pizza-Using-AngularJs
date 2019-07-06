import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza/pizza-detail/pizza-detail.component';
import { CartComponent } from './cart/cart.component';
import { PizzaDeleteComponent } from './pizza/pizza-delete/pizza-delete.component';

const routes: Routes = [
  {path:'pizza/',component:PizzaListComponent},
  {path:'pizza/:pizzaId',component:PizzaDetailComponent},
  { path: 'cart', component: CartComponent },
  {path: 'cart/delete', component: PizzaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
