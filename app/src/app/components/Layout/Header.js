import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
	return (
		<header>
			<div className='container'>
				<Link id='header-logo' href='/'>
					Find.Your.Horror.
				</Link>
				<Nav />
			</div>
		</header>
	);
}
