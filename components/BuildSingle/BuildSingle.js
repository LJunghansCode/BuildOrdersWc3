import React, {Component} from 'react';
import Timeline from './../Timeline/Timeline'
import path from 'path';
import {Redirect, Link} from 'react-router-dom';
import LoadingPlaceholder from './../loadingAnimation/loadingAnimation';
import CurrentOrder from './CurrentOrder';
import ScrollUpButton from "react-scroll-up-button";
import {StickyContainer, Sticky} from 'react-sticky';
// import './buildSingle.sass';

class BuildSingle extends Component {

		componentWillMount() {
				this
						.props
						.fetchById(this.getIdFromPathname());
		}
		getIdFromPathname() {
				return (this.props.match.params.id);
		}
		render() {
				const build = this.props.currentVisibleBuild.item.build,
						state = this.props.currentVisibleBuild,
						user = this.props.userState.user,
						updateOrder = this.props.updateCurrentOrder,
						order = this.props.currentVisibleBuild.currentOrder;
				if (build) {
						const race = this.props.currentVisibleBuild.item.build.race,
									opposing = this.props.currentVisibleBuild.item.build.opposing_race;
						const iconString = `https://s3.us-west-2.amazonaws.com/needmorelumberassets/icons/${race}.jpg`
						return (
								<div className="section">
										<div className="columns">
										<StickyContainer className="column is-5">
														<Sticky >
																{({
																		style,
																		isSticky,
																		wasSticky,
																		distanceFromTop,
																		distanceFromBottom,
																		calculatedHeight,
																		topOffset
																}) => {
																		return (
																				<div className="sideMenu" style={style}>
																						<section className="">
																												<figure className="image raceImage is-128x128">
																														<img className="" src={iconString}/>
																												</figure>
																														<h1 className="buildName">
																																{this.props.currentVisibleBuild.item.build.name}
																														</h1>
																														<p className="">
																																{race} vs. {opposing}
																														</p>
																												<div className="buttons">
																													<Link to={this.props.match.url + '/playing'}>
																															<button className="button is-block is-dark is-large">Real Time walkthrough</button>
																													</Link>
																													{user.user
																															? user.user._id === this.props.currentVisibleBuild.item.build.ownerId
																																	? 
																																		<Link to={this.props.match.url + '/edit'}>
																																				<button className="button is-block is-dark is-large">Edit</button>
																																		</Link>
																																	: null
																															: null
																													}
																											</div>		
																						</section>
																						{order
																								? <CurrentOrder data={order} race={race}/>
																								: <CurrentOrder data={false}/>
}
																				</div>
																		)
																}
}
														</Sticky>
												</StickyContainer>
												<Timeline
														className="column"
														build={this.props.currentVisibleBuild.item.build}
														updateBuild={this.props.updateBuild}
														toggleEmpty={this.props.toggleEmpty}
														updateOrder={updateOrder}
														fetchById={this.props.fetchById}
												/>
											
										</div>
										<ScrollUpButton />
								</div>
						)
				} else {
						switch (state.isFetching) {
								case true:
								default:
										return (<LoadingPlaceholder/>)
								case false:
										return (
												<div>Could Not find build, sorry!</div>
										)
						}
				}
		}
}

export default BuildSingle;