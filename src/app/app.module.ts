import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddAutoComponent } from './components/add-auto/add-auto.component';
import { ListAutoComponent } from './components/list-auto/list-auto.component';
import { ListFilterPipe } from './services/listerfilter.service';
import { HomeComponent } from './components/home/home.component';

// import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    AddAutoComponent,
    ListAutoComponent,
    ListFilterPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgSelectModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
