const cvForm = document.getElementById("cv-access-form");
const cvGate = document.getElementById("cv-gate");
const cvContent = document.getElementById("cv-content");
const cvError = document.getElementById("cv-access-error");
const cvPassword = document.getElementById("cv-password");
const cvSubmit = cvForm?.querySelector("button[type='submit']");

const fromBase64 = value => Uint8Array.from(atob(value), character => character.charCodeAt(0));

cvForm?.addEventListener("submit", async event => {
  event.preventDefault();
  cvError.hidden = true;
  cvSubmit.disabled = true;
  cvSubmit.firstChild.textContent = "Checking… ";

  try {
    const response = await fetch("assets/cv-content.enc?v=20261007-2", { cache: "no-store" });
    if (!response.ok) throw new Error("CV data unavailable");
    const encrypted = await response.json();
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(cvPassword.value),
      "PBKDF2",
      false,
      ["deriveKey"]
    );
    const key = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: fromBase64(encrypted.salt),
        iterations: encrypted.iterations,
        hash: "SHA-256"
      },
      passwordKey,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
    const plaintext = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: fromBase64(encrypted.iv), tagLength: 128 },
      key,
      fromBase64(encrypted.ciphertext)
    );

    cvContent.innerHTML = new TextDecoder().decode(plaintext);
    cvContent.hidden = false;
    cvGate.hidden = true;
    const year = cvContent.querySelector("#year");
    if (year) year.textContent = new Date().getFullYear();
    cvContent.querySelector("h1")?.focus();
  } catch {
    cvError.textContent = "Incorrect password. Please try again.";
    cvError.hidden = false;
    cvPassword.value = "";
    cvPassword.focus();
  } finally {
    cvSubmit.disabled = false;
    cvSubmit.firstChild.textContent = "View CV ";
  }
});
