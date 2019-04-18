import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public errorMessage = '';
  constructor(private router: Router) { }

  public HandleError(error: HttpErrorResponse) {
    if (error.status === 500) {
      this.handle500Error(error);
    } else if (error.status === 404) {
      this.handle404Error(error);
    } else {
      this.handleOtherError(error);
    }
  }
  private handle500Error(error: HttpErrorResponse) {
    this.createErorMessage(error);
    this.router.navigate(['/500']);
  }

  private handle404Error(error: HttpErrorResponse) {
    this.createErorMessage(error);
    this.router.navigate(['/404']);
  }

  private handleOtherError(error: HttpErrorResponse) {
    this.createErorMessage(error);
  }

  private createErorMessage(error: HttpErrorResponse) {
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
