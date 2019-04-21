import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { SharedModule } from '../shared/shared.module';
import { OwnerAccountListComponent } from './owner-account-list/owner-account-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'list', component: OwnerListComponent },
      { path: 'details/:id', component: OwnerDetailsComponent }
    ])
  ],
  declarations: [
    OwnerListComponent,
    OwnerDetailsComponent,
    OwnerAccountListComponent
  ]
})
export class OwnerModule { }