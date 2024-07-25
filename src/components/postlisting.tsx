type PostTitleProps = {
	date: string;
	title: string;
}
// TODO: Make this use date.format()
export default function PostListing({ date, title } : PostTitleProps) {
  const dateUnserialized = new Date(Date.parse(date));
	return <p>{`[${dateUnserialized.toDateString()}] ${title}`}</p> 
}
