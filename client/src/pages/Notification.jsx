import React, { Component } from "react";
import Navbar from "../components/Navbar/DashNav";

export default class Notification extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div class="py-5 bg-color">
					<div class="container">
						<div class="section-title">
							<h2>Notifications</h2>
						</div>
						<div class="ui very relaxed list mt-5">
							<div class="item">
								<img
									class="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/daniel.jpg"
								/>
								<div class="content">
									<a class="header">Daniel Louise</a>
									<div class="description">
										Last seen watching{" "}
										<a>
											<b>Arrested Development</b>
										</a>{" "}
										just now.
									</div>
								</div>
							</div>
							<div class="item">
								<img
									class="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/stevie.jpg"
								/>
								<div class="content">
									<a class="header">Stevie Feliciano</a>
									<div class="description">
										Last seen watching{" "}
										<a>
											<b>Bob's Burgers</b>
										</a>{" "}
										10 hours ago.
									</div>
								</div>
							</div>
							<div class="item">
								<img
									class="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/elliot.jpg"
								/>
								<div class="content">
									<a class="header">Elliot Fu</a>
									<div class="description">
										Last seen watching{" "}
										<a>
											<b>The Godfather Part 2</b>
										</a>{" "}
										yesterday.
									</div>
								</div>
							</div>
							<div class="item">
								<img
									class="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/daniel.jpg"
								/>
								<div class="content">
									<a class="header">Daniel Louise</a>
									<div class="description">
										Last seen watching{" "}
										<a>
											<b>Arrested Development</b>
										</a>{" "}
										just now.
									</div>
								</div>
							</div>
							<div class="item">
								<img
									class="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/stevie.jpg"
								/>
								<div class="content">
									<a class="header">Stevie Feliciano</a>
									<div class="description">
										Last seen watching{" "}
										<a>
											<b>Bob's Burgers</b>
										</a>{" "}
										10 hours ago.
									</div>
								</div>
							</div>
							<div class="item">
								<img
									class="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/elliot.jpg"
								/>
								<div class="content">
									<a class="header">Elliot Fu</a>
									<div class="description">
										Last seen watching{" "}
										<a>
											<b>The Godfather Part 2</b>
										</a>{" "}
										yesterday.
									</div>
								</div>
							</div>
							<div class="item">
								<img
									class="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/daniel.jpg"
								/>
								<div class="content">
									<a class="header">Daniel Louise</a>
									<div class="description">
										Last seen watching{" "}
										<a>
											<b>Arrested Development</b>
										</a>{" "}
										just now.
									</div>
								</div>
							</div>
							<div class="item">
								<img
									class="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/stevie.jpg"
								/>
								<div class="content">
									<a class="header">Stevie Feliciano</a>
									<div class="description">
										Last seen watching{" "}
										<a>
											<b>Bob's Burgers</b>
										</a>{" "}
										10 hours ago.
									</div>
								</div>
							</div>
							<div class="item">
								<img
									class="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/elliot.jpg"
								/>
								<div class="content">
									<a class="header">Elliot Fu</a>
									<div class="description">
										Last seen watching{" "}
										<a>
											<b>The Godfather Part 2</b>
										</a>{" "}
										yesterday.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
