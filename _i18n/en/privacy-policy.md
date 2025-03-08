# Privacy Policy

Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal data.

---

## **1. Data Collection**
We collect the following data through our contact form:
- Name
- Email address
- Phone number (if provided)
- Message content

When you submit data through the contact form, your information is processed by a third-party service:
- **Service**: Formspree
- **Purpose**: To handle and send email inquiries securely.
- **Data Stored**: The submitted data is stored temporarily by the third-party service and forwarded to our email.

For more information, please refer to [Formspree’s Privacy Policy](https://formspree.io/legal/privacy-policy).

---

## **2. Use of Google reCAPTCHA**
We use Google reCAPTCHA on our contact form to prevent spam and abuse. This service is provided by Google LLC and helps verify that the form submission is made by a human.

When you use our contact form, Google reCAPTCHA may collect:
- Your IP address
- Information about your device and browser (e.g., browser version, screen resolution, operating system)

This data is used to analyze user behavior and determine whether the request comes from a human or an automated system. Google processes this data in accordance with their privacy policy.

For more information, please refer to:
- [Google Privacy Policy](https://policies.google.com/privacy)
- [Google Terms of Service](https://policies.google.com/terms)

---

## **3. Data Usage**
We use your data to:
- Respond to inquiries and provide services.
- Improve our communication and user experience.

We **do not sell or distribute your data** to unauthorized third parties.

---

## **4. Data Protection**
We implement appropriate security measures to protect your personal data. While we trust third-party providers to manage data securely, we are not responsible for breaches on their end.

---

## **5. Your Rights**
You have the right to:
- Request access to your data.
- Request correction or deletion of your data.
- Withdraw consent for data processing.

To exercise these rights, please contact us at <span id="email2">Javascript Blocked</span>.

---

## Contact Information
For any questions or concerns regarding this Privacy Policy, please contact:

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
