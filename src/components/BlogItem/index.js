import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link className="blog-item-link" to={`/blogs/${id}`}>
      <div className="item-container">
        <img className="item-image" src={imageUrl} alt={id} />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <p className="item-title">{title}</p>
          <div className="author-info">
            <img src={avatarUrl} className="avatar" alt={author} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
