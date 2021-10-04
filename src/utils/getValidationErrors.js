export default function getValidationErrors(err) {
  const errors = {};

  err.inner.forEach((error) => {
    errors[error.path] = error.message;
  });

  return errors;
}
