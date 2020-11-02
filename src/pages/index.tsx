
type Props = {
  title: string
}

export default function Home({ title = "React Avancado"}: Props) {
  return (
    <div >
      <p>{title}</p>
    </div>
  )
}
