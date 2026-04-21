export default function Home() {
  return (
    <main dangerouslySetInnerHTML={{__html: `
      <script>
        if (window.location.pathname === '/') {
          window.location.replace('/index.html');
        }
      </script>
    `}} />
  )
}