import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    declarations: [
      AppComponent      
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }