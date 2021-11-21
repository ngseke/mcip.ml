export default () => {
  if (process.env.NODE_ENV !== 'production') return

  window.dataLayer = window.dataLayer || []
  // eslint-disable-next-line no-undef
  function gtag () { dataLayer.push(arguments) }
  gtag('js', new Date())
  gtag('config', 'UA-134521649-1')
}
