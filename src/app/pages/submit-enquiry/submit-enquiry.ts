import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-submit-enquiry',
  imports: [FormsModule],
  templateUrl: './submit-enquiry.html',
  styleUrl: './submit-enquiry.css',
})
export class SubmitEnquiry implements OnInit {
  masterService = inject(MasterService);

  statusList: any[] = [];
  categoriesList: any[] = [];

  enquiryObj: any = {
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    message: '',
    categoryId: 0,
    statusId: 0,
    enquiryType: '',
    isConverted: false,
    enquiryDate: '',
    followUpDate: new Date(),
    feedback: '',
  };

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllStatuses();
  }

  getAllCategories() {
    this.masterService.getCategories().subscribe({
      next: (result: any) => {
        this.categoriesList = result.data;
      },
    });
  }
  getAllStatuses() {
    this.masterService.getStatus().subscribe({
      next: (result: any) => {
        this.statusList = result.data;
      },
    });
  }

  submitEnquiry() {
    this.masterService.submitSingleEnquiry(this.enquiryObj).subscribe({
      next: (result: any) => {
        alert(result.message);
        this.resetEnquiry();
      },
      error(err) {
        console.log(err.message);
      },
    });
  }
  resetEnquiry() {
    this.enquiryObj = {
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      message: '',
      categoryId: 0,
      statusId: 0,
      enquiryType: '',
      isConverted: false,
      enquiryDate: '',
      followUpDate: new Date(),
      feedback: '',
    };
  }
}
