import axios from 'axios'
import join from 'url-join'

import { STATIC_DATA_URL } from './config'

import { type Partners } from '~/types/Partners'
import { type Faqs } from '~/types/Faqs'

const getUrl = (path: string) => join(STATIC_DATA_URL, path)

export async function fetchPartners () {
  const url = getUrl('json/partner.json')
  const { data } = await axios.get<Partners>(url)
  return data
}

export async function fetchFaqs () {
  const url = getUrl('json/faq.json')
  const { data } = await axios.get<Faqs>(url)
  return data
}
