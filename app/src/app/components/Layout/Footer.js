export default function Footer() {
	const d = new Date();
	const year = d.getFullYear();
	return (
		<footer>
			<div className='container'>
				<p>&copy; {year} Alannah Holder Inc.</p>
			</div>
		</footer>
	);
}
