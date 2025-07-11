import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-questionpaper',
  templateUrl: './questionpaper.component.html',
  styleUrls: ['./questionpaper.component.css']
})
export class QuestionPaperComponent implements OnInit {
  courseName = '';
  specialization = '';
  showFilters = false;
  searchTerm = '';
  isLoading = true;

  filters = {
    subject: '',
    year: '',
    type: ''
  };

  subjects: string[] = [];
  years: string[] = [];
  types = ['Mid Term', 'End Sem'];

  allPapers: any[] = [];
  filteredPapers: any[] = [];

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.courseName = params['course'] || 'Selected Course';
      this.specialization = params['specialization'] || '';

      this.api.getQuestionPapers(this.courseName).subscribe(data => {
        this.isLoading = false;

        if (!Array.isArray(data)) {
          console.error('Invalid response format', data);
          return;
        }

        this.allPapers = data.map(paper => ({
          subname: paper.subname,
          courseid: paper.courseid,
          department: paper.department,
          coursename: paper.coursename,
          term: paper.term,
          year: paper.year,
          sem: paper.sem,
          files: paper.files
        }));

        this.subjects = [...new Set(this.allPapers.map(p => p.subname))];
        this.years = [...new Set(this.allPapers.map(p => p.year))].sort((a, b) => +b - +a);

        this.applyFilters();
      }, error => {
        this.isLoading = false;
        console.error('Failed to load papers', error);
      });
    });
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  applyFilters(): void {
    this.filteredPapers = this.allPapers
      .map(paper => ({
        title: `${paper.subname} - ${paper.term} Sem ${paper.sem}`,
        year: paper.year,
        code: paper.courseid,
        subject: paper.subname,
        type: paper.term,
        imageUrl: this.convertBinaryToBase64(paper.files?.[0]?.data)
      }))
      .filter(paper =>
        (!this.filters.subject || paper.subject === this.filters.subject) &&
        (!this.filters.year || paper.year === this.filters.year) &&
        (!this.filters.type || paper.type === this.filters.type) &&
        (!this.searchTerm || paper.code.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
  }

  resetFilters(): void {
    this.filters = { subject: '', year: '', type: '' };
    this.searchTerm = '';
    this.applyFilters();
  }

  convertBinaryToBase64(binaryData: any): string {
    if (!binaryData || !binaryData.length) return 'assets/Images/samplepaper.png';
    const byteArray = new Uint8Array(binaryData);
    let binaryString = '';
    for (let i = 0; i < byteArray.length; i++) {
      binaryString += String.fromCharCode(byteArray[i]);
    }
    return 'data:application/pdf;base64,' + btoa(binaryString);
  }
}
