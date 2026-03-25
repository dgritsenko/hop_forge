import { ZodType, z } from 'zod';

export default function validateFormData<T extends ZodType<any, any, any>>(
    schema: T,
    data: z.infer<T>
) {
    const validation = schema.safeParse(data);

    if (!validation.success) {
        return {
            success: false,
            errors: validation.error.flatten().fieldErrors,
        };
    }

    return {
        success: true,
        data: validation.data,
    };
}