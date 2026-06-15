import {  Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master-service';

@Component({
  selector: 'app-enquiry-list',
  imports: [],
  templateUrl: './enquiry-list.html',
  styleUrl: './enquiry-list.css',
})
export class EnquiryList implements OnInit {
  masterService = inject(MasterService);
enquiresList = signal<any[]>([]);
  ngOnInit(): void {
    this.getEnquiries();
  }

  getEnquiries() {
    this.masterService.getAllEnquries().subscribe({
      next: (result: any) => {
      this.enquiresList.set(result.data);
      },
      error(err) {
        console.error(err.message);
      },
    });
  }
}
