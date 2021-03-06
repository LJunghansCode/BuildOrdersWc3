import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { StickyContainer, Sticky } from 'react-sticky';
import LoadingPlaceholder from '../loadingAnimation/loadingAnimation';
import Timeline from '../Timeline/Timeline';
import AddOrder from '../BuildSingle/AddOrder';
import TimelineControls from './TimelineControls';
import './editbuild.sass';

class EditBuild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userState.user.user,
      build: this.props.currentVisibleBuild.item.build,
      settingsOpen: false,
      redirectFlag: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.userState.user.user,
      build: nextProps.currentVisibleBuild.item.build,
      currentOrder: null,
    });
    if (nextProps.currentVisibleBuild.item.build && nextProps.userState.user.user) {
      if (nextProps.currentVisibleBuild.item.build.ownerId !== nextProps.userState.user.user._id) {
        this.setState({
          redirectFlag: true,
        });
      }
    }
  }

  toggleSettings() {
    const currentState = this.state.settingsOpen;
    this.setState({ settingsOpen: !currentState });
  }

  componentWillUnmount() {
    this.setState({
      redirectFlag: false,
    });
  }

  componentDidMount() {
    this.props.fetchById(this.props.match.params.id);
    this.setState({
      currentOrder: null,
      build: this.props.currentVisibleBuild.item.build,
      user: this.props.userState.user.user,
    });
  }

  render() {
    if (this.state.redirectFlag === true) {
      return (
        <Redirect to="/builds" />
      );
    }
    const isToggled = this.props.currentVisibleBuild.isToggledOrders;
    const { toggleEmpty } = this.props;
    const { restoreBuild } = this.props;
    const { removeItem } = this.props;
    const { addMinute } = this.props;
    const { removeMinute } = this.props;
    const toggleOrder = this.props.toggleAddingOrder;
    const { updateOrder } = this.props;
    const order = this.props.currentVisibleBuild.currentOrder;
    const { isAdding } = this.props;
    const { settingsOpen } = this.state;
    return (
      <div className="">
        <ReactTooltip place="right" effect="solid" />
        <p data-tip="Settings and Commands" className={settingsOpen ? 'is-info button settingsButton' : 'is-dark button settingsButton'} onClick={() => this.toggleSettings()}>
          <span className="icon is-small">
            <i className="fa fa-cog" />
          </span>
        </p>
        { this.state.build
          ? (
            <div className="columns is-mobile">
              { settingsOpen
                ? (
                  <StickyContainer
                    className="column is-3"
                  >
                    <Sticky>
                      {({
                          style,
                        }) => (
            <div style={style} className="controls">
                      <TimelineControls
          toggleEmpty={toggleEmpty}
          isToggled={isToggled}
          restoreBuild={restoreBuild}
          addMinute={addMinute}
          removeMinute={removeMinute}
        />
                    </div>
                        )
              }
                    </Sticky>
                  </StickyContainer>
                )
                : null
           }
              <div className={isAdding
                ? 'column is-3 timelineContainer'
                : 'column is-12 timelineContainer'}
              >

                <Timeline
                  className="timelineContainer"
                  build={this.props.currentVisibleBuild.item.build}
                  fetchById={this.props.fetchById}
                  editing
                  updateOrder={updateOrder}
                  removeItem={removeItem}
                  toggleAddingOrder={toggleOrder}
                  isAdding={isAdding}
                />
              </div>
              <StickyContainer
                className={isAdding
                  ? 'column is-7 addOrderContainer'
                  : 'column is-0 addOrderContainer'}
              >
                <Sticky>
                  {({
                    style,
                  }) => (
                    <div style={style} className="addOrder">
                        {isAdding
            ? <AddOrder updateBuild={this.props.updateBuild} />
            : null
                      }
                      </div>
                  )
              }
                </Sticky>
              </StickyContainer>
            </div>
          )
          : <LoadingPlaceholder />
          }
      </div>

    );
  }
}

export default EditBuild;
