type PostTitleProps = {
	date: Date;
	title: string;
}
// TODO: Make this use date.format()
export default function PostListing({ date, title } : PostTitleProps) {
	return <p>{`[${date.toDateString()}] ${title}`}</p> 
}
