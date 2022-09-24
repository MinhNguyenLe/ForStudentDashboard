interface FetcherProps<T> {
  prefix: string;
  method: RequestInit['method'];
  data?: T;
}

export default function reUseFetcher<T>({
  prefix,
  method,
  data
}: FetcherProps<T>) {
  const url: RequestInfo | URL = window.location.origin + prefix;

  const option: RequestInit = {
    method,
    credentials: 'include',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(data)
  };

  return fetch(url, option).then((result) => result.json());
}
