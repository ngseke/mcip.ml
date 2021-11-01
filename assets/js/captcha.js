export const create = (canvas) => {
  const answer = (~~(Math.random() * 10 ** 4)).toString().padStart(4, 0)
  const text = answer.split('').map((i) => {
    return '零一二三四五六七八九零壹貳參肆伍陸柒捌玖'.split('')[+i + ((Math.random() > 0.5) ? 10 : 0)]
  }).join('')

  const el = canvas
  const ctx = el.getContext('2d')
  ctx.clearRect(0, 0, el.width, el.height)

  const gradient = ctx.createLinearGradient(0, 0, el.width, 0)
  const gradientList = ['#2af1fb', '#2aeefb', '#34d2fb', '#45bdfa', '#50b0fa', '#54adfa', '#bf9ff2']
  gradientList.forEach((i, index) => {
    gradient.addColorStop(index / gradientList.length, i)
  })

  ctx.font = '16px sans Serif'
  ctx.fillStyle = gradient
  ctx.textBaseline = 'middle'
  const textWidth = ctx.measureText(text).width

  ctx.fillText(text, (el.width / 2) - (textWidth / 2) + Math.random() * 50 - 25, 10 + Math.random() * 20)

  return answer
}
