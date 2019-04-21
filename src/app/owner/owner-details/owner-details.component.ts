import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Owner } from 'src/app/_interfaces/owner.model';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {

  public owner: Owner;
  public errorMessage = '';
  constructor(private repositoryService: RepositoryService,
              private router: Router, private activeRoute: ActivatedRoute,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getOwnerDetails();
  }

  public getOwnerDetails() {
    const id: string = this.activeRoute.snapshot.params.id;
    console.log(id);
    const apiUrl = `api/owner/${id}/account`;

    this.repositoryService.getData(apiUrl).subscribe( res => {
      console.log(res);
      this.owner = res as Owner;
      console.log(this.owner);
    }, error => {
      this.errorHandler.HandleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    });
  }
}
