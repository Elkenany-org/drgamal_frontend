import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/_services/news/news.service';
import { NewDetails } from 'src/app/interfaces/news';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})
export class BlogdetailsComponent {
  blog_content!:NewDetails
  constructor(private blogDetails:NewsService,private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')+'';
    this.blogDetails.news_details(id).subscribe(
      res=>{
        this.blog_content=res
      },
      err=>{
      console.log('error getting news');
    }
    )
  }

}
