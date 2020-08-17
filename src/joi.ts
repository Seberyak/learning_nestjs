import * as OriginalJoi from "joi"
import { ObjectId } from "mongodb";


type ObjectIdSchema = OriginalJoi.AnySchema;

interface ExtendedJoi extends OriginalJoi.Root {
  objectId(): ObjectIdSchema;
}

const Joi: ExtendedJoi = OriginalJoi.extend({
  type: "objectId",
  messages: {
    "objectId.base":
      "needs to be a string of 12 bytes or a string of 24 hex characters",
  },
  validate(value, helpers) {
    const isRequired = helpers.schema._flags.presence === "required";
    const error = helpers.error("objectId.base");

    return {
      value: new ObjectId(value),
      errors: value
        ? ObjectId.isValid(value)
          ? null
          : error
        : isRequired
          ? error
          : null,
    };
  },
});

export default Joi;