import { Component, OnInit } from '@angular/core';
import { GetAdviceService } from '../getAdvice.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {
  advice: string;
  error: boolean = false;
  constructor(private adviceService: GetAdviceService) { }

  ngOnInit() {
    this.fetchAdvice();
  }

  fetchAdvice() {
    this.adviceService.getAdvices().subscribe((data: any) => {
      if (data) {
        this.advice = data.slip.advice;
      }
      else {
        this.error = true;
      }
    }, error => {
      this.error = true;
    });
  }

  GenerateNewAdvice() {
    this.fetchAdvice();
  }
}
