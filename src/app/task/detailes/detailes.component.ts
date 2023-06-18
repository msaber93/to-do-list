import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskSharedService } from '../task-shared.service';


@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.css']
})
export class DetailesComponent implements OnInit {

  task?: {
    id: string;
    name: string;
    time: string;
    date: string;
    textarea: string;
  };
id: any;
  
  constructor (private route : ActivatedRoute, public taskSharedService: TaskSharedService) {}

  ngOnInit() {
    let taskID = this.route.snapshot.params['id'];
    console.log(taskID);

    this.task = this.taskSharedService.tasks.find(task => task.id === taskID);
    console.log(this.task);
  }

  
}
