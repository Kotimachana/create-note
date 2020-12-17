import { Component, OnInit } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';

export class Quicknotes {
  title: String;
  content: String;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  titleModel: String;
  contentModel: String;
  quicknotes = [];
  notedata: boolean = false;

  constructor(public snackBar: MatSnackBar) {
    this.titleModel = '';
    this.contentModel = '';
  }

  ngOnInit(): void {
    console.log(this.quicknotes.length)
    if (this.quicknotes.length > 0) {
      this.notedata = true
    } else {
      this.notedata = false
    }
  }
  createQuicknotes() {
    console.log(this.titleModel.length);
    console.log(this.contentModel);
    if (this.titleModel.length > 0 && this.contentModel.length > 0) {

      const newQuicknotes: Quicknotes = {
        title: this.titleModel,
        content: this.contentModel,
      };
      this.notedata = true
      this.quicknotes.push(newQuicknotes);
      this.titleModel = this.contentModel = '';
    } else {
      this.snackBar.open("Please Fill Title and Content fields", '', {
        duration: 3000,
        panelClass: ['blue-snackbar'],
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }
}
