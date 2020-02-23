import axios from 'axios'

export const fetch = async function (after = null, limit = 3) {
  const url = `https://us-central1-mc-integration-platform.cloudfunctions.net/article/app`
 
  const list = (await axios.get(url, { params: { after, limit } })).data
    .sort((a, b) => b.timestamp - a.timestamp)

  return list
}