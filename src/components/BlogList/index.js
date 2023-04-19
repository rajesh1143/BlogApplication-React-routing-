import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogItem: []}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({
      blogItem: updatedData,
    })
  }

  render() {
    const {blogItem} = this.state

    return (
      <div className="blogs-list">
        {blogItem.map(eachItem => (
          <BlogItem blogData={eachItem} key={eachItem.id} />
        ))}
      </div>
    )
  }
}

export default BlogList
