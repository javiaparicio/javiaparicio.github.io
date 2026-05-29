# Privacy policy

Short version: I only collect what you send me through the contact form, and I use it to reply to you.

---

## 1. What the contact form collects
When you write to me, the form asks for:
- Your name
- Your email address
- A subject line
- Your message

There is no phone field on the form right now. If that changes, this page will be updated.

The form is handled by **Formspree** ([their privacy policy](https://formspree.io/legal/privacy-policy)). They pass the message on to my inbox and may store it briefly on their servers.

---

## 2. Spam protection
The form includes a hidden field (“honeypot”) that bots sometimes fill in. Those submissions are discarded. I do not use Google reCAPTCHA on this site.

---

## 3. What I do with your data
- Answer your enquiry
- Arrange a booking if we go ahead

I do not sell your data or hand it to marketers.

---

## 4. Security
I rely on Formspree and my email provider to keep messages safe. No system is perfect; if something goes wrong on their side, I’ll deal with it as required by Swiss law.

---

## 5. Your rights
You can ask me to:
- Tell you what I have stored about you
- Correct or delete it
- Stop using it

Write to <span id="email2">Javascript Blocked</span>.

---

## Contact
**Email**: <span id="email">Javascript Blocked</span>

**Phone**: <span id="phone">Javascript Blocked</span>

<script>
  fetch('/contact.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("email").innerHTML =
        '<a href="mailto:' + data.email + '">' + data.email + '</a>';
      document.getElementById("email2").innerHTML = document.getElementById("email").innerHTML;
      document.getElementById("phone").innerHTML = data.phone;    })
    .catch(error => console.error('Error loading contact data:', error));
</script>
