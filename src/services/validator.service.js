export async function validateBeforeSubmit(validator) {
  let result = await validator.validateAll();
}
