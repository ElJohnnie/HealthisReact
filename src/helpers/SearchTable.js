const searchTable = (value, endPoint) => {
  const filteredData = [];

  if (value.lenght === 0) {
    return endPoint;
  }
  const newValue = value.toLowerCase();
  var isValid = false;

  Object.keys(endPoint).forEach((data) => {
    Object.keys(endPoint[data]).forEach((dados) => {
      if (
        endPoint[data][dados] !== undefined &&
        endPoint[data][dados] != null
      ) {
        var nome = endPoint[data][dados].toString().toLowerCase();
        if (nome.includes(newValue)) {
          isValid = true;
        }
      }
    });
    if (isValid) {
      filteredData.push(endPoint[data]);
      isValid = false;
    }
  });
  return filteredData;
};

export default searchTable;
