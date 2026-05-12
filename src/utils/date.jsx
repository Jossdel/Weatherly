export const OwnDate = ({ clima }) => {
  const apiTime = clima.location.localtime;
  const date = new Date(apiTime);
  const opciones = {
    weekday: "long",
    month: "long",
  };
  let dateFormatted = new Date(apiTime).toLocaleDateString("en-US", opciones);
  const mayusDate = dateFormatted.replace(/^\w/, (l) => l.toUpperCase());
  return (
    <p>
      {date.getDate()}
      {""} {mayusDate}
    </p>
  );
};
// export const getOwnDat = (clima) => {
//   const apiTime = clima.location.localtime;
//   const date = new Date(apiTime);
//   const opciones = {
//     weekday: "long",
//     month: "long",
//   };
//   let dateFormatted = new Date(apiTime).toLocaleDateString("en-US", opciones);
//   const mayusDate = dateFormatted.replace(/^\w/, (l) => l.toUpperCase());
//   return (
//     <p>
//       {date.getDate()}
//       {""} {mayusDate}
//     </p>
//   );
// };
