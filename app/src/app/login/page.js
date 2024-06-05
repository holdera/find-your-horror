import LoginForm from '../components/Forms/LoginForm';

export default function LoginIndex() {
	return (
		<section id='login' className='page-section'>
			<div className='container'>
				<div id='login-wrapper'>
					<h1 className='h1-heading'>Sign In</h1>
					<LoginForm />
				</div>
			</div>
		</section>
	);
}
