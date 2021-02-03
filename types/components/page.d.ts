import { BaseType } from 'base'

export interface CardProps {
  name: string,
  background: string,
  onClick: () => void
}

export interface DocumentListProps extends BaseType {
  serial: string | number,
  name: string,
  category: string,
  tag: string,
  level: string,
  time?: string,
  url?: string,
  title?: boolean,
  onClick?: () => void
}

export interface LogoProps extends BaseType {
  image: string,
  text: string,
}
