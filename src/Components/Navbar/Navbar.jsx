import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import ScreenSelector from '../ScreenSelector/ScreenSelector';
import ResetScreen from '../ResetScreen/ResetScreen';
import AddFavorite from '../AddFavourite/AddFavourite';
import DarkSwitch from '../DarkSwitch/DarkSwitch';

const Navbar = () => {
  return (
    <div className='flex w-full justify-between'>
      <SearchBox />
      <ScreenSelector />
      <ResetScreen />
      <AddFavorite />
      <DarkSwitch />
    </div>
  );
};

export default Navbar;
