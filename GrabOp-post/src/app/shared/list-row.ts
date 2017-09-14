/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input} from "@angular/core";



@Component({
  selector:'list-row',
  template:`
<div>     
      
      <li><span>{{tiitle}}</span> <span>{{total}}</span></li>
                
            

</div>
`
})
export class ListRow implements OnInit{
  @Input() my_item:any;
  size:number= 256;
  title:string;
  total:number
  tiitle:string;
  constructor(){

  }

  ngOnInit():void{

  }

  loadServices():void{

  }

}
