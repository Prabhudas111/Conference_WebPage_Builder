const logout = async () => {
  try {
    await fetch("/api/auth/logout", {
      method: "GET",
      credentials: "include",
    });

    // Perform any additional actions after logout
    window.location.href = "/login"; // Redirect to the login page
  } catch (error) {
    // Handle error
  }
};

export default logout;
