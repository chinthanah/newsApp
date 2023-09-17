import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container">
        <h2>NEWS Top Headlines</h2>
        <div className="row my-2">
          <div className="col-md-4">
            <NewsItem
              title="mytitle"
              description="mydesc"
              imageUrl="https://www.aljazeera.com/wp-content/uploads/2023/09/33V82NE-highres-1694809059.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="mytitle"
              description="mydesc"
              imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="mytitle"
              description="mydesc"
              imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
