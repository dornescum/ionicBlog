import { Injectable } from '@angular/core';
import { Blog } from '../utils/Interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  private blogs: Blog[] = [
    {
      id: '1',
      title: 'Blog 1',
      description: 'Description of Blog 1',
      date: new Date('2024-03-08'),
      creator: 'John Doe'
    },
    {
      id: '2',
      title: 'Blog 2',
      description: 'Description of Blog 2',
      date: new Date('2024-03-09'),
      creator: 'Jane Smith'
    },
    {
      id: '3',
      title: 'Blog 3',
      description: 'Description of Blog 3',
      date: new Date('2024-03-10'),
      creator: 'Michael Johnson'
    }
  ];

  getBlogs(): Blog[] {
    return this.blogs;
  }


  getBlogById(id: number): Blog | undefined {
    return this.blogs.find(blog => +blog.id === id);
  }
}


