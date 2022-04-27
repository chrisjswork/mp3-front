import React, { useState, useEffect } from 'react';
import { ReactMic } from "react-mic";
import ReactAudioPlayer from "react-audio-player";
import {Button} from "react-bootstrap"
import UpdateTags from './UpdateTags'
import ListTags from './ListTags'
import axios from 'axios';


const AudioRecorder = () => {
	const [model,setModel]=useState(false);
	const [tags,setTags] = useState(	{album: null, cover: null, artist: null, title: null,composer:null,genre:null,copyright:null});
	const [listModel,setListModel]=useState(false);
	useEffect(()=>{
		fetchTags()
	},[]);
	const fetchTags = async ( event ) => {
		axios.get(`${process.env.React_App_API_PATH}/get-tags`)
			.then(data => {
				const tags =data.data;
				setTags({
					album: tags.album,
					cover: tags.cover,
					artist: tags.artist,
					title: tags.title,
					composer:tags.composer,
					genre:tags.genre,
					copyright:tags.copyright});
			});
		setListModel(true);
		
	};
  return (
    <div className="row container" style={{width: '30%', marginLeft: '40rem'}}>
		<div className="row">	
			<h5 className='text-center text-white m-3'>MP3 Audio Player</h5>	
		</div>
		{
			model &&
				<UpdateTags updateModel={()=>setModel(false)} listtags={tags}/>
		}
		
		{
			listModel && <ListTags setModel={()=>setModel(true)} listtags={tags}/>
			
		}
	</div>
  );
};

export default AudioRecorder;
