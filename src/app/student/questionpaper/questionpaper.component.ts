import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionpaper',
  templateUrl: './questionpaper.component.html',
  styleUrls: ['./questionpaper.component.css']
})
export class QuestionPaperComponent implements OnInit {
  courseName: string = '';
  showFilters = false;
  searchTerm = '';
  
  filters = {
    subject: '',
    year: '',
    type: '' // Mid Term / End Sem
  };

  subjects = ['DBMS', 'Operating Systems', 'Networking']; // Replace with dynamic list from backend
  years = ['2024', '2023', '2022'];
  types = ['Mid Term', 'End Sem'];

  allPapers: any[] = []; // fetched from API
  filteredPapers: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.courseName = params['course'] || 'Selected Course';
    });

    // Simulated backend response
    this.allPapers = Array(10).fill({
      title: 'End Sem Paper',
      year: '2024',
      code: '24DB21KJC431',
      subject: 'DBMS',
      type: 'End Sem',
      imageUrl: 'assets/Images/samplepaper.png'
    });

    this.filteredPapers = this.allPapers;
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  applyFilters() {
    this.filteredPapers = this.allPapers.filter(paper => {
      return (!this.filters.subject || paper.subject === this.filters.subject)
        && (!this.filters.year || paper.year === this.filters.year)
        && (!this.filters.type || paper.type === this.filters.type)
        && (!this.searchTerm || paper.code.toLowerCase().includes(this.searchTerm.toLowerCase()));
    });
  }

  resetFilters() {
    this.filters = { subject: '', year: '', type: '' };
    this.searchTerm = '';
    this.filteredPapers = this.allPapers;
  }
}
