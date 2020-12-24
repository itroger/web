import { BaseType } from 'base'

export interface CardProps {
  name: string,
  background: string,
  onClick: () => void
}

export interface CardListType {
  name: string,
  background: string,
  url: string
}

export interface ListProps extends BaseType {
  id: string,
  name: string,
  category: string[],
  level: string,
  mdx?: string,
  title?: boolean,
  onClick?: () => void
}