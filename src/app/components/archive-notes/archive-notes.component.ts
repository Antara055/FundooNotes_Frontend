import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  archiveList:any;
  token:any;
  id:any;
 
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    //this.id=this.note._id
    this.getAllArchiveNotes();
  }
  getAllArchiveNotes(){
    let data = {
      
    }
    this.note.archiveNotes(data).subscribe((response:any)=>{
      console.log(response.data);
      this.archiveList=response.data;
    })
  }

}


  