import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { QuestionPaperComponent } from './student/questionpaper/questionpaper.component';




const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  { path: 'student/questionpaper', component: QuestionPaperComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
