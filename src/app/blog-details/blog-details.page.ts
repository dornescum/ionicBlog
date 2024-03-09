import { Component, OnInit } from '@angular/core';
import {Blog} from "../utils/Interface";
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../services/blog.service";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.page.html',
  styleUrls: ['./blog-details.page.scss'],
})
export class BlogDetailsPage implements OnInit {
  blog: Blog | undefined;
  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    const blogId = this.route.snapshot.params?.['id'];
    if (blogId !== undefined) {
      this.blog = this.blogService.getBlogById(Number(blogId));
    }
  }
}
