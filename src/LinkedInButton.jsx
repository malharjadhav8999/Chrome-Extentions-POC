const LinkedInButton = () => {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/malhar-jadhav-137b2a215/", "_blank");
  };

  return (
    <button
      onClick={openLinkedIn}
      style={{
        backgroundColor: "#0077B5", // LinkedIn Blue
        color: "white",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      Open LinkedIn
    </button>
  );
};

export default LinkedInButton;
