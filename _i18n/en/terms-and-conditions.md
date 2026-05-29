# Terms & conditions (AGB)

If you book a session with me, these are the rules we work by:

---

## 1. Booking and payment
- Sessions are by appointment only.
- I ask for a 50% deposit to hold the date.
- The rest is due when we finish the shoot.

---

## 2. Cancellation and rescheduling
- Cancel less than 48 hours before the session → 20% fee may apply.
- Reschedule up to 48 hours ahead, if I have another slot free.

---

## 3. Photos and usage
- I keep copyright on the images.
- You get the usage we agree on (private, commercial, etc.) in writing.
- Don’t edit or resell the files without my OK.

---

## 4. Liability
I’m not responsible for delays caused by things outside my control — bad weather, gear failure, venue issues, that kind of thing.

---

## Questions?
**Email**: <span id="email">Javascript Blocked</span>

**Phone**: <span id="phone">Javascript Blocked</span>

<script>
  fetch('/contact.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("email").innerHTML =
        '<a href="mailto:' + data.email + '">' + data.email + '</a>';
      document.getElementById("phone").innerHTML = data.phone;    })
    .catch(error => console.error('Error loading contact data:', error));
</script>
