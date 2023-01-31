export const getDate = (UTF) => {
    let date = new Date(UTF);
    date.setDate(date.getDate());
    date = date.toISOString().slice(0, 10);
    return date.split('-').reverse().join('/');
  }

export const dayMonth = (UTF) => {
  const arrMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let day = new Date(UTF).getDate()
  let diMonth = new Date(UTF).getMonth()
  let month = arrMonth[diMonth].substring(0,3)
  let date = day +" "+ month
  return date
}