import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '../../components/Spinner'
import { api } from '../../lib/axios'
import { IPost } from '../Blog'
import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/repos/${userName}/${repoName}/issues/${id}`,
      )
      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])

  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      {isLoading ? <Spinner /> : <PostContent content={postData.body} />}
    </>
  )
}
