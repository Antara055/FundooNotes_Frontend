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
  @Input() notesArray: any;
  title: any;
  description: any;
  
  constructor(public dialog: MatDialog) { } 

  ngOnInit(): void {
    console.log(this.notesArray)
  }
  openDialog(reqData: any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '500px',
      data: reqData,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.title = result;
      this.description=result;
    });
  } 
}

