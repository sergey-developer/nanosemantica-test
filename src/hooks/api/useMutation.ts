import {useCallback, useState} from "react";

import {HttpMethods} from "../../constants/api/common";
import {ErrorResponse, SuccessResponse} from "../../types/api/response";
import {isErrorResponse} from "../../utils/api/errorResponse";
import {MaybeNull} from "../../types/utils";

interface UseMutationResult<Response, Request> {
  data?: SuccessResponse<Response> | null,
  error?: ErrorResponse | null,
  loading: boolean,
  mutation: (body: Request) => Promise<SuccessResponse<Response> | null>
}

const useMutation = <Response, Request>(url: string, method: HttpMethods = HttpMethods.POST): UseMutationResult<Response, Request> => {
  const [data, setData] = useState<MaybeNull<SuccessResponse<Response>>>(null);
  const [error, setError] = useState<MaybeNull<ErrorResponse>>(null);
  const [loading, setLoading] = useState(false);

  const mutation = useCallback<UseMutationResult<Response, Request>['mutation']>(async (body) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (isErrorResponse(responseData)) {
          setError(responseData);
        }

        return null;
      }

      setData(responseData as SuccessResponse<Response>);
      return responseData as SuccessResponse<Response>;
    } catch (err) {
      if (isErrorResponse(err)) {
        setError(err);
      }

      return null;
    } finally {
      setLoading(false);
    }
  }, [url, method]);

  return {data, error, loading, mutation};
};

export default useMutation