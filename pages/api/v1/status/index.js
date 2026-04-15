async function status(request, response) {
  return response.status(200).json({
    updated_at: new Date().toISOString(),
  });
}

export default status;
