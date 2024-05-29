export const HTTPPostClient = async (
  url: string,
  body?: string | FormData
): Promise<Response> => {
  let contentType = "";
  if (typeof body === "string") {
    contentType = "application/json";
  }
  if (body instanceof FormData) {
    contentType = "multipart/form-data";
  }

  const request: RequestInit = {
    method: "post",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": contentType,
    },
  };

  if (body) {
    request.body = body;
  }

  return await fetch(`${process.env.REACT_APP_BACKEND_URL}/${url}`, request);
};
