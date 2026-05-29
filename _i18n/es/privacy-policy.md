# Privacidad

En resumen: solo guardo lo que me envías con el formulario de contacto, y lo uso para responderte.

---

## 1. Formulario de contacto
El formulario pide:
- Nombre
- Correo electrónico
- Asunto
- Mensaje

Ahora mismo no hay campo de teléfono. Si lo añado, actualizaré esta página.

El envío lo gestiona **Formspree** ([su política de privacidad](https://formspree.io/legal/privacy-policy)). El mensaje llega a mi correo; Formspree puede guardarlo un tiempo en sus servidores.

---

## 2. Protección contra spam
Hay un campo oculto (“honeypot”) que a veces rellenan los bots. Esos envíos se descartan. No uso Google reCAPTCHA en esta web.

---

## 3. Uso de los datos
- Responder tu consulta
- Organizar una sesión si seguimos adelante

No vendo tus datos ni los paso a terceros con fines publicitarios.

---

## 4. Seguridad
Confío en Formspree y en mi proveedor de correo. Ningún sistema es perfecto; si algo falla en su lado, actuaré según la ley suiza.

---

## 5. Tus derechos
Puedes pedirme:
- Saber qué datos tuyos tengo
- Corregirlos o borrarlos
- Dejar de usarlos

Escribe a <span id="email2">Javascript Blocked</span>.

---

## Contacto
**Correo**: <span id="email">Javascript Blocked</span>

**Teléfono**: <span id="phone">Javascript Blocked</span>

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
