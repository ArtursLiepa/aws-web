const fetcher = async (path:string, options:RequestInit = {}) => {
  const url = import.meta.env.VITE_API_URL;

  console.log("VITE_API_URL:", url);
  console.log("REQUEST URL:", `${url}/${path}`);

  const response = await fetch(`${url}/${path}`, {
    ...options,

    method: options.method || "GET",
    headers: {
      ...(options.body && {
        "Content-Type": "application/json",
      }),
      ...options.headers,
    },
  });
  if (!response.ok) {
    throw new Error("Something went wrong with the connection");
  }
  return response.json();
};

export { fetcher };