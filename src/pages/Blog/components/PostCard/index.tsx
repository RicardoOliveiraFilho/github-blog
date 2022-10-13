import { IPost } from '../..'
import { PostCardContainer } from './styles'

interface PostCardProps {
  post: IPost
}

export function PostCard({ post }: PostCardProps) {
  return (
    <PostCardContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{post.created_at}</span>
      </div>
      <p>{post.body}</p>
    </PostCardContainer>
  )
}
