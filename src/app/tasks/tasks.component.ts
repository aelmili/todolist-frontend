import { Component, OnInit } from '@angular/core';
import { Configuration } from '../app.constants';
import { DataService } from '../../shared/services/data.service';
import { Task } from '../../shared/models/task';

@Component({
  selector: 'app-tasks',
  providers: [ DataService, Configuration],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  public tasks;
  
  constructor(private _dataService: DataService) { }

    ngOnInit() {
        this.getAllTasks();
    }

    private getAllTasks(): void {
        this._dataService
            .GetAllTasks()
            .subscribe((data:Task[]) => this.tasks = data,
                error => console.log(error),
                () => console.log('Loading tasks list complete'));
    }
}
