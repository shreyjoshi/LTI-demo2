import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem ,copyArrayItem} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ltidemo1';
  items =[
  	'Join',
  	'Sort',
  	'Select',
  	'Update',
  	'Insert'
  ];

  alteArtists =[];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(event.previousContainer.data,event.container.data, 
        event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
  }

}
