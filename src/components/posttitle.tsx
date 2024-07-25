type PostTitleProps = {
	date: Date;
	title: string;
}

export default function PostTitle({ date, title } : PostTitleProps) {
	return <div className="flex">
    <p className="float-left">{`${title}`}</p>
    <p className="float-right">{`[${date}]`}</p> 
  </div>
}
