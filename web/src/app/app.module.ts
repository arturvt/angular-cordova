import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PainelComponent } from './painel/painel.component';
import { DeviceContentComponent } from './device-content/device-content.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { HeaderComponent } from './header/header.component';
import { ExternalUrlDirective } from './external-url.directive';
import { HrefInterceptorService } from './http-interceptors/href-interceptor.service';
import { DefaultInterceptor } from './http-interceptors/default.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LinksComponent } from './views/links/links.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './inmemory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PainelComponent,
    DeviceContentComponent,
    CreateItemComponent,
    HeaderComponent,
    ExternalUrlDirective,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [
    HrefInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
