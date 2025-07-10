import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentComponent } from './student/student.component';

import { QuestionPaperComponent } from './student/questionpaper/questionpaper.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,

    QuestionPaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
