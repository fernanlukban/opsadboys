type PostTitleProps = {
	date: Date;
	title: string;
}

export default function PostTitle({ date, title } : PostTitleProps) {
	return <div className="flow-root">
    <p className="float-left font-bold">{`${title}`}</p>
    <p className="float-right">{`[${date}]`}</p> 
  </div>
}
