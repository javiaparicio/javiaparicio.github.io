# Terms and Conditions (AGB)

By booking a photography session with Javi Aparicio Foto, you agree to the following terms:

---

## **1. Booking and Payment**
- All sessions are by appointment only.
- A 50% deposit is required to confirm your session.
- Remaining balance is due upon completion of the session.

---

## **2. Cancellation and Rescheduling**
- Cancellations made less than 48 hours before the session may result in a 20% fee.
- Rescheduling is allowed up to 48 hours before the session, subject to availability.

---

## **3. Image Ownership and Usage Rights**
- All photographs remain the property of Javi Aparicio Foto.
- Clients are granted a license for personal or commercial use as agreed upon.
- Photographs may not be altered or resold without prior written consent.

---

## **4. Liability**
Javi Aparicio Foto is not liable for delays or failures caused by circumstances beyond our control (e.g., weather, technical issues).

---

## Contact Information
For any inquiries about these terms, please contact:

**Email**: <span id="email"></span>

**Phone**: <span id="phone"></span>

<script>
  fetch('/contact.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("email").innerHTML =
        '<a href="mailto:' + data.email + '">' + data.email + '</a>';
      document.getElementById("phone").innerHTML = data.phone;    })
    .catch(error => console.error('Error loading contact data:', error));
</script>
