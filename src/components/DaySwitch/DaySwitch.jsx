
import {
  DaySwitchArea,
  ArrowIcon,
  Button,
  ArrowArea,
} from './DaySwitch.styled';
import StyledDatepicker from './Datepicker/Datepicker';
import sprite from '../../assets/images/sprite.svg';

const DaySwitch = () => {
  return (
    <DaySwitchArea>
      <StyledDatepicker />
      <ArrowArea>
        <Button type="button">
          <ArrowIcon iconColor="#efede8">
            <use href={`${sprite}#icon-left`} />
          </ArrowIcon>
        </Button>
        <Button type="button">
          <ArrowIcon iconColor="#efede8">
            <use href={`${sprite}#icon-right`} />
          </ArrowIcon>
        </Button>
      </ArrowArea>
    </DaySwitchArea>
  );
};

export default DaySwitch;