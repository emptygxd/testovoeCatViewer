export type catType = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export const catApi = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const data: catType[] = await res.json();
  return data[0];
};
