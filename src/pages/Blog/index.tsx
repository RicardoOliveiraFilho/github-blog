import { useCallback, useEffect, useState } from 'react'
import { Spinner } from '../../components/Spinner'

import { api } from '../../lib/axios'

import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'

import { PostsListContainer } from './styles'

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${userName}/${repoName}`,
      )
      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      <PostsListContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          posts.map((post) => <PostCard key={post.number} post={post} />)
        )}
      </PostsListContainer>
    </>
  )
}
