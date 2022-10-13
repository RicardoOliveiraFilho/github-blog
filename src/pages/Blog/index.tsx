import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostsListContainer } from './styles'

export function Blog() {
  return (
    <>
      <Profile />
      <SearchInput />
      <PostsListContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsListContainer>
    </>
  )
}
