import React from 'react';
import './body.css';
import blog1 from '../img/Layer_420.png';
import blog2 from '../img/Layer_421.png';
import blog3 from '../img/Layer_422.png';
import Grid from '@material-ui/core/Grid';

const FromBlog = (props) => {
  return (
    <div className="blog-conteiner">
      <div className="blog-header tipical">from the blog</div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className="blog-cart">
            <span className="descrip">
              <div className="zero tipicalL">02</div>
              <div className="feb tipicalL">feb</div>
            </span>
            <img src={blog1} alt="women" />
          </div>
          <div className="blog-text">
            <div className="blog-text-header tipical">
              Curabitur ligulasapien{' '}
            </div>
            <p>
              Vestibulum sagittis, nisl nec pellentesque suscipit, arcu nisi
              maximus neque, vitae finibus erat odio eu lacus. Curabitur
              malesuada erat.
            </p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="blog-cart center-img">
            <span className="descrip">
              <div className="zero tipicalL">02</div>
              <div className="feb tipicalL">feb</div>
            </span>
            <img src={blog2} alt="women" />
          </div>
          <div className="blog-text">
            <div className="blog-text-header tipical">
              Curabitur ligulasapien{' '}
            </div>
            <p>
              Vestibulum sagittis, nisl nec pellentesque suscipit, arcu nisi
              maximus neque, vitae finibus erat odio eu lacus. Curabitur
              malesuada erat.
            </p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="blog-cart">
            <span className="descrip">
              <div className="zero tipicalL">02</div>
              <div className="feb tipicalL">feb</div>
            </span>
            <img src={blog3} alt="women" />
          </div>
          <div className="blog-text">
            <div className="blog-text-header tipical">
              Curabitur ligulasapien{' '}
            </div>
            <p>
              Vestibulum sagittis, nisl nec pellentesque suscipit, arcu nisi
              maximus neque, vitae finibus erat odio eu lacus. Curabitur
              malesuada erat.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FromBlog;
