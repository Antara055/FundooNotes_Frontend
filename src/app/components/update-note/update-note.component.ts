import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  noteId:any;
  title:any;
  description:any;

  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public note: any, private notes: NoteService) { }

  ngOnInit(): void {
    console.log(this.note)
      this.title=this.note.title,
      this.description=this.note.description
    }
  onSubmit() { 
    let data = {
      id:this.note._id,
      title: this.title,
      description:this.description
    }
    this.notes.updateNotes(data).subscribe((response:any)=>{
      console.log(response)
    })
    this.dialogRef.close();
    window.location.reload();
  }
    onNoClick(): void {
      this.dialogRef.close();
    }
  }
