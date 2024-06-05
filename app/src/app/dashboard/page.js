export default function DashboardIndex({ user = 'Bot' }) {
	return (
		<section id='dashboard'>
			<div>
				<h1>Welcome {user}!</h1>
			</div>
		</section>
	);
}
