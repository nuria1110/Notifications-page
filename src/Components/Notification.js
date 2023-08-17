import React from 'react';
import './notif-style.css';

function Notification(props) {

    const notif = props.data;

    return (<>
        <div className={`notification ${notif.read ? ("") : ("notread-bg")}`}>
            <img src={notif.icon} alt='user icon'/>
            <div className='notif-inner'>
                <p className={`${notif.read ? ("") : ("notread-dot")}`}>
                    <span className='notif-name'>{notif.name}</span>
                    &nbsp;&nbsp;{notif.action} 
                    {notif.post ? <span className='notif-post'>&nbsp;&nbsp;{notif.post}</span> : ""}
                    {notif.group ? <span className='notif-group'>&nbsp;&nbsp;{notif.group}</span> : ""}
                </p>
                <p className='notif-time'>{notif.time}</p>

                {notif.message ? <p className='notif-message'>{notif.message}</p> : ""}
            </div>
            
            {notif.picture ? <img src={notif.picture} className='notif-picture' alt='picture'/> : ""}
        </div>      
    </>)
  
}

export default Notification;