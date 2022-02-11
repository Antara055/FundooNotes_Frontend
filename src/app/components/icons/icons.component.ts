import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notesArraylist: any
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    console.log(this.notesArraylist);
  }

  archiveNote() {
    console.log(this.notesArraylist._id);
    let data = { id: this.notesArraylist._id }
    this.note.archiveNotes(data).subscribe((response: any) => {
      console.log(response);
    })
  }
  trashNote(){
    let data={id:this.notesArraylist._id}
    this.note.trashNotes(data).subscribe((response: any)=>{
      console.log(response);
    })
  }
}
