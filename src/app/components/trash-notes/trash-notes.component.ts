import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  trashList:any;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllTrashNotes();
  }
  getAllTrashNotes(){
    this.note.isTrash().subscribe((response:any)=>{
      console.log(response.data);
      this.trashList=response.data;
    })
  }

}
