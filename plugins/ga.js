export default ({ app }) => {
  if (process.env.NODE_ENV !== 'production') return
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-134521649-1');
}
  