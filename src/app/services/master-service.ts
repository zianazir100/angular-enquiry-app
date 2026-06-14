import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  root = 'https://api.freeprojectapi.com/api/Enquiry/';
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(this.root + 'get-categories');
  }
  getStatus() {
    return this.http.get(this.root + 'get-statuses');
  }

  submitSingleEnquiry(enquiry: any) {
    return this.http.post(this.root + 'create-enquiry', enquiry);
  }
}
