import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { QuestionPaperComponent } from './student/questionpaper/questionpaper.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot/forgot.component';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default to login
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotPasswordComponent },

  { path: 'student', component: StudentComponent },
  { path: 'questionpaper', component: QuestionPaperComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
