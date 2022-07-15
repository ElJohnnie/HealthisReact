const searchDate = (value, endPoint) => {
  if (value.dataInicio === '' || value.dataFim === '') {
    return endPoint;
  }
  let dataFiltered = endPoint.filter((result) => {
    return (
      result.dataCalculo >= value.dataInicio &&
      result.dataCalculo <= value.dataFim
    );
  });
  return dataFiltered;
};

export default searchDate;
