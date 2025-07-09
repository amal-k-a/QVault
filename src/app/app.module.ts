// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import this
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // your login component

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    // other components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule  // ✅ Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
