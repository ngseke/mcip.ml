import axios from 'axios'
import join from 'url-join'

const path = 'https://cdn.jsdelivr.net/gh/ngseke/mcip.ml-static@master'

export async function fetch (name: string) {
  const url = join(path, name)
  const { data } = await axios.get(url)
  return data
}
