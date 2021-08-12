# flow_builder_js_helpers

```ts
import { ErrInvalidArgument } from "https://deno.land/x/flow_builder_js_helpers/errors.ts";

export function YourFunction(input) {
  if (!input.id) {
    throw new ErrInvalidArgument('input.id is required');
  }
}
```

## Error List

| `name` | `code` | `codeExplain` |
| ---- | ---- | ----------- |
| ErrInvalidArgument    | 100000 | `"ERR_INVALID_ARGUMENT"` |
| ErrFailedPreCondition | 100001 | `"ERR_FAILED_PRECONDITION"` |
| ErrOutOfRange         | 100002 | `"ERR_OUT_OF_RANGE"` |
| ErrUnAuthenticated    | 100003 | `"ERR_UNAUTHENTICATED"` |
| ErrPermissionDenied   | 100004 | `"ERR_PERMISSION_DENIED"` |
| ErrNotFound           | 100005 | `"ERR_NOT_FOUND"` |
| ErrAborted            | 100006 | `"ERR_ABORTED"` |
| ErrAlreadyExists      | 100007 | `"ERR_ALREADY_EXISTS"` |
| ErrResourceExhausted  | 100008 | `"ERR_RESOURCE_EXHAUSTED"` |
| ErrDataLoss           | 100009 | `"ERR_DATA_LOSS"` |
| ErrUnknown            | 100010 | `"ERR_UNKNOWN"` |
| ErrInternal           | 100011 | `"ERR_INTERNAL"` |
| ErrNotImplemented     | 100012 | `"ERR_NOT_IMPLEMENTED"` |
| ErrUnavailable        | 100013 | `"ERR_UNAVAILABLE"` |
| ErrDeadlineExceeded   | 100014 | `"ERR_DEADLINE_EXCEEDED"` |
