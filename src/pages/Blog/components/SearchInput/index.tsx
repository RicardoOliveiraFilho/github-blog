import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchInputContainer } from './styles'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

interface SearchInputProps {
  postsLength: number
  getPosts: (query?: string) => Promise<void>
}

export function SearchInput({ postsLength, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span>
          {postsLength >= 2
            ? `${postsLength} publicações`
            : postsLength === 1
            ? `${postsLength} publicação`
            : 'Nenhuma publicação'}
        </span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchInputContainer>
  )
}
