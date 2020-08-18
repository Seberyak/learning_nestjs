import { MError } from './merror';

export function validationError() : never {
  throw new MError(400,"Validation Error");
}