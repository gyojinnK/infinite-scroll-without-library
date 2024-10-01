export const convertDate = (date: string) => {
  return date.split("GMT")[0].trim();
};
