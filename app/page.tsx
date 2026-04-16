export default function Home() {
  return (
    <main dangerouslySetInnerHTML={{__html: `
      <script>
        window.location.href = '/index.html';
      </script>
    `}} />
  )
}
