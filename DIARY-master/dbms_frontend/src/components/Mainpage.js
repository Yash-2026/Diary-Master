import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Mainpage() {
  const [sent, setSent] = useState();
  const [received, setReceived] = useState([]);

  const handleOnChange = (event) => {
    setSent(event.target.value);
  };

  const handleOnClick = async () => {
    if (sent) {
      const url = 'http://localhost:5000/mydiary/addmessage';
      try {
        await axios.post(url, { content: sent }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
		const response = await axios.get('http://localhost:5000/mydiary/getmessage');
		setReceived(response.data);
      } catch (error) {
        console.error(error);	
	  }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/mydiary/getmessage');
        setReceived(response.data);
		console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div className="my-container">
			<div className="row clearfix">
				<div className="col-lg-12">
					<div id="my-view" className="card chat-app">
						<div id="plist" className="people-list">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-calendar-plus" viewBox="0 0 16 16">
                                        <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                      </svg></span>
								</div>
								<input type="text" className="form-control" placeholder="Add new " />
							</div>
							<ul className="list-unstyled chat-list mt-2 mb-0">
								<li className="clearfix">
									<div className="about">
										<img src="https://www.iconpacks.net/icons/1/free-diary-icon-1027-thumb.png" alt="avatar" />                                 
									</div>
									<div>
										<h6>Tuesday</h6>
										<h6>02-05-2023</h6>
									</div>
								</li>
							</ul>
						</div>
						<div className="chat">
							<div className="chat-header clearfix">
								<div className="row">
									<div className="col-lg-6">
										<a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
											<img src="https://www.iconpacks.net/icons/1/free-diary-icon-1027-thumb.png" alt="avatar" />
										</a>
										<div className="chat-about">
											<h6 className="m-b-0">Tuesday</h6>
                                            <small>02-05-2023</small>
										</div>
									</div>
								</div>
							</div>
							<div className="overflow-auto chat-history">
								<ul className="m-b-0">
									{received && received.map((message, index) => (
									<li key={index} className="clearfix">
										<div className="message other-message float-right">{message.content}</div>
									</li>
									))}
								</ul>
							</div>
							<div className="chat-message clearfix">
								<div className="input-group mb-0">
									<div className="input-group-prepend">
									<button onClick={handleOnClick} type="button" className="btn btn-light"><span className="input-group-text"><i className="fa fa-send"></i></span></button>
									</div>
									<input onChange={handleOnChange} type="text" className="form-control" placeholder="Enter text here..." />                                    
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}
