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

export interface CodeListProps extends BaseType {
  component: string,
  name: string,
  category: string,
  level: string,
  mdx?: string,
  title?: boolean,
  onClick?: () => void
}

export interface ArticleListProps extends BaseType {
  name: string,
  category: string[],
  time: string,
  mdx?: string,
  title?: boolean,
  onClick?: () => void
}
