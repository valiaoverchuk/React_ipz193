// https://github.com/react-hook-form/documentation/issues/225
export const useYupValidationResolver = (schema) => {
    return async (data) => {
        try {
            await schema.validate(data, { abortEarly: false });
            return { values: data, errors: {} };
        } catch (errors) {
            console.log({
                values: {},
                errors: errors.inner.reduce((allErrors, currentError) => {
                    return {
                        ...allErrors,
                        [currentError.path]: {
                            type: currentError.type,
                            message: currentError.message,
                        },
                    };
                }, {}),
            });

            return {
                values: {},
                errors: errors.inner.reduce((allErrors, currentError) => {
                    return {
                        ...allErrors,
                        [currentError.path]: {
                            type: currentError.type,
                            message: currentError.message,
                        },
                    };
                }, {}),
            };
        }
    };
}
