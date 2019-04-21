import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-account-list',
  templateUrl: './owner-account-list.component.html',
  styleUrls: ['./owner-account-list.component.css']
})
export class OwnerAccountListComponent implements OnInit {

  @Input() public accounts: Account[];
  constructor() { }

  ngOnInit() {
  }

}
