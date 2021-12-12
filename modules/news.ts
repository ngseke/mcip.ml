import axios from 'axios'
import join from 'url-join'

import News from '~/types/News'
import NewsList from '~/types/NewsList'

const apiUrl = 'https://us-central1-mc-integration-platform.cloudfunctions.net/article/app'

type Id = News['id'] | null

const sortByTimestamp = (a: News, b: News) => b.timestamp - a.timestamp

export async function fetchList (
  after: Id = null,
  limit = 3
) {
  const params = { after, limit }
  const { data } = (await axios.get<NewsList>(apiUrl, { params }))
  const list = data.sort(sortByTimestamp)

  return list
}

export async function fetchListBrief (
  after: Id = null,
  limit = 9999
) {
  const url = join(apiUrl, 'list')
  const params = { after, limit }
  const { data } = (await axios.get<NewsList>(url, { params }))
  const list = data.sort(sortByTimestamp)

  return list
}

export async function fetch (id: string) {
  const { data } = await axios.get<News>(apiUrl, { params: { id } })
  return data
}
