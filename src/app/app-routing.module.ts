import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FindEmailComponent } from './components/find-email/find-email.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { AuthenticationGuard } from './authentication.guard';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './components/trash-notes/trash-notes.component';

const routes: Routes = [
  {path:"register",component:RegistrationComponent},
  {path:"sign-in",component:SignInComponent},
  {path:"find-email",component:FindEmailComponent},
  {path:"reset-password/:token",component:ResetPasswordComponent},

  {path:"dashboard",component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:"notes",component:GetAllNotesComponent},
    {path:"archiveNotes",component:ArchiveNotesComponent},
    {path:"trashNotes",component:TrashNotesComponent},
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
