import React from 'react';
import "./Blog.css";
import blogData from './data';

const Blog = () => {
  return (
    <div className='Blog__wrapper'>
      <h1>Latest Articles</h1>
      <div className='row'>
        {blogData.map(data => {
            return (
              <div key={data.id} className='col-lg-3 col-md-6 Blog__main'>
                <div class="card Blog__card">
                  <img src={data.img} class="card-img-top Blog__img" alt={data.img} />
                  <div class="card-body text-left Blog__content">
                    <p className='Blog__content--name'>{data.name}</p>
                    <a href="#" class="card-title Blog__content--title">{data.title}</a>
                    <p class="card-text Blog__content--para">{data.desc}</p>
                  </div>
                </div>
              </div>
            )
          })
        }


      </div>

    </div>
  )
}

export default Blog