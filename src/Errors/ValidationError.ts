import { MError } from './MError';

export function validationError() : never {
  throw new MError(400,"Validation Error");
}