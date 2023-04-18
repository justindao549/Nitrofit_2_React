import {
	Container,
	Row,
	Col,
	Card,
	CardImgOverlay,
	CardBody,
	CardTitle,
	CardText,
	Button,
} from 'reactstrap';
import React from 'react';
import SignUpModal from '../components/SignUpModal';

const PricingPage = () => {
	return (
		<Container fluid style={{ position: 'relative' }}>
			<div
				style={{
					position: 'absolute',
					background:
						'linear-gradient(45deg, rgba(52, 52, 52, 0) 50%,white 50%)',
					width: '15%',
					aspectRatio: 1 / 1,
					top: 0,
					right: 0,
					padding: 0,
				}}></div>
			<Row className="mt-5 mx-5" style={{ backgroundColor: '#737373' }}>
				<h1 className=" mt-5 " style={{ color: 'white' }} id="PricingPage">
					Pricing
				</h1>
			</Row>
			<Row className="mx-5 mb-5 Left-Grey-Border">
				<h3 className="my-3" style={{ color: 'black' }}>
					Select a Membership
				</h3>

				<Col className="d-flex justify-content-center">
					<Card
						style={{
							width: '400px',
							height: '500px',
							border: 'none',
							backgroundColor: '#f4f4f4',
						}}
						col-lg-3
						d-flex
						justify-content-center
						className="text-center">
						<CardText
							style={{
								backgroundColor: '#f79737',
								height: '10px',
							}}></CardText>
						<CardTitle
							tag="h1"
							style={{ color: '#f79737', marginTop: '10px', fontSize: '40px' }}>
							Premium
						</CardTitle>
						<CardImgOverlay>
							<CardBody>
								<CardText
									tag="h1"
									style={{
										marginTop: '100px',
										color: 'black',
										fontSize: '50px',
									}}>
									<sup>$</sup>
									<large>29</large>
									<small>.99</small>
								</CardText>
								<div
									tag="h3"
									style={{
										marginTop: '50px',
										color: '#f79737',
										fontSize: '20px',
									}}>
									Monthly Recurring Payment
								</div>
								<div
									tag="h3"
									style={{
										marginTop: '50px',
										color: '#768079',
										fontSize: '20px',
										marginBottom: '50px',
									}}>
									Access to 390 clubs**
								</div>
								<SignUpModal />
							</CardBody>
						</CardImgOverlay>
					</Card>
				</Col>
				<Col className="d-flex justify-content-center">
					<Card
						style={{
							width: '400px',
							height: '500px',
							border: 'none',
							backgroundColor: '#f4f4f4',
						}}
						col-lg-3
						d-flex
						justify-content-center
						className="text-center">
						<CardText
							style={{
								backgroundColor: '#e5587b',
								height: '10px',
							}}></CardText>
						<CardTitle
							tag="h1"
							style={{ color: '#e5587b', marginTop: '10px', fontSize: '40px' }}>
							Plus
						</CardTitle>
						<CardImgOverlay>
							<CardBody>
								<CardText
									tag="h1"
									style={{
										marginTop: '100px',
										color: 'black',
										fontSize: '50px',
									}}>
									<sup>$</sup>
									<large>24</large>
									<small>.99</small>
								</CardText>
								<div
									tag="h3"
									style={{
										marginTop: '50px',
										color: '#e5587b',
										fontSize: '20px',
									}}>
									Monthly Recurring Payment
								</div>
								<div
									tag="h3"
									style={{
										marginTop: '50px',
										color: '#768079',
										fontSize: '20px',
										marginBottom: '50px',
									}}>
									Access to 390 clubs**
								</div>
								<SignUpModal />
							</CardBody>
						</CardImgOverlay>
					</Card>
				</Col>
				<Col className="d-flex justify-content-center">
					<Card
						style={{
							width: '400px',
							height: '500px',
							border: 'none',
							backgroundColor: '#f4f4f4',
						}}
						col-lg-3
						d-flex
						justify-content-center
						className="text-center">
						<CardText
							style={{
								backgroundColor: '#5dbeee',
								height: '10px',
							}}></CardText>
						<CardTitle
							tag="h1"
							style={{ color: '#5dbeee', marginTop: '10px', fontSize: '40px' }}>
							Base
						</CardTitle>
						<CardImgOverlay>
							<CardBody>
								<CardText
									tag="h1"
									style={{
										marginTop: '100px',
										color: 'black',
										fontSize: '50px',
									}}>
									<sup>$</sup>
									<large>14</large>
									<small>.99</small>
								</CardText>
								<div
									tag="h3"
									style={{
										marginTop: '50px',
										color: '#5dbeee',
										fontSize: '20px',
									}}>
									Monthly Recurring Payment
								</div>
								<div
									tag="h3"
									style={{
										marginTop: '50px',
										color: '#768079',
										fontSize: '20px',
										marginBottom: '50px',
									}}>
									Access to 390 clubs**
								</div>
								<SignUpModal />
							</CardBody>
						</CardImgOverlay>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default PricingPage;
