# Información Legal (Impressum)

## Impressum
**Nombre del Negocio**: Javier Aparicio Ríos Foto

**Propietario**: <span id="owner">Javascript Blocked</span>

**Dirección**: <span id="address">Javascript Blocked</span>

**Correo Electrónico**: <span id="email">Javascript Blocked</span>

**Teléfono**: <span id="phone">Javascript Blocked</span>

**Número de Registro Mercantil**: <span id="che">Javascript Blocked</span>

**Número de IVA**: No sujeto a IVA.

---

## Información de Contacto
Para cualquier pregunta o inquietud relacionada con esta página legal, contáctenos en:

**Correo Electrónico**: <span id="email2">Javascript Blocked</span>

**Teléfono**: <span id="phone2">Javascript Blocked</span>

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
