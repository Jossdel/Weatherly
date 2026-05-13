export const ownDate = (clima) => {
  const apiTime = clima.location.localtime;

  const date = new Date(apiTime);

  const opciones = {
    weekday: "long",
    month: "long",
  };

  const dateFormatted = date.toLocaleDateString("en-US", opciones);

  const mayusDate = dateFormatted.replace(/^\w/, (l) => l.toUpperCase());

  return {
    day: date.getDate(),
    text: mayusDate,
  };
};
export const ownDateDay = (day) => {
  const apiTime = day.time;

  const date = new Date(apiTime);

  const opciones = {
    weekday: "long",
  };

  const dateFormatted = date.toLocaleDateString("en-US", opciones);

  const mayusDate = dateFormatted.replace(/^\w/, (l) => l.toUpperCase());

  return {
    text: mayusDate.slice(0, 15),
  };
};
