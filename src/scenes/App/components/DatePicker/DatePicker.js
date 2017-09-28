import React, {Component} from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import {Dropdown} from 'semantic-ui-react'
import DayPicker from 'react-day-picker';

const DatePickerContainer = styled.div`
  text-align: center;
  margin-top: 1em;
  margin-bottom: 2em;
`;

class DatePicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DatePickerContainer>
        <Dropdown text={this.props.selectedSeason} selection>
          <Dropdown.Menu>
            {this.props.seasonNames.map(season =>
              <Dropdown.Item
                key={season}
                selected={this.props.selectedSeason === season}
                onClick={this.props.handleOnSelectSeason}>{season}</Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
        <br/>
        <DayPicker
          onDayClick={
            (day, {disabled}) => {
              disabled ? null : this.props.handleOnSelectDate(moment(day).format('YYYYMMDD'))
            }
          }
          selectedDays={moment(this.props.selectedDate).toDate()}
          disabledDays={{
            before: moment(this.props.selectedSeasonCalendar.startDate).toDate(),
            after: moment(this.props.selectedSeasonCalendar.endDate).toDate()
          }}
          month={moment(this.props.selectedDate).toDate()}
          fromMonth={moment(this.props.selectedSeasonCalendar.startDate).toDate()}
          toMonth={moment(this.props.selectedSeasonCalendar.endDate).toDate()}
        />
      </DatePickerContainer>
    );
  }
}

DatePicker.propTypes = {
  selectedSeason: PropTypes.string.isRequired,
  selectedSeasonCalendar: PropTypes.object.isRequired,
  selectedDate: PropTypes.string.isRequired,
  seasonNames: PropTypes.array.isRequired,
  handleOnSelectSeason: PropTypes.func.isRequired,
  handleOnSelectDate: PropTypes.func.isRequired
};

export default DatePicker;