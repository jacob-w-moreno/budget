import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Context from '../../Context/Context';

import EditItem from '../Budget/EditItem';
import Header from '../Header';

const BudgetEdit = (props) => {

  const context = useContext(Context);

// === === === FUNCTIONS START === === ===

  const saveEdits = () => {
    context.saveEdits();
    props.history.push('/');
  }

// === === === FUNCTIONS END === === ===

// === === === JSX START === === ===

  const whiteBar = <div className='white-bar'>
    <span className='white-bar__small'>ALLOCATED</span>
    <span className='white-bar__small big'>NAME</span>
    <span className='white-bar__small right small'>NEW</span>
    <span className='white-bar__small right small'>OLD</span>
  </div>

  const categoriesDisplay = <div className='list'>
    {context.tempCat.map((category, index) =>
      <EditItem
      name={category.name}
      editName={context.editName}
      type={category.type}
      allocated={category.allocated}
      editAllocation={context.editAllocation}
      balance={category.balance}
      oldBalance={context.categories[index].balance}
      id={category.id}
      key={category.id}
      index={index}/>
    )}
  </div>

// === === === JSX END === === ===

  return (<div id='obligatory-div'>
    <Header title="EDIT"/>
    <div id='everything-but-the-header'>
      <div id='top-stuff'>
        {whiteBar}
        {categoriesDisplay}
      </div>
      <div className='button-container'>
        <button
        className={context.percentageAllocated!==100?'transparent':null}
        disabled={context.percentageAllocated!==100}
        onClick={()=>{saveEdits()}}>
          SAVE
        </button>
      <Link to='/'>
        <button>CANCEL</button>
      </Link>
      </div>
    </div>
  </div>)
}

export default BudgetEdit;
