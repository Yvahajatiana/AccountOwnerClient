import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { Owner } from 'src/app/_interfaces/owner.model';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  public owners: Owner[];
  constructor(private repository: RepositoryService) { }

  ngOnInit() {
    this.getOwners();
  }

  public getOwners() {
    const apiUrl = 'api/owner';
    this.repository.getData(apiUrl)
    .subscribe(res => {
      this.owners = res as Owner[];
    });
    console.log(apiUrl);
  }
}
