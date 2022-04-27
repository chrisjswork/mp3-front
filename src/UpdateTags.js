import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const MyComponent = ( props ) => {
	const [show, setShow] = useState(false);
	
	const handleClose = () => props.updateModel();
	const handleShow = () => setShow(true);
	const [values, setValues] = useState({
		album: props.listtags.album,
		cover: props.listtags.cover,
		artist: props.listtags.artist,
		title: props.listtags.title,
		composer: props.listtags.composer,
		genre: props.listtags.genre,
		copyright: props.listtags.copyright,
	});
	
	const handleSubmit = async ( event ) => {
		axios.post(`${process.env.React_App_API_PATH}/update-tags`, {...values})
			.then(data => console.log(data));
		event.preventDefault();
		props.updateModel();
		window.location.reload()
	};
	return (
		<div>
			<Button variant="primary" onClick={handleShow}>
				Launch static backdrop modal
			</Button>
			
			<Modal
				show={true}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Update Mp3 ID3 Tags</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<label>
							Album:
							<input type="text" className="form-control" value={values.album} onChange={( e ) => setValues({...values, album: e.target.value})}/>
						</label>
						<label>
							Title:
							<input type="text" className="form-control" value={values.title} onChange={( e ) => setValues({...values, title: e.target.value})}/>
						</label>
						<label>
							Artist:
							<input type="text" className="form-control" value={values.artist} onChange={( e ) => setValues({...values, artist: e.target.value})}/>
						</label>
						<label>
							Genre:
							<input type="text" className="form-control" value={values.genre} onChange={( e ) => setValues({...values, genre: e.target.value})}/>
						</label>
						<label>
							Composer:
							<input type="text" className="form-control" value={values.composer} onChange={( e ) => setValues({...values, composer: e.target.value})}/>
						</label>
						<label>
							Copyright:
							<input type="text" className="form-control" value={values.copyright} onChange={( e ) => setValues({...values, copyright: e.target.value})}/>
						</label>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSubmit}>Submit</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default MyComponent;
