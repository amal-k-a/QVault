import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionpaper',
  templateUrl: './questionpaper.component.html',
  styleUrls: ['./questionpaper.component.css']
})
export class QuestionPaperComponent implements OnInit {
  courseName: string = '';
  subjectWisePapers: { subject: string, papers: string[] }[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    const courseName = params['course'];
    const specialization = params['specialization'];
    console.log('Course:', courseName);
    console.log('Specialization:', specialization);
  });
}
}
