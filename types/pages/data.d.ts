import { MdxRemote } from 'next-mdx-remote/types'

export type CategoryType = 'algorithm' | 'next' | 'nginx'

export interface CardListType {
  name: string,
  background: string,
  category: CategoryType
}

export interface DocumentProps {
  source: MdxRemote.Source
}
