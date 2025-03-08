# Política de Privacidad

Su privacidad es importante para nosotros. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos sus datos personales.

---

## **1. Recopilación de Datos**
Recopilamos los siguientes datos a través de nuestro formulario de contacto:
- Nombre
- Dirección de correo electrónico
- Número de teléfono (si se proporciona)
- Contenido del mensaje

Cuando envía datos a través del formulario de contacto, su información es procesada por un servicio de terceros:
- **Servicio**: Formspree
- **Propósito**: Gestionar y enviar consultas por correo electrónico de forma segura.
- **Datos Almacenados**: Los datos enviados se almacenan temporalmente por el servicio de terceros y se reenvían a nuestro correo electrónico.

Para más información, consulte la [Política de Privacidad de Formspree](https://formspree.io/legal/privacy-policy).

---

## **2. Uso de Google reCAPTCHA**
Utilizamos Google reCAPTCHA en nuestro formulario de contacto para prevenir spam y abusos. Este servicio es proporcionado por Google LLC y ayuda a verificar que el envío del formulario lo realiza una persona.

Cuando utiliza nuestro formulario de contacto, Google reCAPTCHA puede recopilar:
- Su dirección IP
- Información sobre su dispositivo y navegador (por ejemplo, versión del navegador, resolución de pantalla, sistema operativo)

Estos datos se utilizan para analizar el comportamiento del usuario y determinar si la solicitud proviene de una persona o de un sistema automatizado. Google procesa estos datos de acuerdo con su política de privacidad.

Para más información, consulte:
- [Política de Privacidad de Google](https://policies.google.com/privacy)
- [Términos de Servicio de Google](https://policies.google.com/terms)

---

## **3. Uso de los Datos**
Utilizamos sus datos para:
- Responder a consultas y proporcionar servicios.
- Mejorar nuestra comunicación y experiencia del usuario.

**No vendemos ni distribuimos sus datos** a terceros no autorizados.

---

## **4. Protección de Datos**
Implementamos medidas de seguridad adecuadas para proteger sus datos personales. Aunque confiamos en que los proveedores de terceros gestionen los datos de forma segura, no somos responsables de las brechas de seguridad en su parte.

---

## **5. Sus Derechos**
Usted tiene derecho a:
- Solicitar acceso a sus datos.
- Solicitar la corrección o eliminación de sus datos.
- Retirar el consentimiento para el procesamiento de datos.

Para ejercer estos derechos, contáctenos en <span id="email2">Javascript Blocked</span>.

---

## Información de Contacto
Para cualquier pregunta o inquietud sobre esta Política de Privacidad, contáctenos:

**Correo Electrónico**: <span id="email">Javascript Blocked</span>

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
