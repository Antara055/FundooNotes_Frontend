import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  showIcons:boolean=true;
  @Input() notesArraylist: any
  @Output() changeColorOfNote = new EventEmitter<any>();  
  @Output() autorefreshEvent = new EventEmitter<any>(); 
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
  constructor(private note: NoteService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.notesArraylist);
  }
  setColor(noteColor:any){
    console.log(this.notesArraylist.color);
    let data={
      id:this.notesArraylist._id,
      color:noteColor
    }
    this.note.updateNotes(data).subscribe((response:any)=>{
      console.log(response);
      this.changeColorOfNote.emit(noteColor);
    })
    window.location.reload();
  }
  archiveNote() {
    console.log(this.notesArraylist._id);
    let data = { id: this.notesArraylist._id }
    this.note.archiveNotes(data).subscribe((response: any) => {
      console.log(response);
      this.autorefreshEvent.emit(response);
      this.snackbar.open('Note Archived Successfully !','',{
        duration: 2000,
      });
    })
    window.location.reload();
  }
  trashNote(){
    let data={id:this.notesArraylist._id}
    this.note.trashNotes(data).subscribe((response: any)=>{
      console.log(response);
    })
    window.location.reload();
  }
  delete(){
    let data={
      id:this.notesArraylist._id
    }
    console.log(data)
     this.note.deleteNotes(data).subscribe((response:any)=>{
      console.log(response)
    }) 
  }
  
}
