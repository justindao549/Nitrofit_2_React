import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormGroup, Label, Input } from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function LogInModal() {
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function loginUser(event) {
		event.preventDefault();

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await response.json();

		if (data.status === 'ok') {
			// check if the status is ok
			localStorage.setItem('token', data.token); // store the token in local storage
			alert('Login successful');
			navigate('/'); // use history instead of window.location.href
		} else {
			alert('Please check your username and password');
		}
	}

	return (
		<div>
			<FontAwesomeIcon
				className="Icon"
				icon={faRightFromBracket}
				onClick={toggle}
				size="2x"
				style={{ margin: '3px' }}
			/>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Log-In</ModalHeader>
				<ModalBody>
					<Formik>
						<Form onSubmit={loginUser}>
							<FormGroup>
								<Label htmlFor="Email">Email</Label>
								<Field
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									placeholder="Email"></Field>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Password</Label>
								<Field
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type="password"
									placeholder="Password"></Field>
							</FormGroup>
							{/* <FormGroup>
								<Label>
									<Input type="checkbox" /> Remember Me
								</Label>
							</FormGroup> */}
							<FormGroup className="text-center">
								<Button
									color="primary"
									onClick={() => {
										toggle();
									}}
									className="mx-auto"
									style={{ width: '200px' }}>
									Submit
								</Button>
							</FormGroup>
						</Form>
					</Formik>
				</ModalBody>
				<ModalFooter>
					<Label>Forgot password?</Label>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default LogInModal;
