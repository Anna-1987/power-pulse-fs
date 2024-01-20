import { useState } from 'react';
import { ExercisesNavigation } from '../../components/ExercisesComponents/ExercisesNavigation/ExercisesNavigation';
import { BodyParts } from '../../components/ExercisesComponents/ExercisesCategories/BodyParts';
import { Muscles } from '../../components/ExercisesComponents/ExercisesCategories/Muscles'; 
import { Equipment } from '../../components/ExercisesComponents/ExercisesCategories/Equipment';
import { WaistList } from '../../components/ExercisesComponents/ExercisesWaist/WaistList/WaistList';
import {
  ExercisesTitle,
  ExercisesWrapper,
  ExercisesBox,
} from './Exercises.styled';


 const ExercisesWrap = () => {

  const [activeFilter, setActiveFilter] = useState('Body parts');
  const [exerciseName, setExerciseName] = useState('');

    const handleSetExName = name => {
    setExerciseName(name);
  };

    const handleFilterClick = filter => {
    setActiveFilter(filter);
  };

    const capitalizeFirstLeter = string => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  return (
    <ExercisesWrapper>
      <ExercisesBox>
      {activeFilter !== 'Waist' ? (
          <ExercisesTitle>Exercises</ExercisesTitle>
        ) : (
          <ExercisesTitle>{capitalizeFirstLeter(exerciseName)}</ExercisesTitle>
        )}
           <ExercisesNavigation
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        />
      </ExercisesBox>
      {activeFilter === 'Body parts' && (
         <BodyParts
           handleFilterClick={handleFilterClick}
           handleSetExName={handleSetExName}
         />
      )}   
       {activeFilter === 'Muscles' && (
         <Muscles
           handleFilterClick={handleFilterClick}
           handleSetExName={handleSetExName}
         />
      )} 
       {activeFilter === 'Equipment' && (
         <Equipment
           handleFilterClick={handleFilterClick}
           handleSetExName={handleSetExName}
         />
      )} 
        {activeFilter === 'Waist' && <WaistList exerciseName={exerciseName} />}
    </ExercisesWrapper>
  );
};

export default ExercisesWrap;
