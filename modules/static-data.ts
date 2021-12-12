import axios from 'axios'
import join from 'url-join'
import { STATIC_DATA_URL } from './config'

export async function fetch <T = any> (name: string) {
  const url = join(STATIC_DATA_URL, name)
  const { data } = await axios.get<T>(url)
  return data
}
