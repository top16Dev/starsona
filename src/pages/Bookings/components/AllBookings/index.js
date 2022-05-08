import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SectionHead, EmptyText } from 'styles/CommonStyled';
import { options } from '../../constants';
import { GeneralList, LatestCard } from '../../../../components/ListCards';
import Loader from '../../../../components/Loader';
import Dropdown from '../../../../components/Dropdown';
import BookingsStyled from '../../styled';

const AllBookings = props => {
  return (
    <React.Fragment>
      <Dropdown
        rootClass="drop-down"
        secondary
        selected={props.dropValue}
        options={options}
        labelKey="title"
        valueKey="id"
        onChange={props.handleCategoryChange}
        placeHolder="Select a booking type"
      />
      <BookingsStyled.SectionHeader>
        <SectionHead>Open Bookings</SectionHead>
        {props.bookingsList.data.length > 0 && (
          <span
            role="presentation"
            className="info-text"
            onClick={props.setRequestType({
              title: 'Open Bookings',
              id: 'open',
            })}
          >
            View all <strong>{props.bookingsList.count}</strong> open bookings
          </span>
        )}
      </BookingsStyled.SectionHeader>
      {props.bookingsList.loading && <Loader />}
      {!props.bookingsList.loading && props.bookingsList.data.length === 0 && (
        <EmptyText>
          You currently do not have any recent activity. Visit &nbsp;{' '}
          <Link to="/manage/promotional-tools">Promote Yourself</Link> &nbsp; to
          get those fans booking.
        </EmptyText>
      )}
      {props.bookingsList.data.slice(0, 2).map(bookItem => (
        <GeneralList
          expiration={props.config.request_expiration_days}
          onPrimaryClick={props.onOpenClick(bookItem.booking_id)}
          key={bookItem.booking_id}
          data={bookItem}
        />
      ))}
      {
        props.recentActivity.loading || props.recentActivity.activityList.length !== 0 ? (
          <BookingsStyled.SectionHeader>
            <SectionHead className="latest-activity">Latest Activity</SectionHead>
          </BookingsStyled.SectionHeader>
        ) : null
      }
      {props.recentActivity.loading && <Loader />}
      {
        props.recentActivity.activityList.map((activity) => (
          <LatestCard activity={activity} key={activity.id} type={activity.activity_type} starMode />
        ))
      }
    </React.Fragment>
  );
};

AllBookings.propTypes = {
  bookingsList: PropTypes.object.isRequired,
  dropValue: PropTypes.object.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  onOpenClick: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
  setRequestType: PropTypes.func.isRequired,
  recentActivity: PropTypes.object.isRequired,
};

export default AllBookings;
