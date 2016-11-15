import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://localhost:8080/todolist-web/";
    public ApiUrl: string = this.Server + "api/";
}