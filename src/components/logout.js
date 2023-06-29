const logout = async () => {
  try {
    await fetch("/api/auth/logout", {
      method: "GET",
      credentials: "include",
    });

    window.location.href = "/login"; 
  } catch (error) {
    // Handle error
  }
};

export default logout;
