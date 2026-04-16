export const dynamic = 'force-static'

export default function Home() {
  return (
    <html>
      <body>
        <script dangerouslySetInnerHTML={{__html: `
          window.location.replace('/index.html');
        `}} />
      </body>
    </html>
  )
}
