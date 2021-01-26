import React from 'react'
import { PageType } from 'components/header'

export interface LayoutProps {
  children: React.ReactNode,
  page?: PageType,
}
