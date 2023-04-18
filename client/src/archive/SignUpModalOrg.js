import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useNavigate, Link as DomLink } from 'react-router-dom';

function SignUpModal() {
	const history = useNavigate();
	const [modal, setModal] = useState(false);
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [select, setSelect] = useState('');

	const toggle = () => {
		setModal(!modal);
	};
	async function registerUser(event) {
		event.preventDefault();

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fname,
				lname,
				email,
				password,
				select,
			}),
		});

		const data = await response.json();

		if (data.status === 'ok') {
			// save JWT token to local storage
			localStorage.setItem('token', data.token);
			alert("You've been successfully registered!");
			// window.location.href = '/';
			// history.push('');
		} else {
			alert('Already Registered');
		}
	}

	return (
		<div>
			<DomLink
				className="nav-link"
				style={{ color: 'white', backgroundColor: 'red' }}
				onClick={toggle}
				to="/signup">
				Join
			</DomLink>
			<Modal isOpen={modal}>
				<ModalHeader>Sign-up</ModalHeader>
				<ModalBody>
					<Formik
						initialValues={{
							fname: '',
							lname: '',
							email: '',
							password: '',
							select: '',
						}}
						onSubmit={registerUser}>
						{({ values, handleChange, handleSubmit }) => (
							<Form onSubmit={handleSubmit}>
								<FormGroup>
									<Label htmlFor="fname">First Name</Label>
									<Input
										name="fname"
										value={values.fname}
										placeholder="First Name"
										className="form-control"
										onChange={handleChange}
									/>
								</FormGroup>
								<FormGroup>
									<Label htmlFor="lname">Last Name</Label>
									<Input
										name="lname"
										value={values.lname}
										placeholder="Last Name"
										className="form-control"
										onChange={handleChange}
									/>
								</FormGroup>
								<FormGroup>
									<Label htmlFor="email">Email</Label>
									<Input
										name="email"
										value={values.email}
										placeholder="Email"
										className="form-control"
										onChange={handleChange}
									/>
								</FormGroup>
								<FormGroup>
									<Label htmlFor="password">Password</Label>
									<Input
										name="password"
										value={values.password}
										placeholder="Password"
										className="form-control"
										type="password"
										onChange={handleChange}
									/>
								</FormGroup>
								<FormGroup>
									<Label htmlFor="select">Select</Label>
									<Input
										type="select"
										name="select"
										value={values.select}
										className="form-control"
										onChange={handleChange}>
										<option value="Premium">Premium - $29.99</option>
										<option value="Plus">Plus - $24.99</option>
										<option value="Base">Base - $14.99</option>
									</Input>
								</FormGroup>
								<Button
									color="primary"
									onClick={() => {
										toggle();
										handleSubmit();
									}}>
									Submit
								</Button>{' '}
								<Button color="secondary" onClick={toggle}>
									Cancel
								</Button>
							</Form>
						)}
					</Formik>
					{/* <Formik
						initialValues={{
							fname: '',
							lname: '',
							email: '',
							password: '',
							select: '',
						}}>
						<Form onSubmit={registerUser}>
							<FormGroup>
								<Label htmlFor="fname">First Name</Label>
								<Field
									value={fname}
									placeholder="First Name"
									className="form-control"
									onChange={(e) => {
										setFname(e.target.value);
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="lname">Last Name</Label>
								<Field
									value={lname}
									placeholder="Last Name"
									className="form-control"
									onChange={(e) => {
										setLname(e.target.value);
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="email">Email</Label>
								<Field
									value={email}
									placeholder="Email"
									className="form-control"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Password</Label>
								<Field
									value={password}
									placeholder="Password"
									className="form-control"
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="select">Select</Label>
								<Field
									name="select"
									value={select}
									className="form-control"
									onChange={(e) => {
										setSelect(e.target.value);
									}}>
									<option value="Premium">Premium - $29.99</option>
									<option value="Plus">Plus - $24.99</option>
									<option value="Base">Base - $14.99</option>
								</Field>
							</FormGroup>
						</Form>
					</Formik> */}
				</ModalBody>
				<ModalFooter></ModalFooter>
			</Modal>
		</div>
	);
}

export default SignUpModal;
