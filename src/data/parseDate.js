const parseDateExtra = (date) => {
    let newDate = new Date(date);
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(newDate) ;
  };

  export default parseDateExtra;