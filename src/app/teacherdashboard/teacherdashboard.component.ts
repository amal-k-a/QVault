import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html'
})
export class TeacherdashboardComponent implements OnInit {
  showFilters = false;
  showExitModal = false;
  email: string = '';

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  // ✅ Inject Router via constructor
  constructor(private router: Router) {}

  ngOnInit(): void {
    // ✅ Get email from sessionStorage
    this.email = sessionStorage.getItem('email') || '';
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  onAddClick(): void {
    this.fileInput.nativeElement.click();
  }

  handleFileUpload(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      // TODO: upload to server, show toast, or add to list
    }
  }

  openExitModal(): void {
    this.showExitModal = true;
    document.body.classList.add('overflow-hidden'); // lock scroll
  }

  closeModal(): void {
    this.showExitModal = false;
    document.body.classList.remove('overflow-hidden');
  }

  logout(): void {
    sessionStorage.clear();               // Clear user session
    this.router.navigate(['/login']);     // Redirect to login
  }
}
