/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input} from "@angular/core";



@Component({
  selector:'members-list',
  template:`
<div>     
      <div class="card-{{size}}">
      <div>Members list</div>
      <h4><span>{{title}}</span> <span>{{total}}</span></h4>
                
            </div>

</div>
`
})
export class MembersList implements OnInit{
  @Input() my_type:string
  size:number= 256;
  title:string;
  total:number
  constructor(){

  }

  ngOnInit():void{

    if(this.my_type=='recommended'){
        this.title='Services Recommended by:'
    }else {
      this.title='Alliance Members:'
    }
  }

  loadServices():void{

  }

}
