type AlternateTextProps = {
	text: string;
	alternateText: string;
}

export default function AlternateText({ text, alternateText }: AlternateTextProps) {
	return (
		<div className="flex">
			<p className="hidden md:flex">{text}</p>
			<p className="md:hidden">{alternateText}</p>
		</div>
	);
}
