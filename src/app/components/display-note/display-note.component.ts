import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() notesArray: any; //input decorator (child of getallnotes)
  title: any;
  description: any;
  
  constructor(public dialog: MatDialog) { } 

  ngOnInit(): void {
    console.log(this.notesArray)
  }

  openDialog(reqData: any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '750px',
      height:'250px',
      data: reqData,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.title = result;
      this.description=result;
    });
  } 
  //for color change
  messageRecievedFromNote(e:any){
    console.log(e);
  }
}

