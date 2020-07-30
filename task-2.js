const getMonth = (callback) => {
  setTimeout(() => {
    // True / False
    let error = false;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry data not found", []));
    }
  }, 4000);
};

// null bernilai true
function callback(isError, month) {
  if (isError == null) {
    let data = month.map((value) => value)
    newData = data.join(', ')
    console.log(newData);
  } else {
    console.error('Error', [])
  }
}

getMonth(callback)
