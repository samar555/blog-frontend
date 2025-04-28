import { Component } from '@angular/core';
import { AdminHeaderComponent } from "../admin-header/admin-header.component";

@Component({
  selector: 'app-admin-add-catagory',
  imports: [],
  templateUrl: './admin-add-catagory.component.html',
  styleUrl: './admin-add-catagory.component.css'
})
export class AdminAddCatagoryComponent {
toogleAttribute:boolean=false;
 
  toggleField(event:any){
    console.log(event)
    if (event.key === 'Backspace') {
  
  this.toogleAttribute=true;
}
 
  }

}
