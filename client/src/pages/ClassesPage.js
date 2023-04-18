import {
	Container,
	Row,
	Col,
	Card,
	CardImg,
	CardImgOverlay,
	CardBody,
	CardLink,
	CardTitle,
	CardText,
} from 'reactstrap';
import React from 'react';
import Pic_HIIT from '../app/assets/HIIT.jpg';
import Pic_Bicep from '../app/assets/muscular-young-gentleman-pumping-up-biceps.jpg';
import Pic_Cardio from '../app/assets/Cardio.jpg';
import Pic_Boxing from '../app/assets/man-training-with-boxing-gloves-medium-shot.jpg';

const ClassesPage = () => {
	return (
		<Container fluid style={{ position: 'relative' }} className="mt-5">
			<Row className=" mx-5" style={{ backgroundColor: '#f25022' }}>
				<div
					style={{
						position: 'absolute',
						background:
							'linear-gradient(135deg, white 50%, rgba(52, 52, 52, 0) 50% )',
						width: '10%',
						aspectRatio: 1 / 1,
						top: 0,
						left: 0,
						padding: 0,
						margin: 0,
					}}></div>

				<h1
					className=" mt-5 text-end"
					style={{ color: 'white' }}
					id="ClassesPage">
					Classes
				</h1>
			</Row>
			<Row className="mx-5 Right-Red-Border">
				<h3 className="my-3 text-end" style={{ color: 'black' }}>
					Join The Squad
				</h3>
				<p className="text-end my-4">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>
				<Col className="d-flex justify-content-center my-5">
					<Card
						style={{
							width: '25rem',
							border: 'none',
						}}
						col-lg-3
						d-flex
						justify-content-center
						className="text-center">
						<CardTitle tag="h1">
							01
							<span tag="h2" style={{ color: 'black' }}>
								{' '}
								HIIT
							</span>
						</CardTitle>
						<CardImg alt="Card image cap" src={Pic_HIIT} />
						<CardImgOverlay>
							<CardBody>
								<CardText tag="h5" style={{ marginTop: '150px' }}>
									<small>High Intensity cardio for fast fat loss</small>
								</CardText>
							</CardBody>
						</CardImgOverlay>
					</Card>
				</Col>
				<Col className="d-flex justify-content-center  my-5">
					<Card
						style={{
							width: '25rem',
							border: 'none',
						}}
						col-lg-3
						d-flex
						justify-content-center
						className="text-center">
						<CardTitle tag="h1">
							02
							<span tag="h2" style={{ color: 'black' }}>
								{' '}
								Build
							</span>
						</CardTitle>
						<CardImg alt="Card image cap" src={Pic_Bicep} />
						<CardImgOverlay>
							<CardBody>
								<CardText tag="h5" style={{ marginTop: '150px' }}>
									<small>Strength training for mass</small>
								</CardText>
							</CardBody>
						</CardImgOverlay>
					</Card>
				</Col>
				<Col className="d-flex justify-content-center  my-5">
					<Card
						style={{
							width: '25rem',
							border: 'none',
						}}
						col-lg-3
						d-flex
						justify-content-center
						className="text-center">
						{' '}
						<CardTitle tag="h1">
							03{' '}
							<span tag="h2" style={{ color: 'black' }}>
								{' '}
								Speed
							</span>
						</CardTitle>
						<CardImg alt="Card image cap" src={Pic_Cardio} />
						<CardImgOverlay>
							<CardBody>
								<CardText tag="h5" style={{ marginTop: '150px' }}>
									<small>Speed and endurance for race day</small>
								</CardText>
							</CardBody>
						</CardImgOverlay>
					</Card>
				</Col>
				<Col className="d-flex justify-content-center  my-5">
					<Card
						style={{
							width: '25rem',
							border: 'none',
						}}
						col-lg-3
						d-flex
						justify-content-center
						className="text-center">
						<CardTitle tag="h1">
							04
							<span tag="h2" style={{ color: 'black' }}>
								{' '}
								Boxing
							</span>
						</CardTitle>

						<CardImg alt="Card image cap" src={Pic_Boxing} />
						<CardImgOverlay>
							<CardBody>
								<CardText tag="h5" style={{ marginTop: '150px' }}>
									<small>Combat Cardio</small>
								</CardText>
							</CardBody>
						</CardImgOverlay>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default ClassesPage;
