import axios from 'axios'

const url = 'https://us-central1-mc-integration-platform.cloudfunctions.net/article/app'

export const fetchList = async function (after = null, limit = 3) {
  const list = (await axios.get(url, { params: { after, limit } })).data
    .sort((a, b) => b.timestamp - a.timestamp)

  return list
}

export const fetchListBrief = async function (after = null, limit = 9999) {
  const url = 'https://us-central1-mc-integration-platform.cloudfunctions.net/article/app/list'
  const list = (await axios.get(url, { params: { after, limit } })).data
    .sort((a, b) => b.timestamp - a.timestamp)

  return list
}

export const fetch = async function (id) {
  return (await axios.get(url, { params: { id } })).data
}