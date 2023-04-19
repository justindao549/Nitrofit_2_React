import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	FormGroup,
	Label,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function SignUpModal() {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	const history = useNavigate();
	const ServerLink = 'https://nitrofit-2-react.herokuapp.com/';

	async function registerUser(values) {
		const response = await fetch(`${ServerLink}/api/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});

		const data = await response.json();

		if (data.status === 'ok') {
			// save JWT token to local storage

			alert("You've been successfully registered!");
			window.location.href = '/';
			history.push('/');
		} else {
			alert('Already Registered');
		}
	}

	return (
		<div>
			<Button
				color="danger"
				onClick={toggle}
				style={{ marginLeft: '10px', marginRight: '10px', marginTop: '10Px' }}>
				Join
			</Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Sign Up</ModalHeader>
				<Formik
					initialValues={{
						fname: '',
						lname: '',
						email: '',
						password: '',
						subscription: '',
					}}
					onSubmit={registerUser}>
					{({ isSubmitting }) => (
						<Form>
							<ModalBody>
								<FormGroup>
									<Label>First Name</Label>
									<Field
										name="fname"
										placeholder="First Name"
										className="form-control"
									/>
								</FormGroup>
								<FormGroup>
									<Label>Last Name</Label>
									<Field
										name="lname"
										placeholder="Last Name"
										className="form-control"
									/>
								</FormGroup>
								<FormGroup>
									<Label>Email</Label>
									<Field
										name="email"
										type="email"
										placeholder="Email"
										className="form-control"
									/>
								</FormGroup>
								<FormGroup>
									<Label>Password</Label>
									<Field
										name="password"
										type="password"
										placeholder="Password"
										className="form-control"
									/>
								</FormGroup>
								<FormGroup>
									<Label>Subscription</Label>
									<Field
										name="subscription"
										as="select"
										className="form-control">
										<option value="Select">Select</option>
										<option value="Premium">Premium - $29.99</option>
										<option value="Plus">Plus - $24.99</option>
										<option value="Base">Base - $14.99</option>
									</Field>
								</FormGroup>
							</ModalBody>
							<ModalFooter>
								<Button type="submit" color="primary" disabled={isSubmitting}>
									Register
								</Button>{' '}
								<Button color="secondary" onClick={toggle}>
									Cancel
								</Button>
							</ModalFooter>
						</Form>
					)}
				</Formik>
			</Modal>
		</div>
	);
}

export default SignUpModal;
