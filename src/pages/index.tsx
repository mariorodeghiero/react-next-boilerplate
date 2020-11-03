type Props = {
	title: string
}

const fte = 'test'

export default function Home({ title = 'React Avancado' }: Props) {
	return (
		<div>
			<p>{title}</p>
		</div>
	)
}
