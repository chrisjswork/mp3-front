import React, { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {Table} from 'react-bootstrap'

const MyComponent = ({listtags, setModel}) => {
	return (
		<div>
			<Table striped bordered hover>
				<div className="audio">
					<div className='row justify-content-between'>
						<div className='col-md-4'>
						<p className='audio-title'>{listtags?.title}</p>
						<p className='audio-album'>{listtags?.album}</p>
						<ReactAudioPlayer
							src='http://localhost:8000/assets/FalakTuGara.mp3'
							autoPlay
							controls
						/>
						</div>
						<div className='col-md-4'>
							<button onClick={setModel} className='btn btn-success'>Update Tag</button>
						</div>
					</div>
				</div>
			</Table>
		</div>
	);
};

export default MyComponent;
