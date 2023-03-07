type PostTitleProps = {
	date: Date;
	title: string;
}

export default function PostTitle({ date, title } : PostTitleProps) {
	return <p>{`${date} % {title}`}</p>
}
