const formatDate = (timestamp, format = 'YYYY-MM-DD HH:mm:ss') => {
    const date = new Date(timestamp * 1000); // Convert UNIX timestamp to milliseconds
  
    const pad = (num) => (num < 10 ? `0${num}` : num);
  
    const components = {
      YYYY: date.getFullYear(),
      MM: pad(date.getMonth() + 1), // Months are 0-indexed
      DD: pad(date.getDate()),
      HH: pad(date.getHours()),
      mm: pad(date.getMinutes()),
      ss: pad(date.getSeconds()),
    };
  
    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => components[match]);
  };
  
  export default formatDate;
  