import React from 'react';
import { connect } from 'react-redux';
import Loader from '../../Loader';
import Popup from '../../Popup';
import AlertView from '../../AlertView';
import { getGroupsList } from '../../../services/groupManagement';
import { createGroupNotification } from '../../../services/userRegistration';
import IndustryStyled from '../styled';

import { fetchGroupTypes } from '../../../store/shared/actions/getGroupTypes';

class GroupSelectionComponent extends React.Component {
  state = {
    groupsList: [],
    listLoading: true,
    addGroup: false,
    filterProfessions: [],
    categorySelected: null,
    searchValue: '',
    alertText: '',
    searchProfessions: [],
    newGroupDetails: {
      type: '',
      name: '',
    },

    selectedProfessions: this.props.selectedProfessions,
  }

  componentDidMount() {
    this.fetchGroupsList();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let { filterProfessions, searchProfessions } = prevState;
    if (prevState.searchValue !== '') {
      let newProfessions = [];
      prevState.groupsList.forEach((profession) => {
        let filteredChildProfessions = [];
        if (profession.group_name.toLowerCase().indexOf(prevState.searchValue) > -1) {
          filteredChildProfessions = profession.groups;
        } else {
          filteredChildProfessions = profession.groups.filter(childProfession => childProfession.account_name.toLowerCase().indexOf(prevState.searchValue) > -1);
        }
        if (filteredChildProfessions.length) {
          newProfessions = [...newProfessions, ...filteredChildProfessions];
        }
      });
      searchProfessions = newProfessions;
    } else {
      filterProfessions = prevState.groupsList;
    }
    return ({ filterProfessions, searchProfessions });
  }

  onSelectionComplete = () => {
    const { selectedProfessions } = this.state;
    this.props.onSelectionComplete(selectedProfessions);
  }

  getSearchValue = (event) => {
    const searchValue = event.target.value.toLowerCase();
    this.setState({ searchValue });
  }

  sendCreateGroupNotify = () => {
    const { newGroupDetails } = this.state;
    createGroupNotification(newGroupDetails.type, newGroupDetails.name, newGroupDetails.comments)
      .then((resp) => {
        if (resp.success) {
          this.toggleAddGroup();
          this.setState({
            alertText: resp.data.message,
            newGroupDetails: {
              type: '',
              name: '',
            },
          });
        }
      });
  }

  handleGroupData = type => (event) => {
    let { newGroupDetails } = this.state;
    newGroupDetails[type] = event.target.value;
    this.setState({ newGroupDetails });
  }

  toggleAddGroup = () => {
    const { addGroup } = this.state;
    if (!addGroup && !this.props.groupTypes.length) {
      this.props.fetchGroupTypes();
    }
    this.setState({
      addGroup: !addGroup,
      newGroupDetails: {
        type: '',
        name: '',
      },
    });
  }

  fetchGroupsList = () => {
    getGroupsList()
      .then((resp) => {
        this.setState({ listLoading: false });
        if (resp.success) {
          this.setState({ groupsList: resp.data.group_accounts });
        }
      });
  }

  updateSelectedCategory = (profession) => {
    this.setState({ categorySelected: profession });
  }

  selectProfession = (profession) => {
    const { selectedProfessions } = this.state;
    if (selectedProfessions.length !== this.props.limit) {
      this.setState({ selectedProfessions: [...selectedProfessions, profession], searchValue: '' });
    }
  }

  removeSelectedProfession = (id) => {
    let { selectedProfessions } = this.state;
    selectedProfessions = selectedProfessions.filter(profession => profession.group_id !== id);
    this.setState({ selectedProfessions });
  }

  clearSearch = () => {
    this.setState({ searchValue: '' });
  }

  closeAlertView = () => {
    this.setState({
      alertText: '',
    });
  }

  renderAddGroup = () => {
    const { newGroupDetails } = this.state;
    return (
      <IndustryStyled.AddGroupWrapper>
        <IndustryStyled.HeaderWrapper>
          <IndustryStyled.BackButton onClick={this.toggleAddGroup} />
          <IndustryStyled.HeaderContent>
            <IndustryStyled.HeaderTextWrapper>
              <IndustryStyled.HeaderText>
                Add new group
              </IndustryStyled.HeaderText>
            </IndustryStyled.HeaderTextWrapper>
          </IndustryStyled.HeaderContent>
        </IndustryStyled.HeaderWrapper>
        <IndustryStyled.AddGroupContent>
          <IndustryStyled.Select
            onChange={this.handleGroupData('type')}
          >
            <option value="">Select group type</option>
            {
              this.props.groupTypes.map(groupType => (
                <option key={groupType.id} value={groupType.id}>{groupType.group_name}</option>
              ))
            }
          </IndustryStyled.Select>
          <IndustryStyled.InputArea
            type="text"
            small
            placeholder="Enter group name"
            value={newGroupDetails.name}
            onChange={this.handleGroupData('name')}
          />
          <IndustryStyled.ControlWrapper>
            <IndustryStyled.ControlButton
              disabled={newGroupDetails.name === '' || newGroupDetails.type === ''}
              onClick={this.sendCreateGroupNotify}
            >
              Submit
            </IndustryStyled.ControlButton>
          </IndustryStyled.ControlWrapper>
        </IndustryStyled.AddGroupContent>
      </IndustryStyled.AddGroupWrapper>
    );
  }

  renderProfessionList = () => {
    return this.state.filterProfessions.map(profession => (
      <IndustryStyled.ListItem
        onClick={() => this.updateSelectedCategory(profession)}
        key={profession.group_name}
      >
        <IndustryStyled.ListItemContent>{profession.group_name}</IndustryStyled.ListItemContent>
        <IndustryStyled.ForwardButton />
      </IndustryStyled.ListItem>
    ));
  }

  renderSelectedProfessions = () => {
    const { selectedProfessions } = this.state;
    return selectedProfessions.map(profession => (
      <IndustryStyled.selectedItem key={profession.group_id}>
        {profession.account_name}
        <IndustryStyled.CloseButton
          onClick={() => this.removeSelectedProfession(profession.group_id)}
        />
      </IndustryStyled.selectedItem>
    ));
  }

  renderSubProfessions = (profession) => {
    const { selectedProfessions } = this.state;
    const filteredProfessions = profession.groups.filter((childProfession) => {
      const professionSelected = selectedProfessions.find(item => item.group_id === childProfession.group_id);
      return !professionSelected;
    });
    return filteredProfessions.map(childProfession => (
      <IndustryStyled.ListItem
        onClick={() => this.selectProfession(childProfession)}
        childItem
        key={childProfession.group_id}
      >
        <IndustryStyled.ItemImage imageUrl={childProfession.avatar_photo && childProfession.avatar_photo.thumbnail_url} />
        <IndustryStyled.ListItemContent>{childProfession.account_name}</IndustryStyled.ListItemContent>
      </IndustryStyled.ListItem>
    ));
  }

  renderProfessions = () => {
    const { categorySelected, searchValue, searchProfessions, selectedProfessions } = this.state;
    if (searchValue !== '') {
      const newSearchProfessions = searchProfessions.filter((childProfession) => {
        const professionSelected = selectedProfessions.find(item => item.group_id === childProfession.group_id);
        return !professionSelected;
      });
      return (
        <IndustryStyled.ListContainer>
          <IndustryStyled.ListWrapper>
            {
                newSearchProfessions.map(childProfession => (
                  <IndustryStyled.ListItem
                    onClick={() => this.selectProfession(childProfession)}
                    key={childProfession.id}
                  >
                    <IndustryStyled.ListItemContent>{childProfession.account_name}</IndustryStyled.ListItemContent>
                  </IndustryStyled.ListItem>
                ))
            }
          </IndustryStyled.ListWrapper>
        </IndustryStyled.ListContainer>
      );
    }
    return (
      <React.Fragment>
        {
            categorySelected ?
              <IndustryStyled.InnerCategoryWrapper>
                <IndustryStyled.BackButton onClick={() => this.updateSelectedCategory(null)} />
                <IndustryStyled.ListContainer>
                  <IndustryStyled.ListWrapper>
                    <IndustryStyled.ListItemHeading selected>{categorySelected.group_name}</IndustryStyled.ListItemHeading>
                    {
                      this.renderSubProfessions(categorySelected)
                    }
                  </IndustryStyled.ListWrapper>
                </IndustryStyled.ListContainer>
              </IndustryStyled.InnerCategoryWrapper>
            :
              <IndustryStyled.ListContainer>
                <IndustryStyled.ListWrapper>
                  {
                    this.renderProfessionList()
                  }
                </IndustryStyled.ListWrapper>
              </IndustryStyled.ListContainer>
        }
      </React.Fragment>
    );
  }

  render() {
    const { searchValue, listLoading, addGroup, alertText } = this.state;
    const { onClose } = this.props;
    if (addGroup) {
      return this.renderAddGroup();
    }
    return (
      <IndustryStyled>
        {
          alertText !== '' &&
            <Popup
              smallPopup
              closePopUp={this.closeAlertView}
            >
              <AlertView
                message={alertText}
                closePopup={this.closeAlertView}
              />
            </Popup>
        }
        <IndustryStyled.HeaderWrapper>
          <IndustryStyled.BackButton onClick={onClose} />
          <IndustryStyled.HeaderContent>
            <IndustryStyled.HeaderTextWrapper>
              <IndustryStyled.HeaderText>
                Are you a part of a group?
              </IndustryStyled.HeaderText>
              <IndustryStyled.CompleteButton onClick={this.onSelectionComplete}>Save</IndustryStyled.CompleteButton>
            </IndustryStyled.HeaderTextWrapper>
            <IndustryStyled.Description>
              Choose the groups you’re associated with
            </IndustryStyled.Description>
            <IndustryStyled.SearchWrapper>
              <IndustryStyled.SearchField
                placeholder="Search for your group"
                value={searchValue}
                onChange={this.getSearchValue}
              />
              {
                searchValue !== '' ?
                  <IndustryStyled.ClearButton onClick={this.clearSearch} />
                : null
              }
            </IndustryStyled.SearchWrapper>
            <IndustryStyled.ListWrapper>
              {
                this.renderSelectedProfessions()
              }
            </IndustryStyled.ListWrapper>
          </IndustryStyled.HeaderContent>
        </IndustryStyled.HeaderWrapper>
        {
          listLoading ?
            <IndustryStyled.LoaderWrapper>
              <Loader />
            </IndustryStyled.LoaderWrapper>
          :
            <React.Fragment>
              {
                this.renderProfessions()
              }
              <IndustryStyled.NewItemAdd>
                Don't see your group? <IndustryStyled.HighlightText onClick={this.toggleAddGroup}>Add it here</IndustryStyled.HighlightText>
              </IndustryStyled.NewItemAdd>
            </React.Fragment>
        }
      </IndustryStyled>
    );
  }
}
const mapStateToProps = state => ({
  groupTypes: state.groupTypes.data,
});

const mapDispatchToProps = dispatch => ({
  fetchGroupTypes: () => dispatch(fetchGroupTypes()),
});

export const GroupSelection = connect(mapStateToProps, mapDispatchToProps)(GroupSelectionComponent);

