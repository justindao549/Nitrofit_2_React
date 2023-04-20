import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Login() {
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	const ServerLink = 'https://nitrofit-2-react.herokuapp.com';

	async function loginUser(values) {
		const response = await fetch(`${ServerLink}/api/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});

		const data = await response.json();

		if (data.status === 'ok') {
			// check if the status is ok
			localStorage.setItem('token', data.token); // store the token in local storage
			alert('Login successful');
			toggle();
			navigate('/');
		} else {
			alert('Please check your Email and Password');
		}
	}

	return (
		<div>
			<FontAwesomeIcon
				className="Icon"
				icon={faUser}
				onClick={toggle}
				size="2x"
				style={{ marginLeft: '10px', marginRight: '10px', marginTop: '10Px' }}
			/>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Log In</ModalHeader>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					onSubmit={loginUser}>
					{({ isSubmitting }) => (
						<Form>
							<ModalBody>
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
							</ModalBody>
							<ModalFooter>
								<Button type="submit" color="primary" disabled={isSubmitting}>
									Login
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

export default Login;
