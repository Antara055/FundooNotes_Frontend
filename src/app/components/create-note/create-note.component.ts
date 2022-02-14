import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {MatCardModule} from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createNotesForm!: FormGroup;
  submitted = false; 
  card: boolean = false;
  token:any;
  
  @Output() autorefreshEvent = new EventEmitter<string>();
  constructor(private formBuilder: FormBuilder,private note:NoteService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.createNotesForm = this.formBuilder.group({
      title: [''],
      description: [''],
      color:['']
  });
}
cardSwap() {
    //console.log(this.card);
     return this.card === true ? (this.card = false) : (this.card = true); //condition operator
  }

onSubmit() { 
    this.submitted=true;
      if(this.createNotesForm.valid)
      {
        console.log(this.createNotesForm.value);
        let reqData={
         title:this.createNotesForm.value.title,
         description:this.createNotesForm.value.description
      }
       this.note.createNote(reqData).subscribe((response:any)=>{
         console.log(response)
         this.autorefreshEvent.emit(response);
         this.snackbar.open('Note created Successfully !','',{
        duration: 2000,
      });
       })
       //window.location.reload();
      }
      else
      {
        console.log("invalid");
      }
    }

}
