import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsService } from 'src/app/_services/news/news.service';
import { NewDetails, News } from 'src/app/interfaces/news';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  all_news!: NewDetails[];
  constructor(
    private titleService:Title,private news:NewsService
    ) {
      titleService.setTitle('Blog');

    }

    ngOnInit(): void {
      this.news.all_news().subscribe(
        res=>{console.log(res);
          this.all_news=res.data
        },
        err=>{
        console.log('error getting news');
      }
      )
    }
  text: string = 'Your long text goes here...'; // Replace with your actual text
  showFullText: boolean = false;

  toggleText(): void {
    this.showFullText = !this.showFullText;
  }
}
