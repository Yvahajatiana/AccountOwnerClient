import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { Owner } from 'src/app/_interfaces/owner.model';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  public owners: Owner[];
  public errorMessage = '';
  constructor(private repository: RepositoryService,
              private errorHandler: ErrorHandlerService,
              private router: Router) { }

  ngOnInit() {
    this.getOwners();
  }

  public getOwners() {
    const apiUrl = 'api/owner';
    this.repository.getData(apiUrl)
    .subscribe(res => {
      this.owners = res as Owner[];
    }, error => {
      this.errorHandler.HandleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    });
    console.log(apiUrl);
  }

  public getOwnerDetails(id) {
    const detailsUrl = `/owner/details/${id}`;
    this.router.navigate([detailsUrl]);
  }
}
