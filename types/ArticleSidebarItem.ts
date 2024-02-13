export interface ArticleSidebarItem {
  id: string
  title: string
  top: number
  children?: ArticleSidebarItem[]
}
