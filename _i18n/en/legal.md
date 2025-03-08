# Legal Information (Impressum)

## Impressum
**Business Name**: Javier Aparicio Ríos Foto

**Owner**: <span id="owner"></span>

**Address**: <span id="address"></span>

**Email**: <span id="email"></span>

**Phone**: <span id="phone"></span>

**Commercial Register Number**: <span id="che"></span>

**VAT Number**: Not subject to VAT.

---

## Contact Information
For any questions or concerns regarding this Legal Page, please contact us at:

**Email**: <span id="email2"></span>

**Phone**: <span id="phone2"></span>

<script>
  fetch('/contact.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("email").innerHTML =
        '<a href="mailto:' + data.email + '">' + data.email + '</a>';
      document.getElementById("email2").innerHTML = document.getElementById("email").innerHTML;
      document.getElementById("phone").innerHTML = data.phone;
      document.getElementById("phone2").innerHTML = data.phone;
      document.getElementById("che").innerHTML = data.che;
      document.getElementById("address").innerHTML = data.address;
      document.getElementById("owner").innerHTML = data.owner;
    })
    .catch(error => console.error('Error loading contact data:', error));
</script>
