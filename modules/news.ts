import axios from 'axios'
import join from 'url-join'

import { API_URL } from './config'
import News from '~/types/News'
import NewsList from '~/types/NewsList'

type Id = News['id'] | null

const sortByTimestamp = (a: News, b: News) => b.timestamp - a.timestamp

export async function fetchList (
  after: Id = null,
  limit = 3
) {
  const url = join(API_URL, '/article/app')
  const params = { after, limit }
  const { data } = (await axios.get<NewsList>(url, { params }))
  const list = data.sort(sortByTimestamp)

  return list
}

export async function fetchListBrief (
  after: Id = null,
  limit = 9999
) {
  const url = join(API_URL, '/article/app/list')
  const params = { after, limit }
  const { data } = (await axios.get<NewsList>(url, { params }))
  const list = data.sort(sortByTimestamp)

  return list
}

export async function fetch (id: string) {
  const url = join(API_URL, '/article/app')
  const { data } = await axios.get<News>(url, { params: { id } })
  return data
}
