import { string, func } from 'prop-types';

export const propTypes = {
  char: string.isRequired,
  handleClick: func.isRequired,
};
