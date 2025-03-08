# Rechtliche Informationen (Impressum)

## Impressum
**Firmenname**: Javier Aparicio Ríos Foto

**Inhaber**: <span id="owner">Javascript Blocked</span>

**Adresse**: <span id="address">Javascript Blocked</span>

**E-Mail**: <span id="email">Javascript Blocked</span>

**Telefon**: <span id="phone">Javascript Blocked</span>

**Handelsregister-Nummer**: <span id="che">Javascript Blocked</span>

**Mehrwertsteuer-Nummer**: Nicht mehrwertsteuerpflichtig.

---

## Kontaktinformationen
Bei Fragen oder Anliegen bezüglich dieser rechtlichen Informationen kontaktieren Sie uns bitte unter:

**E-Mail**: <span id="email2">Javascript Blocked</span>

**Telefon**: <span id="phone2">Javascript Blocked</span>

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
