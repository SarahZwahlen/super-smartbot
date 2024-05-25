import Ajv, { JSONSchemaType } from 'ajv';

export const ajvValidator = <T>(
    schema: JSONSchemaType<T>,
    elementToValidate: { [key: string]: unknown }
) => {
    const ajv = new Ajv().compile(schema);
    return ajv(elementToValidate);
};
