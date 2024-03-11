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
      title: 'Universal Connection',
      description: 'When you want something, all the universe conspires in helping you to achieve it." This famous ' +
        'quote from "The Alchemist" underscores the power of determination and the interconnectedness of our desires with ' +
        'the universe.',
      date: new Date('2024-03-08'),
      creator: 'Paul Coelho'
    },
    {
      id: '2',
      title: 'Culture and Innovation',
      description: 'You can\'t have innovation without culture." Schmidt, the former CEO of Google, highlights the' +
        ' crucial role of culture in fostering innovation, emphasizing that it\'s not just about technology but also about mindset and environment.',
      date: new Date('2024-03-09'),
      creator: 'Eric Emmanuel Schmidt'
    },
    {
      id: '3',
      title: 'Pain and Suffering',
      description: 'Pain is inevitable. Suffering is optional." This quote encapsulates Murakami\'s philosophical approach to life,' +
        ' suggesting that while we can\'t avoid pain, we have a choice in how we respond to it, and suffering often arises from our resistance to the inevitable.',
      date: new Date('2024-03-10'),
      creator: 'Haruki Murakami'
    }
  ];

  getBlogs(): Blog[] {
    return this.blogs;
  }


  getBlogById(id: number): Blog | undefined {
    return this.blogs.find(blog => +blog.id === id);
  }
}


