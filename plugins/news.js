import axios from 'axios'

const url = `https://us-central1-mc-integration-platform.cloudfunctions.net/article/app`

export const fetchList = async function (after = null, limit = 3) {
  const list = (await axios.get(url, { params: { after, limit } })).data
    .sort((a, b) => b.timestamp - a.timestamp)

  return list
}

export const fetch = async function (id) {
  return (await axios.get(url, { params: { id } }).catch(this.goToIndex)).data
}