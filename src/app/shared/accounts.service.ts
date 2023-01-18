import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService{
    accounts  = [
        {
          name: 'Master account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden account',
          status: 'unknown'
        }
      ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService : LoggingService){

    }

    addAccount(name: string, status: string) : void {
        this.accounts.push({
            name: name,
            status: status
        })
        this.loggingService.logStatusChange(status);

    }

    updateStatus(id: number, newStatus: string): void{
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
    }
}
