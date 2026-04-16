export default function Home() {
  return (
    <main dangerouslySetInnerHTML={{__html: `
      <script>
        fetch('/index.html')
          .then(r => r.text())
          .then(html => {
            document.open();
            document.write(html);
            document.close();
          });
      </script>
    `}} />
  )
}
