import { IPost } from '../..'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { PostCardContainer } from './styles'

interface PostCardProps {
  post: IPost
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = relativeDateFormatter(post.created_at)

  return (
    <PostCardContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </PostCardContainer>
  )
}
