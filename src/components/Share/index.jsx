import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	RedditShareButton,
} from 'react-share';

import {
	FacebookIcon,
	LinkedinIcon,
	RedditIcon,
	TwitterIcon,
	WhatsappIcon,
} from "react-share";  

import './index.scss';

const Share = ({ socialConfig, tags }) => (
	<div className="post-social">
		<FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" quote={socialConfig.config.title} >
			<span className="icon">
				<FacebookIcon size={32} round={true} />
				{/* <FontAwesomeIcon icon={['fab', 'fa-facebook-f']} /> */}
			</span>
			{/* <span className="text">Facebook</span> */}
		</FacebookShareButton>
		<TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')} hashtags={tags} >
			<span className="icon">
				<TwitterIcon size={32} round={true}/>
				{/* <FontAwesomeIcon icon={['fab', 'twitter']} /> */}
			</span>
			{/* <span className="text">Twitter</span> */}
		</TwitterShareButton>
		<LinkedinShareButton url={socialConfig.config.url} className="button is-outlined is-rounded linkedin" title={socialConfig.config.title} >
			<span className="icon">
				{/* <FontAwesomeIcon icon={['fab', 'linkedin-in']} /> */}
				<LinkedinIcon size={32} round={true} />
			</span>
			{/* <span className="text">LinkedIn</span> */}
		</LinkedinShareButton>
		<RedditShareButton url={socialConfig.config.url} className="button is-outlined is-rounded reddit" title={socialConfig.config.title} >
			<span className="icon">
				<RedditIcon size={32} round={true} />
				{/* <FontAwesomeIcon icon={['fab', 'reddit-alien']} /> */}
			</span>
			{/* <span className="text">Reddit</span> */}
		</RedditShareButton>
		<WhatsappShareButton url={socialConfig.config.url} className="button is-outlined is-rounded whatsapp" title={socialConfig.config.title} >
			<span className="icon">
				{/* <FontAwesomeIcon icon={['fab', 'whatsapp']} /> */}
				<WhatsappIcon size={32} round={true} />
			</span>
			{/* <span className="text">WhatsApp</span> */}
		</WhatsappShareButton>
	</div>
);

Share.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
	tags: [],
};

export default Share;