import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
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

  constructor(private formBuilder: FormBuilder,private note:NoteService) { }

  ngOnInit(): void {
    this.createNotesForm = this.formBuilder.group({
      title: [''],
      description: [''],
      color:['']
  });
}
cardSwap() {
    console.log(this.card);
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
       })
      }
      else
      {
        console.log("invalid");
      }
    }

}
