const formatDate = string => {
  const date = new Date(string);

  const hour = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC"
  });

  const day = date.getUTCDate();
  const month = date.toLocaleString('es-ES', { month: 'short', year: '2-digit' }, { timeZone: 'UTC' });

  return `${hour} - ${day} ${month}`;
};

export default formatDate