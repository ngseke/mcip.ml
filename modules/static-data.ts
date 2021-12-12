import axios from 'axios'
import join from 'url-join'

import { STATIC_DATA_URL } from './config'

import Partners from '~/types/Partners'
import Faqs from '~/types/Faqs'

export async function fetchPartners () {
  const url = join(STATIC_DATA_URL, 'json/partner.json')
  const { data } = await axios.get<Partners>(url)
  return data
}

export async function fetchFaqs () {
  const url = join(STATIC_DATA_URL, 'json/faq.json')
  const { data } = await axios.get<Faqs>(url)
  return data
}
