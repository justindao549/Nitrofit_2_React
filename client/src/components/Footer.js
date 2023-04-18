import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {
	faYoutube,
	faTwitter,
	faInstagram,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { React } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
	return (
		<Container fluid className="footer text-center">
			<Row style={{ paddingTop: '20px' }}>
				<Col>
					<h5 style={{ fontSize: '15px' }}>©️ Justin Dao</h5>
				</Col>
				<Col>
					<FontAwesomeIcon className="Icon" icon={faYoutube} size="2x" />
					<FontAwesomeIcon className="Icon" icon={faTwitter} size="2x" />
					<FontAwesomeIcon className="Icon" icon={faInstagram} size="2x" />
					<FontAwesomeIcon className="Icon" icon={faFacebook} size="2x" />
				</Col>
				<Col>
					<h5 style={{ fontSize: '15px' }}>Free Trial</h5>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
