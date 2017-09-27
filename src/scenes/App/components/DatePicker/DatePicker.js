import React, {Component} from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Dropdown} from 'semantic-ui-react'

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
      </DatePickerContainer>
    );
  }
}

DatePicker.propTypes = {
  selectedSeason: PropTypes.string.isRequired,
  selectedDate: PropTypes.string.isRequired,
  seasonNames: PropTypes.array.isRequired,
  handleOnSelectSeason: PropTypes.func.isRequired
};

export default DatePicker;