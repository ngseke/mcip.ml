import axios from 'axios'
import join from 'url-join'

import { API_URL } from './config'
import ContactRequest from '~/types/ContactRequest'

const getUrl = (path: string) => join(API_URL, path)

export async function submitContactUsForm (body: ContactRequest) {
  const url = getUrl('/firestoreContact')
  const { data } = (await axios.post<never>(url, body))

  return data
}
