import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer () {
	return (
		<div className="Footer">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4>Sample Name</h4>
                                    <ul className="list-unstyled">
                                        <li>01-1234567</li>
                                        <li>Dundalk, Co.Louth</li>
                                        <li>Ireland</li>
                                    </ul>
                            </div>
                            
                            <div className="col">
                                <h4>Stuff</h4>
                                    <ul className="list-unstyled">
                                        <li>Stuff</li>
                                        <li>Stuff</li>
                                        <li>Stuff</li>
                                    </ul>
                            </div>
                            
                            <div className="col">
                                <h4>Stuff</h4>
                                    <ul className="list-unstyled">
                                        <li><FacebookIcon/></li>
                                        <li><TwitterIcon/></li>
                                        <li><InstagramIcon/></li>
                                    </ul>
                            </div>
                        </div>
                        
                        <div className="row">
                            <p className="col-sm">
                                This is My Footer Component &copy;{new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                    
			
		</div>
	);
}

export default Footer;
