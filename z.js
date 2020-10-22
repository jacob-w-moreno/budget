const dollars = categories.filter(element => element.type === "$").map(category => {
  return ( <DollarEdit
    name={category.name}
    editName={editName}
    type={category.type}
    allocated={category.allocated}
    editAllocation={editAllocation}
    balance={category.balance}
    id={category.id}
    key={category.id}
  /> )
})
