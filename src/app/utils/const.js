const API_TOKEN =
  "2o5uIzVic43mvpoPw5UgmnucVx2PFmbPItCWudhwwrpkzZ86dA65dc20zt5A";

export async function withAsync(fn, data) {
  try {
    if (typeof fn !== "function")
      throw new Error("The first argument must be a function");
    const response = await fn(data);
    return {
      response,
      error: null,
    };
  } catch (error) {
    return {
      error,
      response: null,
    };
  }
}
