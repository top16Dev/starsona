import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Scrollbars } from 'react-custom-scrollbars';
import ImageGallery from 'react-image-gallery';
import { Redirect } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/Header';
import ScrollList from '../../components/ScrollList';
import HorizontalScrollList from '../../components/HorizontalScrollList';
import ModalPopup from '../../components/RequestFlowPopup';
import Popup from '../../components/Popup';
import Loader from '../../components/Loader';
import GroupProfileStyled from './styled';
import { starProfessionsFormater } from '../../utils/dataToStringFormatter';
import { ROLES } from '../../constants/usertype';

export default class GroupProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
      memberlistModal: false,
      verticalScrollTarget: null,
      readMoreFlag: false,
      followFlag: false,
      showPopup: false,
      showReadMore: false,
    };
    this.maxDescriptionHeight = 120;
  }

  componentWillMount() {
    window.addEventListener('resize', this.onResize);
    this.props.resetGroupDetails();
    this.props.fetchGroupDetails(this.props.match.params.id.toLowerCase());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLoggedIn !== nextProps.isLoggedIn) {
      this.props.fetchGroupDetails(nextProps.match.params.id.toLowerCase());      
      if (this.state.followFlag) {
        if (nextProps.isLoggedIn) {      
          if (nextProps.groupDetails && nextProps.sessionDetails.role_details && (nextProps.sessionDetails.role_details.role_code === ROLES.star || nextProps.sessionDetails.role_details.role_code === ROLES.group)) {
            this.props.celebrityFollowStatus(nextProps.groupDetails.user_id);
          } else if (nextProps.sessionDetails.celebrity) {
            this.props.celebrityFollowStatus(nextProps.groupDetails.user_id);
          } else {
            this.props.fanFollowStatus(nextProps.groupDetails.user_id, !nextProps.groupDetails.is_follow);
          }
        }
      }
    }
    if (this.props.match.params.id.toLowerCase() !== nextProps.match.params.id.toLowerCase()) {
      this.props.resetMemberDetails();
      this.props.resetGroupDetails();
      this.props.fetchGroupDetails(nextProps.match.params.id.toLowerCase());
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showReadMore !== prevState.showReadMore || isEmpty(prevProps.groupDetails) !== isEmpty(this.props.groupDetails)) {
      this.showReadMore();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    this.props.resetGroupDetails();
    this.props.resetMemberDetails();
  }

  onResize = () => {
    this.showReadMore();
  }

  activateMenu = () => {
    this.setState({ menuActive: !this.state.menuActive });
  }

  groupFollowStatus = () => {
    this.setState({
      followFlag: true,
    });
    if (this.props.isLoggedIn) {
      if (this.props.groupDetails.id === this.props.userDetails.id) {
        this.setState({
          showPopup: true,
        });
      } else if (this.props.groupDetails && (this.props.userDetails.role_details.role_code === ROLES.star || this.props.userDetails.role_details.role_code === ROLES.group)) {
        this.props.celebrityFollowStatus(this.props.groupDetails.user_id);
      } else if (this.props.userDetails.celebrity) {
        this.props.celebrityFollowStatus(this.props.groupDetails.user_id);
      } else {
        this.props.fanFollowStatus(this.props.groupDetails.user_id, !this.props.groupDetails.is_follow);
      }
    } else {
      this.props.toggleLogin(true);
    }
  }

  toggleMemberList = (flag) => {
    this.setState({
      memberlistModal: flag,
    });
  }

  setMemberListScroll = (verticalScrollTarget) => {
    this.setState({
      verticalScrollTarget
    });
  }

  toggleDescription = (flag) => {
    this.setState({
      readMoreFlag: flag,
    });
  }

  showReadMore = () => {
    if (this.descriptionRef && this.descriptionRef.offsetHeight) {
      if (this.descriptionRef.offsetHeight > this.maxDescriptionHeight) {
        this.setState({ showReadMore: true });
      } else {
        this.setState({ showReadMore: false });
      }
    }
  }

  socialMedia = (icon) => {
    return (
      icon.social_link_value !== '' ?
        <a href={`${icon.social_link_value}`} className={icon.social_link_key} target="_blank"></a>
        : ''
    );
  }

  renderItem = (item, index) => {
    return (
      <div className="memberDetails" key={index}>
        <GroupProfileStyled.memberProfileImage src={item.avatar_photo ? item.avatar_photo.thumbnail_url : '../../assets/images/profile.png'} alt="Profile" /> 
        <div className="memberPopupDetails">
          <p className="memberName">{item.get_short_name}</p>
          <p className="jobDetails">
            {
              starProfessionsFormater(item.celebrity_profession)
            }
          </p>
        </div>
        <Link to={item.has_group_account ? `/group-profile/${item.user_id}` : `/${item.user_id}`} className="memberDetailButton">
          View
        </Link>
      </div>
    );
  };

  renderMemberDetail = (item, index) => {    
    return (
      <div className="memberDetails" key={index}>
        <Link to={item.has_group_account ? `/group-profile/${item.user_id}` : `/${item.user_id}`}>
          <GroupProfileStyled.memberProfileImage src={item.avatar_photo ? item.avatar_photo.thumbnail_url : '../../assets/images/profile.png'} alt="Profile" />
        </Link>
        <p className="memberName">{item.get_short_name}</p>
      </div>
    );
  };
  render() {
    let images = [];
    const descriptionClass = this.state.readMoreFlag ? 'groupFullDescription' : 'groupDescription';
    if (this.props.groupDetails && this.props.groupDetails.featured_photo) {
      const { featured_photo: {image_url} } = this.props.groupDetails;
      images.push({ original: image_url });
    }
    if (this.props.groupDetails && this.props.groupDetails.images) {
      const imagesArray = this.props.groupDetails.images.map(item =>
        ({ original: item.image_url }));
      images = [...images, ...imagesArray];
    }
    const memberListArray = this.props.memberListDetails.memberList;
    const descriptionLength = this.props.groupDetails.group_details?
      this.props.groupDetails.group_details.description.length:0;

    let followText = 'Follow';
    if (this.props.userDetails && this.props.userDetails.role_details && this.props.isLoggedIn && !this.props.groupDetails.group_account_follow && !this.props.groupDetails.is_follow) {
      if (this.props.userDetails.role_details.role_code === ROLES.fan && !this.props.userDetails.celebrity ) {
        followText = 'Follow';
      } else if (this.props.userDetails.role_details.role_code === ROLES.star || this.props.userDetails.celebrity  || this.props.userDetails.role_details.role_code === ROLES.group) {
        followText = 'Support Group';
      }
    }
    let followedText = '';
    if (this.props.userDetails && this.props.isLoggedIn && this.props.userDetails.role_details) {
      if (this.props.userDetails.role_details.role_code === ROLES.fan && !this.props.userDetails.celebrity && this.props.groupDetails.is_follow) {
        followedText = 'Following';
      } else if (this.props.userDetails.role_details.role_code === ROLES.star || this.props.userDetails.celebrity || this.props.userDetails.role_details.role_code === ROLES.group) {
        if (this.props.accountFollowDetails && this.props.accountFollowDetails.approved) {
          followedText = 'Member';
        } else {
          followedText = 'Requested';
        }
      }
    }

    if (this.props.groupDetailsError) {
      return <Redirect to="/not-found" />;
    }
    return (
      <GroupProfileStyled menuActive={this.props.menuActive}>
        {/* <Header
          menuActive={this.state.menuActive}
          enableMenu={this.activateMenu}
          history={this.props.history}
          disableMenu
        /> */}
        {
          this.state.memberlistModal ?
            <ModalPopup
              dotsCount={0}
              closePopUp={() => this.toggleMemberList(false)}
              smallPopup
              getPopupRef={this.setMemberListScroll}
              noScrollToTop
            >
              <GroupProfileStyled.memberListPopup>
                <div className="popupHeading">Our members</div>
                <div className="memberPopup">
                  <ScrollList
                    noDataText="No members"
                    memberList
                    renderFunction={this.renderItem}
                    dataList={memberListArray}
                    limit={this.props.memberListDetails.limit}
                    totalCount={this.props.memberListDetails.count}
                    offset={this.props.memberListDetails.offset}
                    loading={this.props.memberListDetails.loading}
                    fetchData={(offset, refresh) => this.props.fetchGroupMembers(this.props.groupDetails.user_id, offset, refresh)}
                    scrollTarget={this.state.verticalScrollTarget}
                  />
                </div>
              </GroupProfileStyled.memberListPopup>
            </ModalPopup>
        : null}
        {
          this.state.showPopup &&
          <Popup
            smallPopup
            closePopUp={() => this.setState({ showPopup: false })}
            noScrollToTop
          >
            <GroupProfileStyled.UserPopup>
              Glad you support your own group! :-)
              <GroupProfileStyled.UserButton onClick={() => this.setState({ showPopup: false })}>
                OK
              </GroupProfileStyled.UserButton>
            </GroupProfileStyled.UserPopup>
          </Popup>
        }
        {this.props.groupDetails && !this.props.detailsLoading &&
        <GroupProfileStyled.sectionWrapper>
          <GroupProfileStyled.mainSection>
            <Scrollbars>
              <ImageGallery
                items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                useBrowserFullscreen={false}
                showPlayButton={false}
                autoPlay={true}
                slideInterval={8000}
              />
              <GroupProfileStyled.profileWrapper>
                <div className="profileImageContainer">
                  <GroupProfileStyled.profileImage src={this.props.groupDetails && this.props.groupDetails.avatar_photo ? this.props.groupDetails.avatar_photo.image_url : '../../assets/images/profile.png'} alt="Profile" />
                </div>
                <div className="profileDetails">
                  <div className="groupDetailsContainer">
                    <h1>{this.props.groupDetails.first_name} {this.props.groupDetails.last_name}</h1>
                    <GroupProfileStyled.DescriptionWrapper readMore={!this.state.readMoreFlag}>
                      <span ref={(node) => { this.descriptionRef = node; }}>
                        {this.props.groupDetails.group_details?this.props.groupDetails.group_details.description: ''}
                      </span>
                    </GroupProfileStyled.DescriptionWrapper>
                    { this.state.showReadMore ? <p className="readMore" onClick={() => { this.toggleDescription(!this.state.readMoreFlag); }}>{!this.state.readMoreFlag ? 'read more' : 'read less'}</p> : ''}
                  </div>
                  <div className="socialMediaIcons">
                    <GroupProfileStyled.ButtonWrapper>
                      {(!this.props.groupDetails.group_account_follow && !this.props.groupDetails.is_follow) ?
                        <GroupProfileStyled.getStartedButton onClick={this.groupFollowStatus}>
                          {followText}
                        </GroupProfileStyled.getStartedButton>
                        : <GroupProfileStyled.followingButton onClick={this.groupFollowStatus} followedText={followedText}>
                          {followedText}
                        </GroupProfileStyled.followingButton>}
                    </GroupProfileStyled.ButtonWrapper>
                    {this.props.groupDetails.social_links && 
                      this.props.groupDetails.social_links.map( data => this.socialMedia(data)) }
                  </div>
                  <div className="memberList">
                    <h2>Our members</h2>
                    <div className="memberListContainer">
                      <div className="memberScroll">
                        <Scrollbars>
                          <HorizontalScrollList
                            noDataText="No members available"
                            memberList
                            renderFunction={this.renderMemberDetail}
                            dataList={memberListArray}
                            limit={this.props.memberListDetails.limit}
                            totalCount={this.props.memberListDetails.count}
                            offset={this.props.memberListDetails.offset}
                            loading={this.props.memberListDetails.loading}
                            fetchData={(offset, refresh) => this.props.fetchGroupMembers(this.props.groupDetails.user_id, offset, refresh)}
                          />
                        </Scrollbars>
                      </div>
                      <div className="memberlistWeb">
                        {memberListArray.length > 0 ?
                          memberListArray.slice(0, 5).map((item, index) => this.renderMemberDetail(item, index))
                          : <p>No members available</p>}
                      </div>
                    </div>
                    {this.props.memberCount > 5 ?
                      <div className="seeMemberList">
                        <span onClick={() => { this.toggleMemberList(true); }}>See all members</span>
                      </div>
                    : ''}
                  </div>
                </div>
              </GroupProfileStyled.profileWrapper>
            </Scrollbars>
          </GroupProfileStyled.mainSection>
        </GroupProfileStyled.sectionWrapper>}
        {this.props.detailsLoading && <Loader />}
      </GroupProfileStyled>
    );
  }
}
