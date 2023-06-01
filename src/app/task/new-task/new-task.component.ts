import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { LocalstorgeService } from 'src/app/services/localstorge.service';
import { TaskSharedService } from '../task-shared.service';



@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {


constructor (private localStorage : LocalstorgeService, private taskSharedService : TaskSharedService) {}



  addTask(name: any, time: any, date: any, text: any) {
    this.taskSharedService.tasks.push({
      id: this.uid(), name: name, time: time,
      date: date,
      textarea: text
    });
    this.localStorage.setLocalStorageTask('task', this.taskSharedService.tasks);
  }

  uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }



  taskForm = new FormGroup ({
    'userData' : new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'time' : new FormControl (null, Validators.required),
      'date' : new FormControl (null, [Validators.required , this.dateValidator])
    })

  });

  dateValidator(control: FormControl): ValidationErrors | null  {
    const currentDate: Date = new Date();
    const selectedDate: Date = new Date(control.value);
    return selectedDate <= currentDate ? { pastDate: true } : null;
  }

  onSubmit() {
    console.log(this.taskForm);
  }

}
