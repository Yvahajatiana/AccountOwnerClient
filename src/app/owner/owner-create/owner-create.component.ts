import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Router } from '@angular/router';
import { OwnerForCreation } from 'src/app/_interfaces/ownerForCreation.model';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {

  public errorMessage = '';
  public ownerForm: FormGroup;
  constructor(private repository: RepositoryService,
              private errorHandler: ErrorHandlerService,
              private router: Router) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public validateControl(controlName: string) {
    if (this.ownerForm.controls[controlName].invalid && this.ownerForm.controls[controlName].touched) {
      return true;
    }

    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.ownerForm.controls[controlName].hasError(errorName)) {
      return true;
    }

    return false;
  }

  public executeDatePicker(event: any) {
    this.ownerForm.patchValue({ dateOfBirth: event });
  }

  public createOwner(ownerFormValue: any) {
    if (this.ownerForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  }

  private executeOwnerCreation(ownerFormValue: any) {
    const owner: OwnerForCreation = {
      name: ownerFormValue.name,
      dateOfBirth: ownerFormValue.dateOfBirth,
      address: ownerFormValue.address
    };

    const apiUrl = 'api/owner';
    this.repository.create(apiUrl, owner).subscribe( res => {
      $('#successModal').modal();
    }, error => {
      this.errorHandler.HandleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    });
  }

  public redirectToOwnerList() {
    this.router.navigate(['/owner/list']);
  }
}
