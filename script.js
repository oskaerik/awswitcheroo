console.log("awswitcheroo loaded");

if (window.location.hash === "#awswitcheroo") {
  // Extract sign-in token and redirect to AWS console
  const data = JSON.parse(document.body.firstChild.innerHTML);
  window.location.replace(
    `https://signin.aws.amazon.com/federation?Action=login&Destination=${encodeURIComponent(
      "https://console.aws.amazon.com/"
    )}&SigninToken=${encodeURIComponent(data.SigninToken)}`
  );
}

// Wait for modal to open, then add link to get sign-in token
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    // Wait for modal to open
    const isModal =
      mutation.addedNodes &&
      mutation.addedNodes.length > 0 &&
      mutation.addedNodes[0].classList &&
      mutation.addedNodes[0].classList.contains("modal-subsection");
    if (!isModal) continue;
    const modal = mutation.addedNodes[0];

    // Get credentials from modal
    const accessKeyId = modal.querySelector("#accessKeyId").value;
    const secretAccessKey = modal.querySelector("#secretAccessKey").value;
    const sessionToken = modal.querySelector("#sessionToken").value;

    // Build sign-in token URL
    const session = JSON.stringify({
      sessionId: accessKeyId,
      sessionKey: secretAccessKey,
      sessionToken: sessionToken,
    });
    const signInTokenUrl = `https://signin.aws.amazon.com/federation?Action=getSigninToken&Session=${encodeURIComponent(
      session
    )}#awswitcheroo`;

    // Add link to modal
    const link = document.createElement("a");
    link.href = signInTokenUrl;
    link.target = "_blank";
    link.text = "awswitcheroo";
    modal.prepend(link);
  }
};
const observer = new MutationObserver(callback);
observer.observe(document, { childList: true, subtree: true });
