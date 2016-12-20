import { CentresService } from './centre/centres.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CentreComponent } from './centre/centre.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'centres',
    pathMatch: 'full'
  },
  {
    path: 'centres',
    component: CentreComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CentreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CentresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
