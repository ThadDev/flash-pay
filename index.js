  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      const container = document.getElementById('header');
      container.innerHTML = data;

      // Find and execute any scripts inside the fetched HTML
      const scripts = container.querySelectorAll("script");
      scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        
        // If script has a src attribute, load it
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          // Otherwise copy inline script content
          newScript.textContent = oldScript.textContent;
        }

        document.body.appendChild(newScript);
      });
    })
    .catch(err => console.error("Error loading header:", err));


    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      });

const copyBtn = document.getElementById("copyBtn")

copyBtn.addEventListener("click",() => {
    const referalLink = document.getElementById("referralLink").value.trim()
          navigator.clipboard.writeText(referalLink).then(() => {

const copiedMsg = document.getElementById("copiedMsg")
copiedMsg.style.display = "flex"
setTimeout(() =>{
    copiedMsg.style.display = "none"

},2000)
          })
}
) 
