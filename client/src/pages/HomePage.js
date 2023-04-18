import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import video from '../app/assets/ShortWorkoutVideo.mov';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {
	faYoutube,
	faTwitter,
	faInstagram,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import AboutPage from './AboutPage';

const HomePage = () => {
	return (
		<Container fluid id="HomePage">
			<Row
				style={{
					position: 'relative',
				}}>
				<video
					src={video}
					autoPlay
					loop
					muted
					style={{
						position: 'relative',
						width: '100%',
					}}></video>
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
				<div
					className="video-text "
					style={{
						position: 'absolute',
						fontSize: '20vw',
						textAlign: 'center',
					}}>
					<span className="RedAcc"> N</span>
					<span className="GreyAcc ">F</span>
				</div>
				<div
					className="video-text text-center"
					style={{
						position: 'absolute',
						bottom: '20%',
						color: 'white',
						fontSize: '1.5vmax',
					}}>
					Transform your life
				</div>
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
			</Row>
			<Row>
				<Col
					className=" d-flex justify-content-around Icon-Col"
					style={{
						marginLeft: '20%',
						marginRight: '20%',
						paddingTop: '2%',
						paddingBottom: '2%',
					}}>
					<FontAwesomeIcon className="Icon" icon={faYoutube} size="3x" />
					<FontAwesomeIcon className="Icon" icon={faTwitter} size="3x" />
					<FontAwesomeIcon className="Icon" icon={faInstagram} size="3x" />
					<FontAwesomeIcon className="Icon" icon={faFacebook} size="3x" />
				</Col>
			</Row>
			<Row className="my-5 mx-5" style={{ position: 'relative' }}>
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
			</Row>
		</Container>
	);
};

export default HomePage;
