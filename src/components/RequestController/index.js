import React from 'react';
import { Link } from 'react-router-dom';
import FooterDiv from './styled';


export const RequestController = props => (
  <FooterDiv>
    {props.availability && props.remainingBookings > 0 ?
      <FooterDiv.BookingLeft>
        <strong>{props.remainingBookings}</strong> {props.remainingBookings === '1' ? 'Booking Left' : 'Bookings Left'}
      </FooterDiv.BookingLeft>
      :
      <FooterDiv.BookingLeft>
        <strong>Currently unavailable</strong>
      </FooterDiv.BookingLeft>
    }
    <FooterDiv.BookingPrice>
      <strong>{props.remainingBookings > 0 ? `$ ${props.rate}` : null}</strong>
    </FooterDiv.BookingPrice>
    <FooterDiv.Button onClick={() => props.handleRequest()}>{props.availability && props.remainingBookings > 0 ? 'Request a Video' : 'Alert Me'}</FooterDiv.Button>
  </FooterDiv>
        );
