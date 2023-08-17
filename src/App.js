import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Notification from './Components/Notification';

function App() {
  	const [ data, setData ] = useState([]);
	const [ notReadCount, setNotReadCount ] = useState(0);

	//get notifications data
	useEffect(() => {
		axios.get(`./data.json`).then((res) => {
		  	setData(res.data);
			setNotReadCount(res.data.filter((item) => item.read === false).length);
		});
	}, []);

	//mark all read
	const allRead = () => {
		data.forEach((item) => {
			item.read = true;
			setNotReadCount(0)
		})
	}

	//set single notif read
	const read = (index) => {
		data[index].read = true;
		setNotReadCount(notReadCount-1);
	}

	return (
		<div className="App">
			<div className='container'>
				<div className='container-header'>
					<h1>Notifications {notReadCount > 0 ? <span className='notif-count'>{notReadCount}</span> : ""}</h1>
					<button onClick={() => allRead()}>Mark all as read</button>
				</div>
				<div className='notifications'>
				  	{ data && data.length > 0 && data.map((item, index) => {
						return(<>
							<div
								key={index}
								onClick={() => read(index)}>
								<Notification data={item}/>	
							</div>
						</>)						
					})}
				</div>
			</div>
			<div class="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
				Coded by <a href="https://www.frontendmentor.io/profile/nuria1110">Nuria Torres</a>.
			</div>
		</div>
	);

}

export default App;