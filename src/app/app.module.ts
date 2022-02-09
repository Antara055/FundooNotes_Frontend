import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FindEmailComponent } from './components/find-email/find-email.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { IconsComponent } from './components/icons/icons.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SignInComponent,
    FindEmailComponent,
    ResetPasswordComponent,
    DashboardComponent,
    IconsComponent,
    CreateNoteComponent,
    DisplayNoteComponent,
    GetAllNotesComponent,
    UpdateNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
