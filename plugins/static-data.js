import axios from 'axios'
import join from 'url-join'

const path = 'https://cdn.jsdelivr.net/gh/ngseke/mcip.ml-static@master'

export const get = async function (name) {
  const { data } = await axios.get(join(path, name))
  return data
}
