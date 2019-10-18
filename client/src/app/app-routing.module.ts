import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products'},
  { path: 'products', component: IndexComponent},
  { path: 'products/:id/edit', component: EditComponent},
  { path: 'add/:id', component: AddComponent},
  { path: 'products/new', component: CreateComponent},
  { path: 'products/:id', component: ViewComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
