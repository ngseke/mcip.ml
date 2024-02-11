import type QuestionAnswer from './QuestionAnswer'

export default interface Faq {
  title: string
  content: QuestionAnswer[]
}
