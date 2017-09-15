import {Injectable, TemplateRef, Component} from '@angular/core';
import {MdDialog, MdDialogRef} from "@angular/material";
import {Router} from "@angular/router";

@Injectable()
export class ModalWindowService {
  private dialogRef:MdDialogRef<Component>;

  constructor(public dialog:MdDialog, private route:Router) { }

  openWindow(comp:any, callBack?:Function){


    if(this.dialogRef){
      this.dialogRef.close();
      this.dialogRef = null;

    }

   this.dialogRef  = this.dialog.open(comp, {
      height: '400px',
      width: '600px',
    });

    this.dialogRef.afterClosed().subscribe(result => {
     if(callBack)callBack(result || 'probably outside click');
      this.dialogRef = null;
    });

  }

  closeWindow(closeParams?:any):void{
    this.dialogRef.close(closeParams);
    this.dialogRef = null;
  }

}
