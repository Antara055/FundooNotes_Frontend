import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  noteList:any
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getallnotes()
  }

  //for auto refresh
  messageRecieved(e:any) {
    this.getallnotes()
  }

getallnotes(){
  this.note.getAllNotes().subscribe((response:any)=>{
    console.log(response.data);
    this.noteList=response.data.reverse();
  })
}
}
