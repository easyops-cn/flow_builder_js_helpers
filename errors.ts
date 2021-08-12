function ErrorFactory(name: string, code: number, codeExplain: string) {
  const clazz = class extends Error {
    readonly code: number;
    readonly codeExplain: string;

    constructor(message: string) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(message);
      this.name = name;

      // Maintains proper stack trace for where our error was thrown (only available on V8)
      // istanbul ignore else
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, clazz);
      }

      this.code = code;
      this.codeExplain = codeExplain;
    }
  };
  return clazz;
}

export const ErrInvalidArgument = ErrorFactory("ErrInvalidArgument", 100000, "ERR_INVALID_ARGUMENT");
export const ErrFailedPreCondition = ErrorFactory("ErrFailedPreCondition", 100001, "ERR_FAILED_PRECONDITION");
export const ErrOutOfRange = ErrorFactory("ErrOutOfRange", 100002, "ERR_OUT_OF_RANGE");
export const ErrUnAuthenticated = ErrorFactory("ErrUnAuthenticated", 100003, "ERR_UNAUTHENTICATED");
export const ErrPermissionDenied = ErrorFactory("ErrPermissionDenied", 100004, "ERR_PERMISSION_DENIED");
export const ErrNotFound = ErrorFactory("ErrNotFound", 100005, "ERR_NOT_FOUND");
export const ErrAborted = ErrorFactory("ErrAborted", 100006, "ERR_ABORTED");
export const ErrAlreadyExists = ErrorFactory("ErrAlreadyExists", 100007, "ERR_ALREADY_EXISTS");
export const ErrResourceExhausted = ErrorFactory("ErrResourceExhausted", 100008, "ERR_RESOURCE_EXHAUSTED");
export const ErrDataLoss = ErrorFactory("ErrDataLoss", 100009, "ERR_DATA_LOSS");
export const ErrUnknown = ErrorFactory("ErrUnknown", 100010, "ERR_UNKNOWN");
export const ErrInternal = ErrorFactory("ErrInternal", 100011, "ERR_INTERNAL");
export const ErrNotImplemented = ErrorFactory("ErrNotImplemented", 100012, "ERR_NOT_IMPLEMENTED");
export const ErrUnavailable = ErrorFactory("ErrUnavailable", 100013, "ERR_UNAVAILABLE");
export const ErrDeadlineExceeded = ErrorFactory("ErrDeadlineExceeded", 100014, "ERR_DEADLINE_EXCEEDED");
