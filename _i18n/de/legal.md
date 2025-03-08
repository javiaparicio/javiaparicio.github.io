# Rechtliche Informationen (Impressum)

## Impressum
**Firmenname**: Javier Aparicio Ríos Foto

**Inhaber**: <span id="owner"></span>

**Adresse**: <span id="address"></span>

**E-Mail**: <span id="email"></span>

**Telefon**: <span id="phone"></span>

**Handelsregister-Nummer**: <span id="che"></span>

**Mehrwertsteuer-Nummer**: Nicht mehrwertsteuerpflichtig.

---

## Kontaktinformationen
Bei Fragen oder Anliegen bezüglich dieser rechtlichen Informationen kontaktieren Sie uns bitte unter:

**E-Mail**: <span id="email2"></span>

**Telefon**: <span id="phone2"></span>

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
