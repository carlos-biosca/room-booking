const formatDate = string => {
  const date = new Date(string);

  const hour = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC"
  });

  const day = `${date.getUTCDate()}/${date.getUTCMonth() + 1
    }/${date.getUTCFullYear()}`;

  return `${hour} ${day}`;
};

export default formatDate