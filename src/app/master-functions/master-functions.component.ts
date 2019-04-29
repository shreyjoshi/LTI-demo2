import { Component, OnInit } from '@angular/core';
import { MasterComponent } from '../master-component';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-master-functions',
  templateUrl: './master-functions.component.html',
  styleUrls: ['./master-functions.component.css'],

})
export class MasterFunctionsComponent implements OnInit {
  selectedMasterComponent: MasterComponent;
    masterComponents: MasterComponent[] = [
      {
    componentId :1,
    componentName :"Input File",
    componentImageUrl : "http://image",
    componentShape :"Cylindrical"  
    }, 
    {
      componentId :2,
      componentName :"Join",
      componentImageUrl : "http://image",
      componentShape :"Triangle"  
      },
      {
        componentId :3,
        componentName :"Output File",
        componentImageUrl : "http://image",
        componentShape :"Cylindrical"  
        }];
  constructor() { }

  ngOnInit() {


  }
  
onSelect(masterComp: MasterComponent): void {
    this.selectedMasterComponent = masterComp;
  }

allowDrop(ev :DragEvent) {
    ev.preventDefault();
  }
  
  
drag(ev) {
  ev.dataTransfer.effectAllowed ="copy";
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id);
    console.log(ev);
  }
  
   drop(ev:DragEvent) {
    console.log(ev);
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    let element = event.target as HTMLDivElement;   
    let copy = document.getElementById(data).cloneNode(true);
    copy.id=111;
    element.appendChild(copy);
    element.innerHTML = element.innerHTML  + " </br>  </br>  </br>";
    
  }

}
