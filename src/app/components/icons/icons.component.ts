import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatMenuModule } from '@angular/material/menu';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notesArraylist: any
  Colors=[
    {
      name: 'Red', colorcode: '#F28B82'
    },
    {
      name: 'Orange', colorcode: '#FBBC05'
    },
    {
      name: 'Dark Blue', colorcode: '#AECBFA'
    },
    {
      name: 'Pink', colorcode: '#FDCFE8'
    },
    {
      name: 'secondary-color-dark', colorcode: '#9933CC'
    },
    {
      name: 'pink lighten-1', colorcode: '#ec407a'
    },
    {
      name: 'Yellow', colorcode: '#FFFEA9'
    },
    {
      name: 'Light Green', colorcode: '#E4E978'
    },
    {
      name: 'Teal', colorcode: '#CDF0EA'
    },
    {
      name: 'Gray', colorcode: '#E8EAED'
    }
  ]
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    console.log(this.notesArraylist);
  }
  setColor(){
    
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
