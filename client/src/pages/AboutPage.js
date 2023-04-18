import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Pic_Pump from '../app/assets/Pump.jpg';

const AboutPage = () => {
	return (
		<Container fluid style={{ position: 'relative' }} className="mt-5">
			<Row className="mx-5" style={{ backgroundColor: '#737373' }}>
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
				<h1 className=" mt-5 " style={{ color: 'white' }} id="AboutPage">
					About Us
				</h1>
			</Row>
			<Row className="mx-5 Left-Grey-Border">
				<h3 className="my-3" style={{ color: 'black' }}>
					We Get Things Done
				</h3>
				<Col className="my-4">
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
					<br />
					<br />
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</Col>
				<Col
					lg={5}
					style={{
						position: 'relative',
					}}>
					<div
						style={{
							position: 'absolute',
							background:
								'linear-gradient(45deg, rgba(52, 52, 52, 0) 50%, white 50%)',
							width: '15%',
							aspectRatio: 1 / 1,
							top: 0,
							right: 0,
							padding: 0,
							margin: 0,
						}}></div>

					<img
						img-fluid
						src={Pic_Pump}
						width="100%"
						style={{
							flexDirection: 'row',
							justifyContent: 'flex-end',
						}}
					/>
					<div
						style={{
							position: 'absolute',
							background:
								'linear-gradient(45deg, white 50%,rgba(52, 52, 52, 0) 50%)',
							width: '15%',
							aspectRatio: 1 / 1,
							bottom: 0,
							padding: 0,
						}}></div>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutPage;
