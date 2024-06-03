export const HTTPDeleteClient = async (url: string) => {
  const request: RequestInit = {
    method: "delete",
    mode: "cors",
    credentials: "include",
  };

  return await fetch(`${process.env.REACT_APP_BACKEND_URL}/${url}`, request);
};
