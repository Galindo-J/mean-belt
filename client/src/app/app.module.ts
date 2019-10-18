import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewComponent } from './view/view.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    CreateComponent,
    NotFoundComponent,
    ViewComponent,
    IndexComponent,
    AddComponent, 
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
