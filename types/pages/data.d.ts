import { MdxRemote } from 'next-mdx-remote/types'

export type AttributeType = 'algorithm' | 'next' | 'nginx'

export interface CardListType {
  name: string,
  background: string,
  attribute: AttributeType
}

export interface CodeProps {
  source: MdxRemote.Source
}
