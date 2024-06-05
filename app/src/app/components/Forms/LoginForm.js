'use client';
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const router = useRouter();

	const onSubmit = (data) => {
		if (data) {
			console.log(data);
			setTimeout(() => {
				router.push('/dashboard');
			}, 500);
		}
	};
	const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	return (
		<form
			id='login-form'
			className='form'
			onSubmit={handleSubmit(onSubmit)}
			noValidate
		>
			<div className='form-control'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					placeholder='jodn.doe@gmail.com'
					aria-invalid={errors.email ? 'true' : 'false'}
					{...register('email', {
						required: true,
						pattern: emailPattern,
					})}
				/>
				{errors.email && (
					<p className='input-error'>Please enter your email.</p>
				)}
			</div>
			<div className='form-control'>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					id='password'
					aria-invalid={errors.email ? 'true' : 'false'}
					{...register('password', { required: true, minLength: 10 })}
				/>
				{errors.password && (
					<p className='input-error'>Please enter your password.</p>
				)}
			</div>
			<p className='forgot-password'>
				<Link href='/'>Forgot password?</Link>
			</p>

			<input
				type='submit'
				className='btn btn-submit'
				id='sign-in'
				value='Sign In'
			/>
		</form>
	);
}
