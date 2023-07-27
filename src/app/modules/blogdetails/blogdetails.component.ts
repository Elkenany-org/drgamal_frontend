import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  sanitizedDescription!: SafeHtml;

  constructor(private blogDetails:NewsService,private route: ActivatedRoute,private sanitizer: DomSanitizer){}

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

  getSafeDescription(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.blog_content.description);
  }

}
